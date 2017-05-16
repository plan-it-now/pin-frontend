/* eslint no-console: 0 */
import React from 'react';
import getDirections from 'react-native-google-maps-directions';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';



class GeoDirection extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      // initialPosition: 'unknown',
      lastPosition: 'unknown',
    };
  }


  watchID: ?number = null;

  componentDidMount() {
    // navigator.geolocation.getCurrentPosition(
    //   (position) => {
    //     var initialPosition = JSON.stringify(position);
    //     this.setState({initialPosition});
    //   },
    //   (error) => alert(JSON.stringify(error)),
    //   {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    // );
    this.watchID = navigator.geolocation.watchPosition((position) => {
      let lastPosition = JSON.stringify(position);
      this.setState({lastPosition});
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  handleGetDirections = () => {
    const { myDestination } = this.props;
    const data = {
       source: {
        latitude: myLocation.latitude,
        longitude: myLocation.longitude
      },
      destination: {
        latitude: myDestination.latitude,
        longitude: myDestination.longitude
      },
      params: [
        {
          key: "dirflg",
          value: "w"
        }
      ]
    }

    getDirections(data)
  }

  render() {
    return (
        <View>
          <Button onPress={() => this.handleGetDirections()} title="Get Directions" />
        </View>
    );
  }
}


export default GeoDirection;
