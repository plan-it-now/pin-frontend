import React from 'react';

import {
  View,
  Image,
  TouchableHighlight
} from 'react-native';

import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
<<<<<<< HEAD
  Button,
  Left,
  Right,
  Body,
  Card,
  CardItem,
  Text,
} from 'native-base';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


=======
  Button, Left, Right, Body, Icon
} from 'native-base';

>>>>>>> resolve nothing to changes
class Profile extends React.Component {
  constructor(props) {
    super(props)

  }

  render () {
    return (
<<<<<<< HEAD
      <Container style={{ backgroundColor: '#B39DDB' }}>
        <Header style={{ backgroundColor: '#5E35B1' }}>
          <Left>
            <Button style={{
              backgroundColor: '#5E35B1',

            }}>
              <Icon name="menu" color="white" size={22}
              />
=======
      <Container>
        <Header>
          <Left>
            <Button transparant>
              <Icon name='menu' />
>>>>>>> resolve nothing to changes
            </Button>
          </Left>
          <Body>
            <Title>
              Your Name
            </Title>
          </Body>
        </Header>

<<<<<<< HEAD
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

=======
        <Content>
          <Text>Test</Text>
        </Content>

        <Footer backgroundColor="#fff">
          <Button block>
            <Text>Add</Text>
          </Button>
        </Footer>
>>>>>>> resolve nothing to changes
      </Container>
    )
  }

}

export default Profile;
