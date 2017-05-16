import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import {
  Container,
  Content,
  Item,
  Input,
  Fab,
  Button,
  Icon,
  Header,
  Body,
  Title,
  Left,
  Right
} from 'native-base'



class ItineraryDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      structuredPlaces: [],
    }
  }

  componentWillMount() {
    this.structuringPlaces();
  }

  structuringPlaces() {
    const { _itinerary } = this.props.navigation.state.params;
    const orderedPlaces = [];
    for (let i = 1; i <= _itinerary.days; i++) {
      orderedPlaces.push(_itinerary.places.filter(place => place.day == i))
    }

    this.setState({
      structuredPlaces: orderedPlaces
    }, () => {
      console.log('ini structured places',this.state.structuredPlaces);
    })
  }


  render() {
    const { navigation }  = this.props;
    return (
      <View style={{ backgroundColor: '#B39DDB', width: '100%', height: '100%' }}>
        <Header style={{ backgroundColor: '#5E35B1' }}>
          <View style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginTop: 15 }}>
            <Body>
                <Title>Itinerary Details</Title>
            </Body>
          </View>
        </Header>
        <ScrollView>
        {
          this.state.structuredPlaces.map((places,idx) => (
            <View key={idx}>
              <View style={{paddingLeft: 15, marginTop: 10}}>
                <Text style={{fontSize:20, color: '#212121', fontWeight: 'bold'}}>Day - {idx+1} </Text>
              </View>
              <View style={{
                borderWidth: 3,
                borderColor: '#5E35B1',
                  backgroundColor: '#EDE7F6',
                  margin: 10,
                  borderRadius: 10,
                  marginBottom: 15 }}>
                  {
                    places.map((x,i) => (
                      <View key={i}
                        style={{
                          flex: 1,
                          flexDirection: 'row',
                          justifyContent: 'space-around',
                          alignItems: 'center',
                          marginTop: 10,
                          marginBottom: 10,
                          paddingLeft: 25,
                          paddingRight: 25


                        }}>
                        <View>
                          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#EF6C00' }}>{x.schedule}</Text>
                        </View>

                        <View
                          style={{ width: 300, paddingLeft: 35, flexWrap: 'wrap' }}
                        >
                          <Text style={{
                            color: '#000',
                            fontSize: 15
                          }}>{x.place.name}</Text>

                        </View>
                        <View>
                           <Icon name="md-pin" size={22} style={{color: '#5E35B1'}}/>
                        </View>

                      </View>
                    ))
                  }

              </View>
            </View>
          ))
        }
        </ScrollView>
      </View>
    )
  }
}

export default ItineraryDetail;
