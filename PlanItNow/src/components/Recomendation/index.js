import React from 'react';

import { View, Image, ScrollView, StyleSheet, Modal, TouchableHighlight, Dimensions, Alert, StatusBar} from 'react-native';
import { Container, Icon, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Button, Content, Header, Title, Toast } from 'native-base';

import { connect } from 'react-redux';

import Swiper from "react-native-deck-swiper";

import MapDetail from '../MapDetail';

import { processPlaces } from '../../actions';

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
      mapData: {},
      rejected:[],
      approved:[],
      swipe:[],
      cards: [{
        name:'',
        description:'',
        photo:'a',
      }],
      currentPosition: 1
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.places.recomendationPlaces !== this.props.places.recomendationPlaces) {
      this.setState({
        cards: this.props.places.recomendationPlaces
      })
    }
  }

  static navigationOptions = {
    headerTitle: 'Recommendation',
    headerTintColor: '#000',
    headerStyle: {
      backgroundColor: '#FFF59D'
    }
  };

  setModalVisible(visible, card) {
    this.setState({mapData: card, modalVisible: visible})
  }

  renderCard = card => {
    return (
      <View>
        <Button
          block
          style={{backgroundColor:"#5E35B1", marginTop:70, borderTopLeftRadius:10, borderTopRightRadius:10}} onPress={()=> {this.setModalVisible(true, card)}}>
          <Icon name='md-pin' />
            <Text> {card.name}</Text>
        </Button>
          <View style={styles.card}>
            <Text style={{ marginTop: 8, marginBottom: 8, fontStyle:'italic', fontSize:13, color: '#5E35B1', alignSelf:'flex-end', paddingRight:17 }}>{card.tag}</Text>
            <Image
             style = {{ height: 200, width: '90%'}}
             source = {{ uri : card.photo}}
            />
            <Text
              style={{
                fontSize: 12, paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom:20, textAlign: 'justify' }}>{card.description}</Text>
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
    Toast.show({
              type: 'warning',
              duration: 1500,
              text: 'Succesfully Undo last decision!',
              position: 'bottom'
            })
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
      rejected: [...this.state.rejected, this.props.places.recomendationPlaces[cardIndex]],
      swipe: [...this.state.swipe, 'left']
    })
  }

  swipeRight(cardIndex) {
    this.setState({
      approved: [...this.state.approved, this.props.places.recomendationPlaces[cardIndex]],
      swipe: [...this.state.swipe, 'right']
    })
    Toast.show({
              type: 'success',
              duration: 1500,
              text: 'Decision made!',
              position: 'bottom'
            })
  }

  handleSubmitPlaces() {
  console.log('lalalala',this.state.rejected);
    this.props.submitPlaces(this.state.rejected,this.state.approved);
    const { navigate } = this.props.navigation;
    navigate('Step1');
  }


  displayAlert() {
    Alert.alert(
      'You have seen all places in '+this.props.places.recomendationPlaces[0].city,
      '',
      [
        {text:'Okay', onPress: () => this.handleSubmitPlaces()}
      ]
    )
  }


  render () {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <Header style={{backgroundColor:'#311B92'}}>
          <Body>
            <Title>Step 1 of 4 - Place Selection</Title>
          </Body>
        </Header>
          <Swiper
            ref={swiper => {
              this.swiper = swiper;
            }}
            childrenOnTop={true}
            backgroundColor = '#B39DDB'
            onSwiped={(cardIndex) => {console.log(cardIndex)}}
            cards={this.state.cards}
            verticalSwipe={false}
            onSwipedLeft={(cardIndex) => this.swipeLeft(cardIndex)}
            onSwipedRight={(cardIndex) => this.swipeRight(cardIndex)}
            cardIndex={this.state.cardIndex}
            renderCard={this.renderCard}
            onSwipedAll={() => this.displayAlert()}
          >
            <View style={{
              width:deviceWidth,
              flexDirection:'row',
              justifyContent:'space-between',
              marginTop: 60}}
            >
              {
                this.state.swipe.length !== 0 ?
                <Button style={{backgroundColor:"#5E35B1",margin: 10, alignSelf: 'flex-end'}} rounded onPress={this.swipeBack}>
                    <Icon name="md-sync" color="white"/>
                </Button>
                :
                <View />
              }
              <Button
                  rounded
                  onPress={()=>this.handleSubmitPlaces()}
                  style={{
                    backgroundColor: '#5E35B1',
                    margin: 10,
                    alignSelf: 'flex-end'
                  }}>
                  <Icon name="md-send" color="white"/>
              </Button>
            </View>
          </Swiper>

          <Modal
           animationType={"slide"}
           transparent={true}
           visible={this.state.modalVisible}
           onRequestClose={() => {console.log('modal closed');}}
          >
            <View style={styles.mapcontainer}>
              <MapDetail card={this.state.mapData} />
            </View>

            <Button style={{backgroundColor:"#5E35B1"}} block onPress={()=> {this.setModalVisible(false, null)}}>
                <Text>back!</Text>
            </Button>
          </Modal>
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
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    alignItems: 'center',
    backgroundColor: 'white',
    height: deviceHeight * 0.59
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

const mapDispatchToProps = dispatch => ({
  submitPlaces: (rejectedList ,approvedList) => dispatch(processPlaces(rejectedList, approvedList))
})

export default connect(mapStateToProps, mapDispatchToProps)(Recomedation);
