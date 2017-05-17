import React from 'react';
import { View, Text } from 'react-native';

class Tags extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { itinerary } = this.props;
    const unique = [...new Set(itinerary.places.map(x => x.place.tag))]
    console.log(unique);
    return (
      <View>
        <Text>Tags: { unique.join(', ')}</Text>
      </View>
    )
  }
}

export default Tags
