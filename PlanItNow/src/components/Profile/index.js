import React from 'react';

import DrawerProfile from '../DrawerProfile';

import { View, Image, AsyncStorage, TouchableOpacity, DrawerLayoutAndroid, BackHandler } from 'react-native'

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Card, CardItem, Text, Drawer,
} from 'native-base';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

import { fetchItin, logout } from '../../actions';
import Tags from './Tags';

class Profile extends React.Component {
  constructor(props) {
    super(props)
  }

  closeDrawer() {
    this.drawer._root.close()
  };
  openDrawer() {
    this.drawer._root.open()
  };

  componentWillMount() {
    const { params } = this.props.navigation.state;

    if(params.willFetch){
      const { fetchItin , user } = this.props;
      AsyncStorage.getItem('token', (err,_token) => {
        if(err) {
          console.log(err);
        } else {
          fetchItin(user.userdata._id, _token);
        }
      });

    }
  }

  handleLogout() {
    this.props.logout();
    const { navigate } = this.props.navigation;
    navigate('Login');
  }

  handleBackButton() {
    return true
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton)
  }

  render () {
    var navigationView = (
      <View style={{
          flex: 1,
          backgroundColor: '#5E35B1',
          justifyContent: 'center',
          marginTop: -40
        }}>
        <View style={{
            height: 140,
            backgroundColor: '#5E35B1',
            alignItems: 'center'}}>

          <Image
            style={{
              marginTop:0,
              width: 100,
              height: 140,
              alignItems: 'center',
              resizeMode: 'contain'
             }}
            source={require('../../assets/pin-logo-transparent.png')}
          />

        </View>
        <View>
          <View style={{
            }}>
            <Button outline light bordered style={{ alignSelf:'center'  }} onPress={()=>this.handleLogout()}>
                <Text style={{ color: '#fff', fontSize: 15, fontWeight: 'bold' }}>Logout</Text>
            </Button>
          </View>
        </View>
      </View>
    );

    return (
      <DrawerLayoutAndroid
        ref={c => this.drawer = c}
        drawerWidth={200}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}>
      <Container style={{ backgroundColor: '#B39DDB' }}>
        <Header style={{ backgroundColor: '#5E35B1' }}>
          <Left>
            <Button transparent
              onPress={ ()=> this.drawer.openDrawer()}
              style={{
              backgroundColor: '#5E35B1',
            }}>
              <Icon name="menu" color="white" size={22}
              />
            </Button>
          </Left>
          <Body>
            <Title>
              {this.props.user.userdata.name}
            </Title>
          </Body>
        </Header>
        {this.props.itineraries.length === 0 ? <Image
          style={{width:'100%', height:'100%', marginTop: -30}}
          source={{ uri : 'http://i.imgur.com/xyH2gr7.png' }}/>
          :
        <Content padder>
          {
            this.props.itineraries.map( (itinerary,index) => (
              <View key={index} style={{marginBottom:20}}>
              <Card>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail', {_itinerary:itinerary })}>
                    <Image
                      style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        width: '100%',
                        height: 200,
                        backgroundColor: 'rgba(52, 52, 52, 0.8)' }}
                      source={{ uri : itinerary.places[Math.round(Math.random()*(itinerary.days-1))].place.photo }}>
                      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', backgroundColor: 'rgba(52, 52, 52, 0.4)' }}>
                        <Text style={{
                            color: '#fff', fontWeight: 'bold', padding: 16, fontSize: 20
                          }}>{itinerary.places[0].place.city} {itinerary.days} Days Trip</Text>
                      </View>
                    </Image>
                  </TouchableOpacity>
                  <CardItem>
                    <Body>
                      <Text>
                        Posted at : {(new Date(itinerary.createdAt)).toLocaleDateString()}, {(new Date(itinerary.createdAt)).toLocaleTimeString()}
                      </Text>
                      <View style={{ flexDirection: 'row', flexWrap: 'wrap'}}>
                        <Tags itinerary={itinerary}/>
                      </View>

                    </Body>
                  </CardItem>
              </Card>
              </View>
            ))
          }
        </Content>
      }
        <Button
          onPress={() => this.props.navigation.navigate('inputQuery')}
          style={{
            justifyContent: 'center',
            width: 60,
            height: 60,
            backgroundColor: '#FF7043',
            position: 'absolute',
            bottom: 10,
            right: 20,
            borderRadius: 100
          }}>
          <Icon name="plus" color="#5E35B1" size={26} style={{
            textAlign: 'center',
            }}/>
        </Button>
      </Container>
    </DrawerLayoutAndroid>
    )
  }
}

const mapStateToProps = state => ({
  user: state.logindata,
  itineraries: state.itineraries
})
const mapDispatchToProps = dispatch => ({
  fetchItin: (userid,token) => dispatch(fetchItin(userid,token)),
  logout: () => dispatch(logout())
})


export default connect(mapStateToProps,mapDispatchToProps)(Profile);
