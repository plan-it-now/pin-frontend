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
      isRedirect: false
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
    if(this.props.logindata.shouldRedirect && !this.state.isRedirect){
      this.setState({isRedirect: true})
      this.loginSuccess()
    }
  }

  signupHandler() {
    this.props.signup(this.state)
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
              <Icon name='person' style={{fontSize: 20, color: 'white'}} />
              <Label
                style={{color: '#fff'}}
              >Name</Label>
              <Input
               onChangeText = {(text) => this.setState({name:text})}/>
            </Item>

            <Item floatingLabel>
              <Icon name='mail' style={{fontSize: 20, color: 'white'}} />
              <Label
                style={{color: '#fff'}}
              >Email</Label>
              <Input
               onChangeText = {(text) => this.setState({email:text})}/>/>
            </Item>

            <Item floatingLabel>
              <Icon name='lock' style={{fontSize: 20, color: 'white'}} />
              <Label
                style={{color: '#fff'}}
              >Password</Label>
              <Input
               onChangeText = {(text) => this.setState({password:text})}/>/>
            </Item>


            <Button onPress={() => this.signupHandler()}
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

const mapStateToProps = (state) => ({
  logindata: state.logindata
})

const mapDispatchToProps = dispatch => ({
  signup: (user) => dispatch(signup(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);
