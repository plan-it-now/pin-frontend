import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button
} from 'native-base';

class Login extends React.Component {
  constructor(props) {
    super(props)

  }

  static navigationOptions = {
    headerTitle: 'SignIn',
    headerTintColor: '#CCC'
  };

  render () {
    return (
      <View
        style={styles.containerLogin}
      >
        <Image
          style={styles.backgroundImage}
          source={{ uri : 'http://4.bp.blogspot.com/-dXMb3OIPqiw/UV5pkcbDQhI/AAAAAAAACPw/HnPIlLoEbj0/s1600/3.jpg' }}

        >
          <View
            style={{
              width: '80%',
              height: '60%',
            }}
          >
            <Form>
              <Item floatingLabel>
                <Label
                  style={{color: '#fff'}}
                >Username</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label
                  style={{color: '#fff'}}
                >Password</Label>
                <Input />
              </Item>
            </Form>
            <Button
                block warning
                style={{
                  marginTop: 20,
                  alignItems: 'center',
                  backgroundColor: '#FFCA28'
                }}
                >
                <Text
                  style={{color: '#fff'}}
                  >SignIn</Text>
              </Button>
          </View>
        </Image>
    </View>
    )
  }

}

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  backgroundImage: {
    flex: 1,
    zIndex: 100,
    resizeMode: 'cover',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Login;
