import React from 'react';

import {
  View,
  Image,
  ScrollView
} from 'react-native';

import {
  Container,
  Icon,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Content } from 'native-base';

import MapView from 'react-native-maps';

exports.framework = 'React';
exports.title = 'Geolocation';
exports.description = 'Examples of using the Geolocation API.';

exports.examples = [
  {
    title: 'navigator.geolocation',
    render: function(): React.Element<any> {
      return <GeolocationExample />;
    },
  }
];

const cards = [
    {
        text: 'Card One',
        name: 'Salad Healthy',
        image: 'https://media.istockphoto.com/photos/pumpkin-salad-picture-id635912088',
    },
    {
        text: 'Card Two',
        name: 'Mayonais',
        image: 'https://media.istockphoto.com/photos/delicious-benedict-eggs-picture-id610847948',
    },
    {
        text: 'Card Three',
        name: 'Selai Nanas',
        image: 'https://media.istockphoto.com/photos/egg-benedict-toast-english-breakfast-plate-concept-picture-id483281364',
    },
    {
        text: 'Card Four',
        name: 'Cafe Latte',
        image: 'https://media.istockphoto.com/photos/mushroom-cream-soup-isolated-on-white-picture-id518620350',
    },
    {
        text: 'Card Five',
        name: 'Sledri',
        image: 'https://media.istockphoto.com/photos/pumpkin-salad-picture-id635912088',
    },

  ];

class Recomedation extends React.Component {
  constructor(props) {
    super(props)
  }

  static navigationOptions = {
    headerTitle: 'Recommendation',
    headerTintColor: '#000',
    headerStyle: {
      backgroundColor: '#FFF59D'
    }

  };

  render () {
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
        <Container>
          <View>
            <View>
              <DeckSwiper
                dataSource={cards}
                renderItem={(item) =>
                  <Card style={{ elevation: 4, marginBottom: 10 }}>
                    <CardItem>
                      <Text>Title</Text>
                    </CardItem>
                      <Image source={{ uri: item.image }} style={{ height: 220, width: '100%', borderColor: 'white',
                        borderWidth: 5, }} />

                  </Card>
                  }
                />
            </View>
          </View>
        </Container>
        <Container style={{  backgroundColor: '#ccc', marginTop: 45}}>
          <ScrollView>
            <CardItem>
                <Text>Used to determine how should elements be distributed inside container along the secondary axis (opposite of flexDirection)</Text>
            </CardItem>
            <View style={{
                height: 300,
                flex: 1,
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',

              }}>
              <MapView
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0
                }}
                initialRegion={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
                showUserLocation={true}
              />
            </View>
            <Text>Test...</Text>
            <Text>Test...</Text>
            <Text>Test...</Text>
            <Text>Test...</Text>
            <Text>Test...</Text>
            <Text>Test...</Text>
            <Text>Test...</Text>
            <Text>Test...</Text>
            <Text>Test...</Text>
            <Text>Test...</Text>
            <Text>Test...</Text>
            <Text>Test...</Text>
          </ScrollView>
        </Container>
      </View>

    )
  }
}

export default Recomedation;
