import React from 'react';

import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  Modal,
  TouchableHighlight,
  Dimensions
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
  Button,
  Content } from 'native-base';

import MapView from 'react-native-maps';
import { connect } from 'react-redux';

import Swiper from "react-native-deck-swiper";
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



class Recomedation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      swipedAllCards: false,
      swipeDirection: "",
      isSwipingBack: false,
      cardIndex: 0,
      modalVisible: false
    };
  }
  componentDidMount() {
    console.log(this.props);
  }

  static navigationOptions = {
    headerTitle: 'Recommendation',
    headerTintColor: '#000',
    headerStyle: {
      backgroundColor: '#FFF59D'
    }
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible})
  }

  renderCard = card => {
    const coordinate = new MapView.AnimatedRegion({
      latitude: +(card.latitude),
      longitude: +(card.longitude),
    });
    return (
      <View style={styles.card}>
        <Text>{card.name}</Text>
        <Image
         style = {{ height: '30%', width: '90%'}}
         source = {{ uri : card.photos}}
        />
        <Text>{card.description}</Text>
        <Modal
         animationType={"slide"}
         transparent={true}
         visible={this.state.modalVisible}
        >
          <View style={styles.mapcontainer}>
            <MapView
                style={styles.map}
                initialRegion={{
                  latitude: +(card.latitude),
                  longitude: +(card.longitude),
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
                showUserLocation={true}
            >
              <MapView.Marker.Animated coordinate={coordinate} />
            </MapView>
          </View>

          <Button style={{backgroundColor:"#5E35B1"}} block onPress={()=> {this.setModalVisible(false)}}>
              <Text>back!</Text>
          </Button>
        </Modal>
        <Button style={{backgroundColor:"#5E35B1"}} block onPress={()=> {this.setModalVisible(true)}}>
            <Text>Info</Text>
        </Button>

      </View>
    );
  };

  onSwipedAllCards = () => {
    this.setState({
      swipedAllCards: true
    });
  };

  swipeBack = () => {
    if (!this.state.isSwipingBack) {
      this.setIsSwipingBack(true, () => {
        this.swiper.swipeBack(() => {
          this.setIsSwipingBack(false);
        });
      });
    }
  };

  setIsSwipingBack = (isSwipingBack, cb) => {
    this.setState(
      {
        isSwipingBack: isSwipingBack
      },
      cb
    );
  };

  jumpTo = () => {
    this.swiper.jumpToCardIndex(2);
  };

  render () {
    return (
      <View style={styles.container}>
        <Swiper
          ref={swiper => {
            this.swiper = swiper;
          }}
          backgroundColor = '#B39DDB'
          onSwiped={(cardIndex) => {console.log(cardIndex)}}
          cards={this.props.places}
          cardIndex={this.state.cardIndex}
          renderCard={this.renderCard}
          onSwipedAll={this.onSwipedAllCards}
        >
          <Button style={{backgroundColor:"#5E35B1"}} rounded onPress={this.swipeBack}>
              <Text>undo</Text>
          </Button>
        </Swiper>
      </View>
    )
  }
}

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B39DDB'
  },
  card: {
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: '100%',
  },
  map: {
     position: 'absolute',
     top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  mapcontainer: {
    width: deviceWidth,
    height: deviceHeight * 0.9,
    alignItems: 'center',
  }
})

const mapStateToProps = state => ({
  places: state.places,
})

export default connect(mapStateToProps,null)(Recomedation);
