/* eslint no-console: 0 */
import React from 'react';
import getDirections from 'react-native-google-maps-directions';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {
  Icon
} from 'native-base';


class GeoDirection extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      // initialPosition: 'unknown',
      lastPosition: {
        latitude: 0,
        longitude: 0
      }
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
      // let test = JSON.stringify(position);
      // console.log('asd',position);
      this.setState({lastPosition: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            },
          });
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  handleGetDirections = () => {
    const { myDestination } = this.props;
    const data = {
       source: {
        latitude: this.state.lastPosition.latitude,
        longitude: this.state.lastPosition.longitude
      },
      destination: {
        latitude: +(myDestination.latitude),
        longitude: +(myDestination.longitude)
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
          <TouchableOpacity onPress={() => this.handleGetDirections()}>
            <Icon name="md-pin" size={22} style={{color: '#5E35B1'}}/>
          </TouchableOpacity>
        </View>
    );
  }
}


export default GeoDirection;
