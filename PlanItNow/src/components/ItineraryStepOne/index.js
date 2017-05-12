import React from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import {
  Container,
  Footer,
  FooterTab,
  Button,
  Content,
  Picker,
} from 'native-base';

let OPTIONS = [
  'Day 1',
  'Day 2',
  'Day 3',
  'Cancel'
]

let CANCEL_INDEX = 3;
const Item = Picker.Item;

class ItineraryStepOne extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedItem: undefined,
      selected1: 'key1',
      results: {
        items: []
      }
    }
  }

  onValueChange ( value: String ) {
    this.setState({
      selected1: value
    })
  }

  render () {
    return (
      <Container>
        <Content
          padder

        >
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'white',
            }}
          >
            <View
              style={{
                width: 200,
                paddingLeft: 10
              }}
            >
              <Text>Pulau Dewata :</Text>
            </View>
            <View
              style={{
                width: 120,
                paddingRight: 10
              }}
            >
              <Picker
                supportedOrientations={['portrait','landscape']}
                iosHeader="Select one"
                mode="dropdown"
                selectedValue={this.state.selected1}
                onValueChange={this.onValueChange.bind(this)}>
                  <Item label="Day 1" value="key0" />
                  <Item label="Day 2" value="key1" />
                  <Item label="Day 3" value="key2" />
                  <Item label="Day 4" value="key3" />
              </Picker>
            </View>
          </View>

        </Content>

        <Footer>
          <FooterTab>
            <Button warning block>
              <Text>Save</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}

export default ItineraryStepOne;
