import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';

import {
  Container,
  Footer,
  FooterTab,
  Button,
  Content,
  Picker,
} from 'native-base';

import { connect } from 'react-redux';

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
    const { places } = this.props
    const arrPlaces = new Array(places.days);
    for (let i = 1; i <= arr.length; i++) {
      arr[i] = i;
    }
    return (
      <Container
        style={{ backgroundColor: '#B39DDB' }}
      >
        <ScrollView>
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
                height: 80,
                marginBottom: 10,
                marginTop: 10
              }}
            >
              <View
                style={{
                  width: 200,
                  paddingLeft: 10
                }}
              >
                <Text
                  style={{
                    color: '#000',
                    fontSize: 18
                  }}
                >Pulau Dewata </Text>
              </View>
              <View style={{
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
                    {
                      arrPlaces.map(x => )
                    }
                </Picker>
              </View>
            </View>

          </Content>
        </ScrollView>


        <Footer>
          <FooterTab>
            <Button
              style={{ backgroundColor: '#5E35B1'}}
              block>
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>Save</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  places: state.places,
})
export default connect(mapStateToProps,null)(ItineraryStepOne);
