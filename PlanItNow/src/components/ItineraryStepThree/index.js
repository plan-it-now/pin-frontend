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
<<<<<<< HEAD
=======

>>>>>>> cc4cf8de980ac3c87d36d7042ed111bb6cbb144f
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
<<<<<<< HEAD
=======

>>>>>>> cc4cf8de980ac3c87d36d7042ed111bb6cbb144f
        </Content>
        <Button
          rounded
          style={{
            backgroundColor: '#37b578',
            position: 'absolute',
            bottom: 10,
            left: 10
          }}>
          <Icon name="check" color="white" size={22}/>
          <Text style={{
              paddingLeft: 5,
              color: '#fff',
              fontWeight: 'bold'
            }}>Submit</Text>
        </Button>
      </Container>
    )
<<<<<<< HEAD
=======

>>>>>>> cc4cf8de980ac3c87d36d7042ed111bb6cbb144f
  }

}

export default ItineraryStepThree;
