import React from 'react';

import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import { Container, Header, Body, Title } from 'native-base'

import SortableListView from 'react-native-sortable-listview';

let data = ['Place 1','Place 2','Place 3','Place 7','Place 8','Place 9']
let data2 = ['Place 4','Place 5','Place 6','Place 7','Place 8','Place 9']

let order = Object.keys(data); //Array of keys
let order2 = Object.keys(data2); //Array of keys

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
class RowComponent2 extends React.Component {
  render () {
    return (
      <TouchableHighlight
        underlayColor={'#B39DDB'}
        delayLongPress={100}
        style={{padding: 15, backgroundColor: "#B39DDB", borderBottomWidth:2, borderColor: '#eee'}}
        {...this.props.sortHandlers}
      >
        <Text>{this.props.data2}</Text>
      </TouchableHighlight>
    );
  }
}

class MyComponent extends React.Component {
  render() {
    return (
      <Container>
      <Header style={{backgroundColor:'#5E35B1'}}>
        <Body>
          <Title>Step 2 - Arrange Order</Title>
        </Body>
      </Header>
      <ScrollView>
        <Text>Day - 1</Text>
        <SortableListView
              style={{flex: 1}}
              data={data}
              order={order}
              onRowMoved={e => {
                order.splice(e.to, 0, order.splice(e.from, 1)[0]);
                this.forceUpdate();
              }}
              renderRow={row => <RowComponent data={row} />}/>
        <Text>Day - 2</Text>
        <SortableListView
              style={{flex: 1}}
              data={data2}
              order={order2}
              onRowMoved={e => {
                order2.splice(e.to, 0, order2.splice(e.from, 1)[0]);
                this.forceUpdate();
              }}
              renderRow={row => <RowComponent2 data2={row} />}/>
              </ScrollView>
      </Container>
    )
  }
}

export default MyComponent;
