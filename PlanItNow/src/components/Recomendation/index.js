import React from 'react';

import { View, Image, ScrollView, StyleSheet, Modal, TouchableHighlight, Dimensions, Alert, StatusBar} from 'react-native';
import { Container, Icon, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Button, Content, Header, Title, Toast } from 'native-base';

import { connect } from 'react-redux';

import Swiper from "react-native-deck-swiper";

import MapDetail from '../MapDetail';

import { processPlaces } from '../../actions';

import StepIndicator from 'react-native-step-indicator';

const labels = ["Inquiry","Choose","Assign","Ordering","Schedule"];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#5E35B1',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#5E35B1',
  stepStrokeUnFinishedColor: '#757575',
  separatorFinishedColor: '#5E35B1',
  separatorUnFinishedColor: '#757575',
  stepIndicatorFinishedColor: '#5E35B1',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#FF7043',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#5E35B1',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#757575',
  labelColor: '#000',
  labelSize: 13,
  currentStepLabelColor: '#5E35B1'
}

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
      <View style={{marginTop:10}}>
        <Button
          block
          style={{backgroundColor:"#5E35B1", marginTop:0, borderTopLeftRadius:10, borderTopRightRadius:10}} onPress={()=> {this.setModalVisible(true, card)}}>
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
      <View>
        <View style={{paddingTop:20, paddingBottom:10, backgroundColor:'#B39DDB'}}>
          <StepIndicator
             customStyles={customStyles}
             currentPosition={this.state.currentPosition}
             labels={labels}
          />
        </View>
        
        <View style={styles.container}>
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
              }}
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
      </View>

    )
  }
}

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B39DDB',
    height: deviceHeight,
    paddingTop:0
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
