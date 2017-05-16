import React from 'react';
import { connect } from 'react-redux';

import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';

import { Container, Content, Form, Item, Input, Label, Button, Icon } from 'native-base';

import { signup } from '../../actions'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      warningMessage: '',
      warning1: '',
      warning2: '',
      warning3: '',
    }
  }

  static navigationOptions = {
    headerTitle: 'SignUp',
    headerTintColor: '#000',
    headerStyle: {
      backgroundColor: '#FFF59D'
    }
  };

  loginSuccess() {
    const { navigate } = this.props.navigation
    navigate('Profile')
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.logindata.shouldRedirectSignUp && !prevProps.logindata.shouldRedirectSignUp){
      this.loginSuccess()
    }
  }

  signupHandler() {
    const regexName = /^[a-zA-Z ]{6,30}$/;
    let checkName = false;
    let checkEmail = false;
    let checkPassword = false;
    if(regexName.test(this.state.name)){
      checkName = true
      this.setState({warning1: ''})
    } else {
      this.setState({warningMessage: 'SignUp Error :', warning1: '• Wrong Name format'})
    }

    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(regexEmail.test(this.state.email)){
      checkEmail = true
      this.setState({warning2: ''})
    } else {
      this.setState({warningMessage: 'SignUp Error :', warning2: '• Wrong Email format'})
    }

    const regexPassword = /^[a-zA-Z0-9!@#$%^&*]{6,20}$/;
    if(regexPassword.test(this.state.password)){
      checkPassword = true
      this.setState({warning3: ''})
    } else {
      this.setState({warningMessage: 'SignUp Error :', warning3: '• Password length min 6, max 20 char'})
    }

    if(checkName && checkEmail && checkPassword) {
      this.setState({warning1: '', warning2: '', warning3: '', warningMessage: ''})
      this.props.signup({name: this.state.name, email: this.state.email, password: this.state.password})
    }
  }

  render () {
    return (
      <Container>
      <View
        style={styles.containerLogin}
      >
      <StatusBar hidden={true}/>
        <Image
          style={styles.backgroundImage}
          source={{ uri : 'https://s-media-cache-ak0.pinimg.com/originals/d7/99/d9/d799d98dac43a2e49d71eac78d632b79.jpg' }}
        >
          <View
            style={{
              marginTop: 50,
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
              <Icon name='person' style={{fontSize: 20, color: 'white'}} />
              <Input
                placeholder = "Name"
                placeholderTextColor = "#fff"
                onChangeText = {(text) => this.setState({name:text})}
                style={{color: '#fff'}}
              />
            </Item>
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
                placeholder = " Password"
                placeholderTextColor = "#fff"
                secureTextEntry = {true}
                onChangeText = {(text) => this.setState({password:text})}
                style={{color: '#fff'}}
              />
            </Item>
            <Button onPress={() => this.signupHandler()}
                block
                style={{
                  marginTop: 20,
                  alignItems: 'center',
                  backgroundColor: '#5E35B1'
                }}
                >
                <Text
                  style={{color: '#fff'}}
                  >Register</Text>
              </Button>
          </View>
          <View style={{flex:1, justifyContent:'center', flexDirection:'column', marginTop:-130}}>
            <Text style={{fontSize:18, color:'#fff', marginTop:10}}>{this.state.warningMessage}</Text>
            <Text style={{fontSize:15, color:'#fff'}}>{this.state.warning1}</Text>
            <Text style={{fontSize:15, color:'#fff'}}>{this.state.warning2}</Text>
            <Text style={{fontSize:15, color:'#fff'}}>{this.state.warning3}</Text>
          </View>
        </Image>
    </View>

    </Container>
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
  signup: (user) => dispatch(signup(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);
