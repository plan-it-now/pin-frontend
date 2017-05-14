import React, { Component } from 'react';
import {
  Text,
  View,
  BackHandler,
  StatusBar
} from 'react-native';
import { connect } from 'react-redux';
import { Container, Picker, Button, Form, Item as Stay, Input, Label, Header, Body, Title, Icon } from 'native-base';

import { fetchPlaces } from '../../actions';
const Item = Picker.Item;

class inputQuery extends Component {
  constructor(props){
    super(props)
    this.state = {
      city: 'key0',
      days:'',
      warning: ''
    }
    this.submitQuery = this.submitQuery.bind(this);
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton)
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
    fetchPlaces(pref,this.state.city.toLowerCase(), +(this.state.days));
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
      <Header style={{backgroundColor:'#311B92'}}>
        <Body>
          <Title>Inquiry</Title>
        </Body>
      </Header>
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
