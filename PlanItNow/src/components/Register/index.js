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
  Button,
  Icon
} from 'native-base';

class Register extends React.Component {
  constructor(props) {
    super(props)

  }

  static navigationOptions = {
    headerTitle: 'SignUp',
    headerTintColor: '#000',
    headerStyle: {
      backgroundColor: '#FFF59D'
    }

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
              width: '70%',
              height: '60%',
            }}>
            <Image
              style={{
                width: 80,
                height: 80,
                alignSelf: 'center',
              }}
              source={{ uri : 'http://www.freeiconspng.com/uploads/orange-location-icon-png-18.png'}}
            />

            <Item floatingLabel>
              <Icon name='mail' style={{fontSize: 20, color: 'white'}} />
              <Label
                style={{color: '#fff'}}
              >Email</Label>
              <Input />
            </Item>

            <Item floatingLabel>
              <Icon name='lock' style={{fontSize: 20, color: 'white'}} />
              <Label
                style={{color: '#fff'}}
              >Password</Label>
              <Input />
            </Item>


            <Button
                block warning
                style={{
                  marginTop: 20,
                  alignItems: 'center',
                  backgroundColor: '#FFEB3B'
                }}
                >
                <Text
                  style={{color: '#000'}}
                  >Submit</Text>
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

export default Register
