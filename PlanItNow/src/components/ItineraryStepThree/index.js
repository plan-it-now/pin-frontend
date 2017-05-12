import React from 'react';
import {
  View,
  Text,
  ScrollView
} from 'react-native'

import {
  Container,
  Content,
  Item,
  Input,
  Fab,
  Button
} from 'native-base'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class ItineraryStepThree extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        active: true
      }
  }

  render () {
    return (
      <Container style={{ backgroundColor: '#B39DDB' }}>
        <Content
          padder>

          <ScrollView>
            <View style={{
                backgroundColor: '#EDE7F6',
                borderColor: '#000',
                padding: 10,
                margin: 10}}>

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
                         borderColor: '#000', borderWidth: 1, borderRadius: 50, paddingLeft: 20
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
                         borderRadius: 50,
                         paddingLeft: 20
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
                    <Input style={{
                        borderColor: '#000',
                        borderWidth: 1,
                        borderRadius: 50,
                        paddingLeft: 20}}/>
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
          </ScrollView>

        </Content>
        <Button
          rounded
          style={{
            backgroundColor: '#5E35B1',
            position: 'absolute',
            bottom: 10,
            left: 10
          }}>
          <Text style={{
              color: '#fff',
              fontWeight: 'bold'
            }}>Submit</Text>
        </Button>
      </Container>
    )

  }

}

export default ItineraryStepThree;
