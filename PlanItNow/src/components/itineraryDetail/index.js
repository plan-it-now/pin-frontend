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
  Icon
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
      <View>
        <ScrollView>
        {
          this.state.structuredPlaces.map((places,idx) => (
            <View key={idx}>
              <View style={{paddingLeft:10}}>
                <Text style={{fontSize:20}}>Day - {idx+1} </Text>
              </View>
              <View style={{
                  backgroundColor: '#EDE7F6',
                  borderColor: '#000',
                  padding: 10,
                  margin: 10,
                  borderRadius: 10,
                  marginBottom: 25 }}>
                  {
                    places.map((x,i) => (
                      <View key={i}
                        style={{
                          flex: 1,
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginTop: 10,
                          marginBottom: 10,

                        }}>
                        <View>
                          <Text>{x.schedule}</Text>
                        </View>

                        <View
                          style={{ width: 300, paddingLeft: 15 }}
                        >
                          <Text style={{
                            color: '#000',
                            fontSize: 18
                          }}>{x.place.name}</Text>

                        </View>
                        <View>
                           <Icon name="md-trending-up" style={{color: '#5E35B1', fontSize:35}}/>
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
