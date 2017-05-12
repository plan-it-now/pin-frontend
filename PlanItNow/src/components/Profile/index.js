import React from 'react';

import {
  View,
  Text
} from 'react-native';

import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button, Left, Right, Body, Icon
} from 'native-base';

class Profile extends React.Component {
  constructor(props) {
    super(props)

  }

  render () {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparant>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>
              Your Name
            </Title>
          </Body>
        </Header>

        <Content>
          <Text>Test</Text>
        </Content>

        <Footer backgroundColor="#fff">
          <Button block>
            <Text>Add</Text>
          </Button>
        </Footer>
      </Container>
    )
  }

}

export default Profile;
