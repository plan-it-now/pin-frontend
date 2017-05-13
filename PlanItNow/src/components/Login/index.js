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
    if(this.props.logindata.shouldRedirectSignIn && !prevProps.logindata.shouldRedirectSignIn){
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
          source={{ uri : 'https://s-media-cache-ak0.pinimg.com/originals/d7/99/d9/d799d98dac43a2e49d71eac78d632b79.jpg' }}
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
              source={require('../../assets/pin-logo-transparent.png')}/>
            <Item>
              <Icon name='mail' style={{fontSize: 20, color: 'white'}} />
              <Input
                placeholder = "Email"
                placeholderTextColor = "#fff"
                onChangeText = {(text) => this.setState({email:text})}
                style={{color: '#fff'}}
              />
            </Item>
            <Item>
              <Icon name='lock' style={{fontSize: 20, color: 'white'}} />
              <Input
                placeholder = "Password"
                placeholderTextColor = "#fff"
                secureTextEntry = {true}
                onChangeText = {(text) => this.setState({password:text})}
                style={{color: '#fff'}}
              />
            </Item>
            <Button onPress={() => this.loginHandler()}
                block warning
                style={{
                  marginTop: 20,
                  alignItems: 'center',
                  backgroundColor: '#5E35B1'
                }}
                >
                <Text
                  style={{color: '#fff'}}
                  >Sign In</Text>
              </Button>
              <Button onPress={() => this.navigateToRegister()}
                  block warning
                  style={{
                    marginTop: 20,
                    alignItems: 'center',
                    backgroundColor: '#5E35B1'
                  }}
                  >
                  <Text
                    style={{color: '#fff'}}
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
    zIndex:100,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  }
});

const mapStateToProps = (state) => ({
  logindata: state.logindata
})

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
