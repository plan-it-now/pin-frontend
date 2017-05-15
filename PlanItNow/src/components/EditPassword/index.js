import React from 'react';

import {
  View,
  Text,
  TextInput,
} from 'react-native';

import {
  Item,
  Icon,
  Input
} from 'native-base';

const styles = {
  fontText: {
    fontSize: 18,
    margin: 10,
    color: '#000'

  }
}

class EditPassword extends React.Component {
  constructor(props) {
    super(props)

  }

  render () {
    return (
      <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-start',
          backgroundColor: '#fff',
        }}>
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#fff',
            height: 50,
            borderBottomWidth: 0.5,
            borderBottomColor: '#000'
          }}>
          <Text style={styles.fontText}>Cancel</Text>
        <Text style={styles.fontText}>Password</Text>
          <Text style={styles.fontText}>Done</Text>
        </View>
        <View>
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
            <Input />
          </Item>

        </View>
      </View>
    )

  }
}

export default EditPassword
