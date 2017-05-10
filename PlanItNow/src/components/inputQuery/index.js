import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import { Icon, Container, Col, Grid, Picker } from 'native-base';
const Item = Picker.Item;

class inputQuery extends Component {
  constructor(props){
    super(props)
    this.state = {
            selectedItem: undefined,
            selected1: 'key1',
            results: {
                items: []
            }
        }
  }
  onValueChange (value: string) {
        this.setState({
            selected1 : value
        });
    }

  render() {
    return(
      <Container style={{flex:1, backgroundColor:'#FFF59D'}}>
        <View style={{flex:1, justifyContent:'center', flexDirection:'row'}}>
          
          <View style={{width: 200}}>
          <Picker
              supportedOrientations={['portrait']}
              mode="dropdown"
              selectedValue={this.state.selected1}
              onValueChange={this.onValueChange.bind(this)}>
              <Item label="Semarang" value="key0" />
              <Item label="Yogyakarta" value="key1" />
              <Item label="Bali" value="key2" />
         </Picker>
         </View>

        </View>
      </Container>
    )
  }
}

export default inputQuery
