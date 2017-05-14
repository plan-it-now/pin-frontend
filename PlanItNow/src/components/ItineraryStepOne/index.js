import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';

import {
  Container,
  Footer,
  FooterTab,
  Button,
  Content,
  Picker,
} from 'native-base';

import { connect } from 'react-redux';

import { processStep1 } from '../../actions';

const Item = Picker.Item;

class ItineraryStepOne extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedItem: undefined,
      selectedDay: [],
      results: {
        items: []
      }
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
    // console.log('v',value);
    // console.log('idx', index);
    // console.log('s', this.state.selectedDay);
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
      <Container
        style={{ backgroundColor: '#B39DDB' }}
      >
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
                    backgroundColor: 'white',
                    height: 80,
                    marginBottom: 10,
                    marginTop: 10
                  }}
                >
                  <View
                    style={{
                      width: 200,
                      paddingLeft: 10
                    }}
                  >
                    <Text
                      style={{
                        color: '#000',
                        fontSize: 18
                      }}
                    >{appPlace.place.name} </Text>
                  </View>
                  <View style={{
                      width: 120,
                      paddingRight: 10
                    }}
                  >
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
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>Save</Text>
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
