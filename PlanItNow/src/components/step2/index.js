import React from 'react';

import {
  View,
  Image,
  Text,
  ScrollView,
  Modal,
  TouchableHighlight
} from 'react-native';

import { Container, Header, Body, Title, Button } from 'native-base'
import { connect } from 'react-redux';

import SortableListView from 'react-native-sortable-listview';

import { processStep2 } from '../../actions';

// let data1 = [['Place 1','Place 2','Place 3','Place 4','Place 5','Place 6'],['Place 4','Place 5','Place 6']]
// let data2 = ['Place 4','Place 5','Place 6']

// let order1 = [Object.keys(data1[0]),Object.keys(data1[1])]; //Array of keys

class RowComponent extends React.Component {
  render () {
    return (
      <TouchableHighlight
        underlayColor={'#B39DDB'}
        delayLongPress={100}
        style={{padding: 15, backgroundColor: "#B39DDB", borderBottomWidth:2, borderColor: '#eee'}}
        {...this.props.sortHandlers}
      >
        <Text>{this.props.data.place.name}</Text>
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
      order: {}
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
    
    // console.log("hasil nih bro--- ", newArrPlaces );
  }

  render() {
    return (
      <Container>
      <Header style={{backgroundColor:'#5E35B1'}}>
        <Body>
          <Title>Step 2 - Arrange Order</Title>
        </Body>
      </Header>
          <Modal
            animationType={"slide"}
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {alert("Modal has been closed.")}}>
              <View style={{height:50}}>
                <TouchableHighlight onPress={() => {
                  this.setState({modalVisible:false})
                }}>
                <View style={{marginTop:10, marginLeft:12}}>
                  <Text style={{fontSize:20}}>BACK</Text>
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

          {this.state.dataAll.map((day,index) => (
            <TouchableHighlight key={index} onPress={() => {
              this.setModalVisible(index)
            }}>
              <Text style={{fontSize:20, marginLeft:10, marginTop:10}}>
                DAY - {index+1}
              </Text>
            </TouchableHighlight>
          ))}
          <Button onPress={()=> this.handleSubmitOrder()}>
            <Text> BUTTON </Text>
          </Button>


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
