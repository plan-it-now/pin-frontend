import React, { Component } from 'react';
import {
  Text,
  View,
  BackHandler,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { Container, Picker, Button, Form, Item as Stay, Input, Label, Header, Body, Title, Icon } from 'native-base';

import StepIndicator from 'react-native-step-indicator';

import { fetchPlaces } from '../../actions';
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

class inputQuery extends Component {
  constructor(props){
    super(props)
    this.state = {
      city: 'key0',
      days:'',
      warning: '',
      isDatePickerVisible: false,
      date: '',
      currentPosition: 0
    }
    this.submitQuery = this.submitQuery.bind(this);
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton)

    //for development use only
    setTimeout(()=>{
      const { pref, fetchPlaces } = this.props;
<<<<<<< HEAD
      fetchPlaces(pref,'Semarang'.toLowerCase(), 2);
        this.props.navigation.navigate('Recomendation');
      }, 1000);


=======
      fetchPlaces(pref,'Semarang', 2);
        this.props.navigation.navigate('Recomendation');
    }, 1000)
>>>>>>> e4a45dd0a030c36800ecf5cc55559e4d10fdd7d1
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton)
  }

  handleBackButton() {
    return true
  }

  static navigationOptions = {
    headerTitle: "Inquiry"
  }

  onValueChange (value: string) {
    this.setState({
        city: value,
    });
  }

  submitQuery() {
    this.setState({warning:''})
    const { pref, fetchPlaces } = this.props;
    fetchPlaces(pref,this.state.city , +(this.state.days));
    const regex = new RegExp('^(?=.*[0-9])')
    if(regex.test(this.state.days)){
      this.props.navigation.navigate('Recomendation');
    }
      this.setState({warning: 'Length of Stay field can only accept number.'})
  }

  render() {
    return(
      <Container style={{flex:1, backgroundColor:'#B39DDB'}}>
        <StatusBar hidden={true}/>
          <View style={{marginTop:20, marginBottom:20}}>
            <StepIndicator
               customStyles={customStyles}
               currentPosition={this.state.currentPosition}
               labels={labels}
            />
          </View>

          <View style={{flex:1, justifyContent:'center', flexDirection:'row', marginTop:50}}>
            <View style={{width: 300, flexDirection:'column'}}>
              <Picker
                style={{marginBottom: 30}}
                  supportedOrientations={['portrait']}
                  mode="dropdown"
                  selectedValue={this.state.city}
                  onValueChange={this.onValueChange.bind(this)}>
                  <Item label="Location" value="key0" />
                  <Item label="Semarang" value="Semarang" />
                  <Item label="Yogyakarta" value="Yogyakarta" />
                  <Item label="Bali" value="Bali" />
              </Picker>
              <Form style={{paddingRight:20}}>
                <Stay floatingLabel >
                  <Label>Length of Stay</Label>
                  <Input onChangeText={(days) => this.setState({days})} />
                </Stay>
              </Form>
              <View style={{flex:1,justifyContent:'center', marginTop:50, flexDirection:'row'}}>
                <Button block warning onPress={() => {(this.state.days !== '' && this.state.city !== 'key0') ? this.submitQuery() : this.setState({warning:'Please input all fields'})}}
                style={{
                  marginTop: 20,
                  alignItems: 'center',
                  backgroundColor: '#5E35B1',
                  width:100,
                  height:100,
                  borderRadius:100
                }}>

                   <Icon name="md-paper-plane" style={{color: '#fff', fontSize:50}}/>
               </Button>
             </View>
             <View style={{flex:1, justifyContent:'center', flexDirection:'row'}}>
             <Text style={{fontSize:15, color:'red'}}>{this.state.warning}</Text>
             </View>
            </View>
          </View>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  pref: state.logindata.userdata.pref
})

const mapDispatchToProps = dispatch => ({
  fetchPlaces: (pref,city,days) => dispatch(fetchPlaces(pref,city,days))
})

export default connect(mapStateToProps,mapDispatchToProps)(inputQuery);
