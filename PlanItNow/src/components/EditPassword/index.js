import React from 'react';

import {
  View,
  Text,
  TextInput,
  Button
} from 'react-native';

import {
  Item,
  Icon,
  Input,
  Content,
  Form,
  Container
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
          backgroundColor: '#EDE7F6',
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

        <Text
          style={styles.fontText}
          onPress={() => {}}
        >Cancel</Text>
        <Text style={styles.fontText}>Password</Text>
          <Text style={styles.fontText}>Done</Text>
        </View>
        <Container style={{

          }}>
          <Content>
            <Item style={{
                paddingLeft: 20,
                paddingRight: 20,
                backgroundColor: '#fff',
                marginTop: 20,
                marginBottom: 20
              }}>
                <Icon name='lock' style={{fontSize: 20, color: '#ccc'}} />
              <Input
                placeholder="New Password"
                style={{ backgroundColor: '#fff'}}/>
            </Item>
            <Item style={{
                paddingLeft: 20,
                paddingRight: 20,
                backgroundColor: '#fff',
              }}>
              <Icon name='lock' style={{fontSize: 20, color: '#ccc'}} />
            <Input placeholder="New Password Again" />
            </Item>
            <Item style={{
                paddingLeft: 20,
                paddingRight: 20,
                backgroundColor: '#fff',
              }}>
            </Item>
        </Content>
        </Container>
      </View>
    )

  }
}

export default EditPassword;
