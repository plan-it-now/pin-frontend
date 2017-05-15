import React from 'react';
import { connect } from 'react-redux';

import { View, Text, StyleSheet, Image } from 'react-native';

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
      checkName: false,
      checkEmail: false,
      checkPassword: false
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
    navigate('inputQuery')
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.logindata.shouldRedirectSignUp && !prevProps.logindata.shouldRedirectSignUp){
      this.loginSuccess()
    }
  }

  signupHandler() {
    const regexName = /^[a-zA-Z ]{6,30}$/;
    if(regexName.test(this.state.name)){
      this.setState({checkName: true})
      this.setState({warning1: ''})
    } else {
      this.setState({warningMessage: 'SignUp Error :', warning1: '• Wrong Name format'})
      this.setState({checkName: false})
    }

    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(regexEmail.test(this.state.email)){
      this.setState({checkEmail: true})
      this.setState({warning2: ''})
    } else {
      this.setState({warningMessage: 'SignUp Error :', warning2: '• Wrong Email format'})
      this.setState({checkEmail: false})
    }

    const regexPassword = /^[a-zA-Z0-9!@#$%^&*]{6,20}$/;
    if(regexPassword.test(this.state.password)){
      this.setState({checkPassword: true})
      this.setState({warning3: ''})
    } else {
      this.setState({warningMessage: 'SignUp Error :', warning3: '• Password length min 6, max 20 char'})
      this.setState({checkPassword: false})
    }

    if(this.state.checkName && this.state.checkEmail && this.state.checkPassword) {
      this.props.signup({name: this.state.name, email: this.state.email, password: this.state.password})
      this.setState({warning1: '', warning2: '', warning3: '', warningMessage: ''})
    }

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
              <Icon name='person' style={{fontSize: 20, color: 'white'}} />

              <Input
                placeholder = "Name"
                placeholderTextColor = "#fff"
                onChangeText = {(text) => this.setState({name:text})}
                style={{color: '#fff'}}/>
            </Item>

            <Item>
              <Icon name='mail' style={{fontSize: 20, color: 'white'}} />

              <Input
                placeholder = "Email"
                placeholderTextColor = "#fff"
                onChangeText = {(text) => this.setState({email:text})}
                style={{color: '#fff'}}/>
            </Item>

            <Item>
              <Icon name='lock' style={{fontSize: 20, color: 'white'}} />

              <Input
                placeholder = "Password"
                placeholderTextColor = "#fff"
                onChangeText = {(text) => this.setState({password:text})}
                style={{color: '#fff'}}/>
            </Item>


            <Button onPress={() => this.signupHandler()}
                block warning
                style={{
                  marginTop: 20,
                  alignItems: 'center',
                  backgroundColor: '#5E35B1'
                }}
                >
                <Text
                  style={{color: '#fff'}}
                  >Submit</Text>
              </Button>
              <View style={{flex:1, justifyContent:'center', flexDirection:'column'}}>
              <Text style={{fontSize:18, color:'#fff', marginTop:10}}>{this.state.warningMessage}</Text>
              <Text style={{fontSize:13, color:'#fff'}}>{this.state.warning1}</Text>
              <Text style={{fontSize:13, color:'#fff'}}>{this.state.warning2}</Text>
              <Text style={{fontSize:13, color:'#fff'}}>{this.state.warning3}</Text>
              </View>
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
  signup: (user) => dispatch(signup(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);
