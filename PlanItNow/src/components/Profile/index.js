import React from 'react';

import {
  View,
<<<<<<< HEAD
  Image
=======
  Text
>>>>>>> 3c5165dc8a0e738a8474f83cef425335a8ab9236
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

>>>>>>> 3c5165dc8a0e738a8474f83cef425335a8ab9236
class Profile extends React.Component {
  constructor(props) {
    super(props)

  }

  render () {
    return (
<<<<<<< HEAD
      <Container style={{ backgroundColor: '#fff' }}>
        <Header style={{ backgroundColor: '#fc5757' }}>
          <Left>
            <Button style={{
              backgroundColor: '#fc5757',

            }}>
              <Icon name="menu" color="white" size={22}
              />
=======
      <Container>
        <Header>
          <Left>
            <Button transparant>
              <Icon name='menu' />
>>>>>>> 3c5165dc8a0e738a8474f83cef425335a8ab9236
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
            <View style={{  }}>
              <Image
                style={{ width: '100%', height: 200, backgroundColor: 'hsl(360, 100%, 100%)' }}
                source={{ uri : 'http://alindstransport.com/wp-content/uploads/2016/09/Tugu-Jogja-Yogyakarta-jogja.jpg' }} />
              <CardItem>
                <Body>
                  <Text>
                    Yogyakarta, Indonesia
                  </Text>
                  <Text note>
                    12 Mei 2017
                  </Text>
                </Body>
              </CardItem>
            </View>

            <View>
              <Image
                style={{ width: '100%', height: 200, backgroundColor: '#696969' }}
                source={{ uri : 'https://4.bp.blogspot.com/-4X3c0CA9Qp4/V-t1RvcGgII/AAAAAAAAAWY/CM_VOv8vjeYRpfnn6FJeIoZP44jQx6gSACLcB/s1600/600.PNG' }} />
              <CardItem>
                <Body>
                  <Text>
                    Yogyakarta, Indonesia
                  </Text>
                  <Text>
                    12 Mei 2017
                  </Text>
                </Body>
              </CardItem>
            </View>
          </Card>
        </Content>

        <Button
          style={{
            width: 60,
            height: 60,
            backgroundColor: '#fc5757',
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
>>>>>>> 3c5165dc8a0e738a8474f83cef425335a8ab9236
      </Container>
    )
  }

}

export default Profile;
