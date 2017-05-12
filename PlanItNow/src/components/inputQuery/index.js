import React, { Component } from 'react';
import {
  Text,
  View,
  BackHandler
} from 'react-native';

import { Container, Picker, Button, Form, Item as Stay, Input, Label } from 'native-base';
const Item = Picker.Item;

class inputQuery extends Component {
  constructor(props){
    super(props)
    this.state = {
      selected1: 'key0',
      day1:'',
      warning: ''
    }
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton)
  }

  handleBackButton() {
    return true
  }

  static navigationOptions = {
    headerTitle: "Inquiry"
  }

  onValueChange (value: string) {
    this.setState({
        selected1: value,

    });
  }

  testing() {
    this.setState({warning:''})
    console.log(this.state.selected1)
    console.log(this.state.day1)
  }


  render() {
    return(
      <Container style={{flex:1, backgroundColor:'#FFF59D'}}>
        <View style={{flex:1, justifyContent:'center', flexDirection:'row', marginTop:50}}>
          <View style={{width: 300, flexDirection:'column'}}>
            <Picker
              style={{marginBottom: 50}}
                supportedOrientations={['portrait']}
                mode="dropdown"
                selectedValue={this.state.selected1}
                onValueChange={this.onValueChange.bind(this)}>
                <Item label="Location" value="key0" />
                <Item label="Semarang" value="Semarang" />
                <Item label="Yogyakarta" value="Yogyakarta" />
                <Item label="Bali" value="Bali" />
            </Picker>
            <Form>
              <Stay floatingLabel>
                <Label>Length of Stay</Label>
                <Input onChangeText={(day1) => this.setState({day1})}/>
              </Stay>
            </Form>
            <View style={{flex:1,justifyContent:'center', marginTop:50, flexDirection:'row'}}>
              <Button rounded warning onPress={() => {(this.state.day1 !== '' && this.state.selected1 !== 'key0') ? this.testing() : this.setState({warning:'Please input all fields'})}}>
                 <Text>Lets Go!</Text>
             </Button>
             <Text>{this.state.warning}</Text>
           </View>
          </View>
        </View>

      </Container>
    )
  }
}

export default inputQuery
