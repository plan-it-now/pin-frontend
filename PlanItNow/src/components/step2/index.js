import React from 'react';

import {
  View,
  Image,
  Text,
  ScrollView,
  Modal,
  TouchableHighlight
} from 'react-native';

import { Container, Header, Body, Title } from 'native-base'

import SortableListView from 'react-native-sortable-listview';

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
        <Text>{this.props.data}</Text>
      </TouchableHighlight>
    );
  }
}

class MyComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      modalVisible: false,
      data1: [['Place 1','Place 2','Place 3','Place 4','Place 5','Place 6'],['Place 4','Place 5','Place 6']],
      order1: [], //Array of keys
      data: [],
      order: {}
    }
  }

  componentDidMount(){
    this.setState({
      order1: [Object.keys(this.state.data1[0]),Object.keys(this.state.data1[1])], //Array of keys

    })
  }

  setModalVisible(index) {
    this.setState({data: this.state.data1[index],
                  order: this.state.order1[index]});
    this.setState({modalVisible: true});
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

        <TouchableHighlight onPress={() => {
          this.setModalVisible(0)
        }}>
          <Text style={{fontSize:20, marginLeft:10, marginTop:10}}>
            DAY - 1
          </Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => {
          this.setModalVisible(1)
        }}>
          <Text style={{fontSize:20, marginLeft:10, marginTop:10}}>
            DAY - 2
          </Text>
        </TouchableHighlight>
      </Container>


    )
  }
}

export default MyComponent;
