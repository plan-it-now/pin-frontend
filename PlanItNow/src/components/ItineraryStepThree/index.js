import React from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native'

import { Container, Header, Body, Title, Content, Item, Input, Fab, Button } from 'native-base'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

import ScheduleDetail from './scheduleDetail';
import { updateUser } from '../../actions';

class ItineraryStepThree extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        active: true,
        structuredPlaces: [],
        time: [],
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

    // console.log(orderedPlaces);
  }

  componentDidMount() {
    this.structuringPlaces();


  }

  finalConfirm() {
    const { updateUser,user, places } = this.props
    updateUser(user,places);
  }

  render () {

    return (
      <Container style={{ backgroundColor: '#B39DDB' }}>
      <Header style={{backgroundColor:'#311B92'}}>
        <Body>
          <Title>Step 4 of 4 - Input Schedule</Title>
        </Body>
      </Header>
        <Content
          padder>

          <ScrollView>
            {
              this.state.structuredPlaces.map((places,idx) => (
                <View key={idx}>
                  <View style={{paddingLeft:10}}>
                    <Text style={{fontSize:20}}>Day - {idx+1} </Text>
                  </View>
                  <ScheduleDetail places={places} bossIdx={idx} setTimeSchedule={this.setTimeSchedule}/>
                </View>
              ))
            }
          </ScrollView>
        </Content>
        <Button
          rounded
          onPress={() => this.finalConfirm()}
          style={{
            backgroundColor: '#37b578',
            position: 'absolute',
            bottom: 10,
            left: 10
          }}>
          <Icon name="check" color="white" size={22}/>
          <Text style={{
              paddingLeft: 5,
              color: '#fff',
              fontWeight: 'bold'
            }}>Submit</Text>
        </Button>

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
  postItinerary: (itin) => dispatch(postItinerary(itin))
})

export default connect(mapStateToProps,mapDispatchToProps)(ItineraryStepThree);
