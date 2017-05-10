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
