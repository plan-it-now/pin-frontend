import React from 'react';

import { View, Image, ScrollView, StyleSheet, Modal, TouchableHighlight, Dimensions, Alert, StatusBar} from 'react-native';
import { Container, Icon, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Button, Content, Header, Title, Footer, FooterTab } from 'native-base';

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

  componentDidMount() {
    Alert.alert(
      'Instructions',
      '\n              Swipe Left to Discard\n\n              Swipe Right to Decide\n',
      [
        {text: 'OK, GOT IT.', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
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
      <View style={{marginTop:0}}>
        <Button
          block
          style={{backgroundColor:"#5E35B1", marginTop:10, borderTopLeftRadius:10, borderTopRightRadius:10}}>
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
  };

  setIsSwipingBack = (isSwipingBack, cb) => {
      this.setState(
        {
          isSwipingBack: isSwipingBack,
          cardIndex: this.state.cardIndex-1
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

  handleMap(){
      console.log('map:',this.state.cardIndex);
      this.setState({mapData: this.state.cards[this.state.cardIndex],
                    modalVisible: true})
    }

  render () {
    return (
      <Container>
        <View style={{paddingTop:20, paddingBottom:10, backgroundColor:'#B39DDB', zIndex:2}}>
          <StepIndicator
             customStyles={customStyles}
             currentPosition={this.state.currentPosition}
             labels={labels}
          />
        </View>

        <Content>
          <View style={styles.container}>
              <Swiper
              ref={swiper => {
                this.swiper = swiper;
              }}
              childrenOnTop={true}
              backgroundColor = '#B39DDB'
              onSwiped={(cardIndex) => {
                this.setState({cardIndex: this.state.cardIndex+1})
                console.log(cardIndex)
              }}
                cards={this.state.cards}
                verticalSwipe={false}
                onSwipedLeft={(cardIndex) => this.swipeLeft(cardIndex)}
                onSwipedRight={(cardIndex) => this.swipeRight(cardIndex)}
                cardIndex={this.state.cardIndex}
                renderCard={this.renderCard}
                onSwipedAll={() => this.displayAlert()}
              >

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

                <Button style={{backgroundColor:'#5E35B1'}} block onPress={()=> {this.setModalVisible(false, null)}}>
                    <Text>Close</Text>
                </Button>
              </Modal>
          </View>
        </Content>

        <Footer>
            <FooterTab style={{backgroundColor:'#5E35B1'}}>
              { this.state.swipe.length !== 0 ?
                <Button
                  onPress={this.swipeBack}
                  vertical>
                    <Icon name="md-undo" />
                    <Text>Undo</Text>
                </Button>
                :
                <Button
                  vertical>
                    <Icon name="md-undo" />
                    <Text>Undo</Text>
                </Button>

              }
                <Button
                  onPress={()=>this.handleMap()}
                  active vertical>
                    <Icon name="md-pin" />
                    <Text>Show Location</Text>
                </Button>
                <Button
                 onPress={()=>this.handleSubmitPlaces()}
                 vertical>
                    <Icon name="md-send" />
                    <Text>Proceed</Text>
                </Button>
            </FooterTab>
        </Footer>
      </Container>

    )
  }
}

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B39DDB',
    height: deviceHeight* 0.847,
    paddingTop:0,
    marginTop:-50
  },
  card: {
    marginTop:0,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    alignItems: 'center',
    backgroundColor: 'white',
    height: deviceHeight * 0.61
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
    height: deviceHeight * 0.885,
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
