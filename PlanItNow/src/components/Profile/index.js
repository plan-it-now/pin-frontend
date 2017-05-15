import React from 'react';

import DrawerProfile from '../DrawerProfile';

import {

  View,

  Image,

  TouchableHighlight,

  DrawerLayoutAndroid

} from 'react-native';



import {

  Container,

  Header,

  Title,

  Content,

  Footer,

  FooterTab,

  Button,

  Left,

  Right,

  Body,

  Card,

  CardItem,

  Text,

  Drawer,

} from 'native-base';



import Icon from 'react-native-vector-icons/MaterialCommunityIcons';





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



  render () {
    var navigationView = (
      <View style={{
          flex: 1,
          backgroundColor: '#E8EAF6',
          justifyContent: 'flex-start',
        }}>
        <View style={{
            height: 100,
            backgroundColor: '#fff',
            alignItems: 'center'}}>
          <Image
            style={{
              width: 100,
              height: 100,
              alignItems: 'center',
             }}
            source={require('../../assets/pin.png')}
          ></Image>
        </View>
        <View>
          <View style={{
              height: 40,
              paddingTop: 10,
              paddingLeft: 10,
            }}>
            <Text>Profile</Text>
          </View>
          <View style={{
              height: 40,
              paddingTop: 10,
              paddingLeft: 10,
            }}>
            <Text>Settings</Text>
          </View>
          <View style={{
              height: 40,
              paddingTop: 10,
              paddingLeft: 10,
            }}>
            <Text>Log out</Text>
          </View>
        </View>
      </View>
    );


    return (
      <DrawerLayoutAndroid
        ref={c => this.drawer = c}
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}>
      <Container style={{ backgroundColor: '#B39DDB' }}>

        <Header style={{ backgroundColor: '#5E35B1' }}>

          <Left>

            <Button
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

              Your Name

            </Title>

          </Body>

        </Header>



        <Content padder>

          <Card>

            <View>

              <TouchableHighlight onPress={this._onPressButtoon}>

                <Image

                  style={{

                    flex: 1,

                    flexDirection: 'column',

                    justifyContent: 'flex-end',

                    width: '100%',

                    height: 200,

                    backgroundColor: 'rgba(52, 52, 52, 0.8)' }}

                  source={{ uri : 'http://alindstransport.com/wp-content/uploads/2016/09/Tugu-Jogja-Yogyakarta-jogja.jpg' }}>

                  <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', backgroundColor: 'rgba(52, 52, 52, 0.4)' }}>

                    <Text style={{

                        color: '#fff', fontWeight: 'bold', margin: 5, flexWrap: 'wrap'

                      }}>Yogyakarta Trip</Text>

                    <Text style={{ color: '#fff', margin: 5}}>

                      12 Mei 2017

                    </Text>

                  </View>

                </Image>

              </TouchableHighlight>

              <CardItem>

                <Body>

                  <Text>

                    Tugu, Yogyakarta

                  </Text>

                  <Text note>

                    2 days ago

                  </Text>

                </Body>

              </CardItem>

            </View>



            <View>

              <Image

                style={{

                  flex: 1,

                  flexDirection: 'column',

                  justifyContent: 'flex-end',

                  width: '100%',

                  height: 200,

                  backgroundColor: 'rgba(52, 52, 52, 0.8)' }}

                source={{ uri : 'https://4.bp.blogspot.com/-4X3c0CA9Qp4/V-t1RvcGgII/AAAAAAAAAWY/CM_VOv8vjeYRpfnn6FJeIoZP44jQx6gSACLcB/s1600/600.PNG' }}>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', backgroundColor: 'rgba(52, 52, 52, 0.4)' }}>

                  <Text style={{

                      color: '#fff', fontWeight: 'bold', margin: 5, flexWrap: 'wrap'

                    }}>Bali Trip</Text>

                  <Text style={{ color: '#fff', margin: 5}}>

                    12 Mei 2017

                  </Text>

                </View>

              </Image>

              <CardItem>

                <Body>

                  <Text>

                    Tugu, Yogyakarta

                  </Text>

                  <Text note>

                    2 days ago

                  </Text>

                </Body>

              </CardItem>

            </View>



          </Card>

        </Content>



        <Button

          style={{

            justifyContent: 'center',

            width: 60,

            height: 60,

            backgroundColor: '#5E35B1',

            position: 'absolute',

            bottom: 10,

            right: 20,

            borderRadius: 100

          }}>

          <Icon name="plus" color="white" size={26} style={{

            textAlign: 'center',

            }}/>

        </Button>



      </Container>
    </DrawerLayoutAndroid>


    )

  }



}



export default Profile;
