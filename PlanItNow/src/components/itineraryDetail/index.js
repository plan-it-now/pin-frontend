import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import {
  Container,
  Content,
  Item,
  Input,
  Fab,
  Button
} from 'native-base'



class ItineraryDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      structuredPlaces: [],
    }
  }

  componentDidMount() {
    this.structuringPlaces();
  }
  
  structuringPlaces() {
    const { places } = this.props.navigation.state.params._itinerary
    const orderedPlaces = [];
    for (let i = 1; i <= days; i++) {
      orderedPlaces.push(places.filter(place => place.day == i))
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
        <Text>ini Details Brotha!</Text>
      </View>
    )
  }
}

export default ItineraryDetail;
