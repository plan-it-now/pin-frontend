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
  Content,
  Header,
  Title
 } from 'native-base';

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
      modalVisible: false,
      rejected:[],
      approved:[],
      swipe:[]
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
    return (
      <View>
        <View style={styles.card}>
          <Text style={{ marginTop: 20 }}>{card.name}</Text>
          <Image
           style = {{ height: '50%', width: '90%'}}
           source = {{ uri : card.photos}}
          />
          <Text style={{ fontSize: 12, padding: 20, textAlign: 'justify' }} >{card.description}</Text>
          <Modal
           animationType={"slide"}
           transparent={true}
           visible={this.state.modalVisible}
           onRequestClose={() => {console.log('modal closed');}}
          >
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

            <Button style={{backgroundColor:"#5E35B1"}} block onPress={()=> {this.setModalVisible(false)}}>
                <Text>back!</Text>
            </Button>
          </Modal>
        </View>

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
      if(this.state.swipe[this.state.swipe.length - 1] === 'left') {
        console.log('before => ' , this.state.rejected);
        this.state.rejected.pop();
        this.state.swipe.pop();
        this.forceUpdate();
        console.log('after => ' , this.state.rejected);
      } else if (this.state.swipe[this.state.swipe.length - 1] === 'right') {
        console.log('before approved => ' , this.state.approved);
        this.state.approved.pop();
        this.state.swipe.pop();
        this.forceUpdate();
        console.log('after approved => ' , this.state.approved);
      }


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

  swipeLeft(cardIndex) {
    this.setState({
      rejected: [...this.state.rejected, this.props.places[cardIndex]],
      swipe: [...this.state.swipe, 'left']
    })
  }

  swipeRight(cardIndex) {
    this.setState({
      approved: [...this.state.approved, this.props.places[cardIndex]],
      swipe: [...this.state.swipe, 'right']
    })
  }

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
          verticalSwipe={false}
          onSwipedLeft={(cardIndex) => this.swipeLeft(cardIndex)}
          onSwipedRight={(cardIndex) => this.swipeRight(cardIndex)}
          cardIndex={this.state.cardIndex}
          renderCard={this.renderCard}
          onSwipedAll={() => console.log(this.state.approved)}

        >
          <View style={{
            width:deviceWidth,
            flexDirection:'row',
            justifyContent:'space-between'}}
          >
            {
              this.state.swipe.length !== 0 ?
              <Button style={{backgroundColor:"#5E35B1",margin: 10, alignSelf: 'flex-end'}} rounded onPress={this.swipeBack}>
                  <Icon name="md-sync" color="white" size={22}/>
              </Button>
              :
              <View />
            }
            <Button
                rounded
                style={{
                  backgroundColor: '#5E35B1',
                  margin: 10,
                  alignSelf: 'flex-end'
                }}>
                <Icon name="md-send" color="white"/>
            </Button>
          </View>
          <Button style={{backgroundColor:"#5E35B1", marginTop: deviceHeight*0.81}} block onPress={()=> {this.setModalVisible(true)}}>
              <Text>Location</Text>
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
    backgroundColor: '#B39DDB',
  },
  card: {
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    height: deviceHeight*0.75,
    marginTop:10,
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
    height: deviceHeight * 0.89,
    alignItems: 'center',
  }
})

const mapStateToProps = state => ({
  places: state.places,
})

export default connect(mapStateToProps,null)(Recomedation);
