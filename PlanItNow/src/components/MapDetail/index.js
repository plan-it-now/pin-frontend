import React from 'react';

import {
  View,
  Dimensions
} from 'react-native';

import MapView from 'react-native-maps';

const MapDetail = (props) => (
  <View style={styles.mapcontainer}>
    <MapView
        style={styles.map}
        region={{
          latitude: +(card.latitude),
          longitude: +(card.longitude),
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showUserLocation={true}
    >
      <MapView.Marker.Animated coordinate={new MapView.AnimatedRegion({
        latitude: +(card.latitude),
        longitude: +(card.longitude),
        })}
      />
    </MapView>
  </View>
)

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = {
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  mapcontainer: {
    width: deviceWidth,
    height: deviceHeight * 0.89,
    alignItems: 'center',
  }
};

export default MapDetail;