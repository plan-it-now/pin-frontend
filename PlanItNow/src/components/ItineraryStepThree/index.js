import React from 'react';
import {
  View,
  Text,
  ScrollView
} from 'react-native'

import {
  Container,
  Content,
  Item,
  Input,
  Fab,
  Button
} from 'native-base'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

import ScheduleDetail from './scheduleDetail';

class ItineraryStepThree extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        active: true,
        structuredPlaces: []
      }
  }

  structuringPlaces() {
    const { approvedPlaces,days } = this.props.places
    const orderedPlaces = [];
    for (let i = 1; i <= days; i++) {
      orderedPlaces.push(approvedPlaces.filter(place => place.day == i))
    }

    this.setState({
      structuredPlaces: orderedPlaces
    })

    console.log(orderedPlaces);
  }

  componentDidMount() {
    this.structuringPlaces();

  }

  render () {

    return (
      <Container style={{ backgroundColor: '#B39DDB' }}>
        <Content
          padder>

          <ScrollView>
            {
              this.state.structuredPlaces.map((places,idx) => (
                <View>
                  <Text>  Day - {idx+1} </Text>
                  <ScheduleDetail places={places}/>
                </View>
              ))
            }
          </ScrollView>
        </Content>
        <Button
          rounded
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
  places: state.places
})

export default connect(mapStateToProps,null)(ItineraryStepThree);
