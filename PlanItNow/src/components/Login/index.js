import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Image, AsyncStorage, StatusBar } from 'react-native';

import { Container, Content, Footer, FooterTab, Form, Item, Input, Label, Button, Icon } from 'native-base';
import { login, loginfb, decodeUser } from '../../actions'

const FBSDK = require('react-native-fbsdk');

const {
  LoginButton,
  AccessToken,
  LoginManager
} = FBSDK;

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      warning: '',
      name: '',
      shouldRedirect: false,
    }
  }

  static navigationOptions = {
    headerTitle: 'Sign In',
    headerTintColor: '#000',
    headerStyle: {
      backgroundColor: '#FFF59D'
    }
  }

  componentWillMount(){
    AsyncStorage.getItem('token', (err,_token) => {
      if(err) {
        console.log(err);
      } else if(_token !== null) {
        this.setState({
          shouldRedirect: true
        }, () => {
          this.props.decodeUser(_token);
        })
      }
    });
    // for development purpose only
    // this.props.login({
    //   email: 'a',
    //   password: 'a'
    // })
  }

  loginSuccess() {
    const { navigate } = this.props.navigation;
    navigate('Profile', {willFetch: true});
    // this.props.updateRedirectFalse();
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.logindata.shouldRedirectSignIn && this.state.shouldRedirect){
      this.setState({shouldRedirect: false}, ()=> {
        this.loginSuccess()
      })
    }
  }

  loginHandler() {
    if(this.state.email === '' || this.state.password === ''){
      this.setState({warning: 'Please input all fields'})
    } else {
      this.setState({warning: '',
                    shouldRedirect: true})
      this.props.login({email:this.state.email, password:this.state.password})
    }
  }

  navigateToRegister() {
    const { navigate } = this.props.navigation
    navigate('Register')
  }

  authfacebooksdk() {
    var self = this
    LoginManager.logInWithReadPermissions(['public_profile','email']).then(
      function(result) {
        if (result.isCancelled) {
          alert('Login cancelled');
        } else {
          // console.log('masuk sini',result.accessToken);
          // var app = self
          AccessToken.getCurrentAccessToken()
                     .then((accessTokenData) => {
                       console.log('accessTokenData --------', accessTokenData.accessToken);
                       fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' + accessTokenData.accessToken)
                         .then((response) => response.json())
                         .then((json) => {
                           console.log('response json ------',json.name);
                           self.setState({name: json.name})
                           self.setState({email: json.email})
                           self.props.loginfb({ email: self.state.email, name: self.state.name })
                           var user = {}
                           // Some user object has been set up somewhere, build that user here
                           user.name = json.name
                           user.id = json.id
                           user.user_friends = json.friends
                           user.email = json.email
                           user.username = json.name
                           user.loading = false
                           user.loggedIn = true
                          //  self._requestLoginFacebook(user)
                         })
                         .catch((error) => {
                           console.log(error);
                         })
                     }, (error => {
                       console.log('Error nih' + error);
                     }))
                  }
      },
        function(error) {
          alert('Login fail with error: ' + error);
        }
        )
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
            <Button onPress={() => this.loginHandler()}
                block
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

            <Button onPress={() => this.authfacebooksdk()}
              block
              style={{
                marginTop: 20,
                alignItems: 'center',
                backgroundColor: '#3B5998'
              }}
            >
              <Icon name='logo-facebook' />
              <Text style={{color:'#fff'}}> Sign In with Facebook</Text>
            </Button>
          </View>

          {
            (this.state.warning == '' && this.props.logindata.warning !== '') ?
              <View style={{flex:1, justifyContent:'center'}}>
                <Text style={{ marginTop:10, color:'red', fontSize:18 }}>{this.props.logindata.warning}</Text>
              </View>
              :
              <View style={{flex:1, justifyContent:'center'}}>
                <Text style={{ marginTop:10, color:'red', fontSize:18 }}>{this.state.warning}</Text>
              </View>
           }
        </Image>
    </View>

    <Footer>
      <FooterTab>
        <Button
          style={{ backgroundColor: '#000'}}
          full
          onPress={()=>this.navigateToRegister()}>
          <View style={{flexDirection:'row'}}>
          <Text style={{ color: '#fff'}}>"Don't have account?" </Text>
          <Text style={{ color: '#fff', fontWeight:'bold'}}> Sign Up. </Text>
          </View>
        </Button>
      </FooterTab>
    </Footer>
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
  login: (user) => dispatch(login(user)),
  loginfb: (user) => dispatch(loginfb(user)),
  // updateRedirectFalse: () => dispatch(updateRedirectFalse()),
  decodeUser: (_token) => dispatch(decodeUser(_token))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
