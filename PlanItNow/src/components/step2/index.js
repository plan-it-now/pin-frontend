import React from 'react';

import { View, Image, Text, ScrollView, Modal, TouchableHighlight, TouchableOpacity, StatusBar } from 'react-native';

import { Container, Header, Body, Title, Button, Footer, FooterTab, Content, Icon } from 'native-base'
import { connect } from 'react-redux';

import SortableListView from 'react-native-sortable-listview';

import { processStep2 } from '../../actions';

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

export class RowComponent extends React.Component {
  render () {
    return (
      <TouchableHighlight
        underlayColor={'#5E35B1'}
        delayLongPress={50}
        style={{padding: 25, backgroundColor: "#5E35B1", borderBottomWidth:3, borderColor: '#eee'}}
        {...this.props.sortHandlers}
      >
        <Text style={{fontSize:20, color:'#fff'}}>{this.props.data.place.name}</Text>
      </TouchableHighlight>
    );
  }
}

class MyComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      modalVisible: false,
      dataAll: [],
      orderAll: [], //Array of keys
      data: [],
      order: {},
      currentPosition: 3
    }
  }

  componentDidMount(){
    let arrPlaces = new Array(this.props.places.days);
    let arrOrder = [];
    for(let i=0;i<arrPlaces.length;i++){
      arrPlaces[i] = this.props.places.approvedPlaces.filter(p => (p.day === i+1));
      arrOrder.push(Object.keys(arrPlaces[i]));
    }


    console.log('---',arrOrder);
    this.setState({
      dataAll: arrPlaces,
      orderAll: arrOrder, //Array of keys
    })
  }

  setModalVisible(index) {
    this.setState({data: this.state.dataAll[index],
                  order: this.state.orderAll[index]});
    this.setState({modalVisible: true});
  }

  handleSubmitOrder() {
    let newArrPlaces = []
    for (let i = 0; i < this.state.dataAll.length; i++) {
      for (let j = 0; j < this.state.dataAll[i].length; j++) {
        const idx = this.state.orderAll[i].findIndex( el => el == j);
        const newObj = {
          ...this.state.dataAll[i][idx],
          orderIndex: this.state.orderAll[i][idx]
        }
        newArrPlaces.push(newObj);
      }
    }
    this.props.processStep2({
      approvedPlaces: newArrPlaces,
    })

    const { navigate } = this.props.navigation;
    navigate('Step3');
  }


  render() {
    return (
      <Container style={{backgroundColor: '#B39DDB'}}>

          <View style={{marginTop:20, marginBottom:20}}>
            <StepIndicator
               customStyles={customStyles}
               currentPosition={this.state.currentPosition}
               labels={labels}
            />
          </View>
            <Modal
              animationType={"slide"}
              transparent={false}
              visible={this.state.modalVisible}
              onRequestClose={() => {console.log("Modal has been closed.")}}>

                <View style={{height:50}}>
                  <TouchableHighlight onPress={() => {
                    this.setState({modalVisible:false})
                  }}>
                    <View style={{marginTop:10, marginLeft:12}}>
                      <Icon name="md-arrow-back" style={{marginLeft:10, fontSize:30}}/>
                    </View>
                  </TouchableHighlight>
                </View>
                <SortableListView
                      style={{flex:1}}
                      data={this.state.data}
                      order={this.state.order}
                      onRowMoved={e => {
                        this.state.order.splice(e.to, 0, this.state.order.splice(e.from, 1)[0]);
                        this.forceUpdate();
                      }}
                      renderRow={row => <RowComponent data={row} />}/>
            </Modal>

            <Content>
              <View style={{marginTop:10}}>
                {this.state.dataAll.map((day,index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => { this.setModalVisible(index) }}
                    style={{backgroundColor:"#fff", margin:10, borderRadius:10}}>
                    <Text style={{fontSize:20, padding:10, color:'#000', justifyContent:'center', alignSelf:'center'}}>
                      DAY - {index+1}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </Content>

            <View style={{alignSelf:'center', marginBottom:10}}>
                <Button
                  style={{ backgroundColor: '#5E35B1'}}
                  rounded
                  onPress={()=>this.handleSubmitOrder()}>
                  <Text style={{ color: '#fff', fontWeight: 'bold' }}>Proceed to Step 5</Text>
                </Button>
            </View>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  places: state.places
})

const mapDispatchToProps = dispatch => ({
  processStep2: (approvedPlaces) => dispatch(processStep2(approvedPlaces))
})

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);
