import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Image, AsyncStorage } from 'react-native';

import { Container, Content, Form, Item, Input, Label, Button, Icon } from 'native-base';
import { login } from '../../actions'


class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      // isRedirect: false,
      warning: ''
    }
  }

  static navigationOptions = {
    headerTitle: 'Sign In',
    headerTintColor: '#000',
    headerStyle: {
      backgroundColor: '#FFF59D'
    }
  }

  loginSuccess() {
    const { navigate } = this.props.navigation
    navigate('inputQuery')
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('prev', prevProps.logindata);
    // console.log('next',this.props.logindata);
    if(this.props.logindata.shouldRedirect && !prevProps.logindata.shouldRedirect){
      // this.setState({isRedirect: true})
      this.loginSuccess()
    }
  }

  loginHandler() {
    this.props.login(this.state)
    console.log(this.props.logindata)
  }

  navigateToRegister() {
    const { navigate } = this.props.navigation
    navigate('Register')
  }

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
              height: '80%',
            }}>
            <Image
              style={{
                width: 150,
                height: 150,
                alignSelf: 'center',
              }}
              source={require('../../assets/pin-logo-transparent.png')}
            />
            <Item floatingLabel>
              <Icon name='mail' style={{fontSize: 20, color: 'white'}} />

              <Label
                style={{color: '#fff'}}
              >Email</Label>
              <Input
                onChangeText = {(text) => this.setState({email:text})}
                style={{color: '#fff'}}
              >

              </Input>
            </Item>
            <Item floatingLabel>
              <Icon name='lock' style={{fontSize: 20, color: 'white'}} />
              <Label
                style={{color: '#fff'}}
              >Password</Label>
              <Input
                onChangeText = {(text) => this.setState({password:text})}
                style={{color: '#fff'}}
              />
            </Item>
            <Button onPress={() => this.loginHandler()}
                block warning
                style={{
                  marginTop: 20,
                  alignItems: 'center',
                  backgroundColor: '#FFEB3B'
                }}
                >
                <Text
                  style={{color: '#000'}}
                  >Sign In</Text>
              </Button>
              <Button onPress={() => this.navigateToRegister()}
                  block warning
                  style={{
                    marginTop: 20,
                    alignItems: 'center',
                    backgroundColor: '#FFEB3B'
                  }}
                  >
                  <Text
                    style={{color: '#000'}}
                    >Sign Up</Text>
                </Button>
                <Text>{this.state.warning}</Text>
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

const mapStateToProps = (state) => ({
  logindata: state.logindata
})

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
