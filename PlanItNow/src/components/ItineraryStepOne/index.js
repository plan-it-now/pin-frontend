import React from 'react';

import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';

import { Container, Footer, FooterTab, Button, Content, Picker, Header, Body, Title } from 'native-base';

import { connect } from 'react-redux';

import { processStep1 } from '../../actions';

import StepIndicator from 'react-native-step-indicator';

const Item = Picker.Item;

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

class ItineraryStepOne extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedItem: undefined,
      selectedDay: [],
      results: {
        items: []
      },
      currentPosition: 2
    }
  }

  componentDidMount(){
    let arraySelected = new Array(this.props.places.approvedPlaces.length);
    for(let i=0;i<arraySelected.length;i++){
      arraySelected[i] = 1;
    }
    this.setState({
      selectedDay: arraySelected
    })
  }

  onValueChange (value: Number, index) {
    let arrTmp = this.state.selectedDay;
    arrTmp[index] = value;
    this.setState({
      selectedDay: arrTmp
    })
  }

  handleSave(){
    let approvedList = {approvedPlaces: this.props.places.approvedPlaces.map((appPlace, index) =>({
      ...appPlace,
      day: this.state.selectedDay[index]
    }))
  };
    this.props.processStep1(approvedList);
    const { navigate } = this.props.navigation;
    navigate('Step2');
  }

  render () {
    const tmp = new Array(this.props.places.days);
    for(let i=1;i<=tmp.length;i++){
      tmp[i-1] = 'Day '+ i;
    }
    return (
      <Container style={{ backgroundColor: '#B39DDB' }}>

          <View style={{marginTop:20, marginBottom:20}}>
            <StepIndicator
               customStyles={customStyles}
               currentPosition={this.state.currentPosition}
               labels={labels}
            />
          </View>
            <ScrollView>
              <Content
                padder
              >
                {
                  this.props.places.approvedPlaces.map( (appPlace,idx) => (
                    <View key={idx}
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        backgroundColor: '#fff',
                        height: 80,
                        marginBottom: 10,
                        marginTop: 10,
                        borderRadius:10
                      }}
                    >
                      <View style={{ width: 200, paddingLeft: 10 }}>
                        <Text style={{ color: '#000', fontSize: 18}}>{appPlace.place.name} </Text>
                      </View>

                      <View style={{ width: 120, paddingRight: 10 }}>
                        <Picker
                          supportedOrientations={['portrait','landscape']}
                          iosHeader="Select one"
                          mode="dropdown"
                          selectedValue={this.state.selectedDay[idx]}
                          onValueChange={(value)=>this.onValueChange(value,idx)}>
                          {
                            tmp.map((day,index)=>(
                              <Item key={index} label={day} value={index+1} />
                            ))
                          }
                        </Picker>
                      </View>
                    </View>
                  ))
                }
              </Content>
            </ScrollView>

            <Footer>
              <FooterTab>
                <Button
                  style={{ backgroundColor: '#5E35B1'}}
                  block
                  onPress={()=>this.handleSave()}>
                  <Text style={{ color: '#fff', fontWeight: 'bold' }}>Proceed to Step 4</Text>
                </Button>
              </FooterTab>
            </Footer>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  places: state.places,
})

const mapDispatchToProps = dispatch => ({
  processStep1: (approvedList) => dispatch(processStep1(approvedList))
})

export default connect(mapStateToProps, mapDispatchToProps)(ItineraryStepOne);
