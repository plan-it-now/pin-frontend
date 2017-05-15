import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import { Container, Content, Form, Item, Input, Label, Button, Icon } from 'native-base';
import StepIndicator from 'react-native-step-indicator';

const labels = ["Cart","Delivery Address","Order Summary","Payment Method","Track"];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#000000',
  labelSize: 13,
  currentStepLabelColor: '#fe7013'
}

class StepIndicators extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPosition: 0
    }

  }



  render () {
    return (
      <View style={{ backgroundColor: '#fff' }}>
        <StepIndicator
         customStyles={customStyles}
         currentPosition={this.state.currentPosition}
         labels={labels}
        />
        <View>
          <Button onPress={this.onPageChange.bind(this)}
            block
            style={{
              marginTop: 20,
              alignItems: 'center',
              backgroundColor: '#3B5998'
            }}
          >

           <Text style={{color:'#fff'}}> Next</Text>
            </Button>
        </View>
      </View>
    )
  }

  onPageChange(position){
    console.log(position, 'ini posisi----');
    let tes = this.state.currentPosition + 1;
    this.setState({currentPosition: tes});
  }

}

export default StepIndicators
