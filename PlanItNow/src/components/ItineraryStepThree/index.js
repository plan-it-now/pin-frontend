import React from 'react';
import {
  View,
  Text
} from 'react-native'

import {
  Container,
  Content,
  Item,
  Input,
  Icon,
  H3
} from 'native-base'

class ItineraryStepThree extends React.Component {
  constructor(props) {
    super(props)

  }

  render () {
    return (
      <Container style={{ backgroundColor: '#B39DDB' }}>
        <Content
          padder>

          <View style={{
              backgroundColor: '#EDE7F6',
              borderColor: '#000',
              padding: 10}}>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 10,
                marginBottom: 10,
              }}>
              <View style={{ width: 130 }}>
                <Item rounded>
                  <Input
                    style={{
                       borderColor: '#000', borderWidth: 1, borderRadius: 50
                    }}
                  />
                </Item>
              </View>

              <View
                style={{ width: 300, paddingLeft: 15 }}
              >
                <Text style={{
                  color: '#000',
                  fontSize: 18
                }}>Candi Borobudur</Text>
              </View>

            </View>

            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 10,
                marginBottom: 10
              }}>

              <View style={{ width: 130 }}>
                <Item rounded>
                  <Input
                    style={{
                       borderColor: '#000',
                       borderWidth: 1,
                       borderRadius: 50
                    }}
                  />
                </Item>
              </View>

              <View
                style={{ width: 300, paddingLeft: 15 }}
              >
                <Text style={{
                  color: '#000',
                  fontSize: 18
                }}>Candi Borobudur</Text>
              </View>

            </View>

            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 10,
                marginBottom: 10
              }}>

              <View style={{ width: 130 }}>
                <Item rounded red>
                  <Input style={{ borderColor: '#000', borderWidth: 1, borderRadius: 50 }}/>
                </Item>
              </View>

              <View
                style={{ width: 300, paddingLeft: 15 }}
              >
                <Text style={{
                  color: '#000',
                  fontSize: 18
                }}>Candi Borobudur</Text>
              </View>

            </View>
          </View>

        </Content>
      </Container>
    )

  }

}

export default ItineraryStepThree;
