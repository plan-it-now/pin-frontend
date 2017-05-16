import React from 'react';
import { View, Text, ScrollView, StatusBar, Alert } from 'react-native'

import { Container, Header, Body, Title, Content, Item, Input, Fab, Button, Footer, FooterTab } from 'native-base'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

import ScheduleDetail from './scheduleDetail';
import { updateUser,postItinerary } from '../../actions';

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

class ItineraryStepThree extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        active: true,
        structuredPlaces: [],
        time: [],
        currentPosition: 4
      }
      this.setTimeSchedule = this.setTimeSchedule.bind(this);
  }

  setTimeSchedule(timeChild,idx) {
    let tmp = this.state.structuredPlaces;
    tmp[idx] = timeChild;
    this.setState({
      structuringPlaces: tmp
    }, () => {
      console.log(this.state.structuredPlaces);
    })
  }

  structuringPlaces() {
    const { approvedPlaces,days } = this.props.places
    const orderedPlaces = [];
    for (let i = 1; i <= days; i++) {
      orderedPlaces.push(approvedPlaces.filter(place => place.day == i))
    }

    this.setState({
      structuredPlaces: orderedPlaces
    }, () => {
      console.log('ini structured places',this.state.structuredPlaces);
    })
  }

  componentDidMount() {
    this.structuringPlaces();
  }

  finalConfirm() {
    const { updateUser,user, places, postItinerary, navigation } = this.props
    const { structuredPlaces } = this.state
    let newArrOfPlaces = {
      days: places.days,
      places: []
    }
    for (let i = 0 ; i < structuredPlaces.length; i++) {
      for (let j = 0; j < structuredPlaces[i].length; j++) {
        let newObjPlace = {
          place: structuredPlaces[i][j].place._id,
          day: structuredPlaces[i][j].day,
          orderIndex: structuredPlaces[i][j].orderIndex,
          schedule: structuredPlaces[i][j].schedule
        }
        newArrOfPlaces.places.push(newObjPlace);
      }
    }

    updateUser(user,places);
    postItinerary(user.userdata,newArrOfPlaces);

    navigation.navigate('Profile');
  }

  render () {

    return (
      <Container style={{ backgroundColor: '#B39DDB' }}>
        <View style={{marginTop:20, marginBottom:20}}>
          <StepIndicator
             customStyles={customStyles}
             currentPosition={this.state.currentPosition}
             labels={labels}
          />
        </View>

        <Content
          padder>

          <ScrollView>
            {
              this.state.structuredPlaces.map((places,idx) => (
                <View key={idx}>
                  <View style={{paddingLeft:10}}>
                    <Text style={{fontSize:20, fontWeight:'bold'}}>Day - {idx+1} </Text>
                  </View>
                  <ScheduleDetail places={places} bossIdx={idx} setTimeSchedule={this.setTimeSchedule}/>
                </View>
              ))
            }
          </ScrollView>
        </Content>

        <View style={{alignSelf:'center', marginBottom:10}}>
            <Button
              style={{ backgroundColor: '#5E35B1'}}
              rounded
              onPress={()=>this.finalConfirm()}>
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>Generate Itinerary</Text>
            </Button>
        </View>
      </Container>
    )
  }

}

const mapStateToProps = state => ({
  places: state.places,
  user: state.logindata
})

const mapDispatchToProps = dispatch => ({
  updateUser: (user,places) => dispatch(updateUser(user,places)),
  postItinerary: (userid,arrayPlaces) => dispatch(postItinerary(userid,arrayPlaces))
})

export default connect(mapStateToProps,mapDispatchToProps)(ItineraryStepThree);
