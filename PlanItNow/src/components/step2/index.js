import React from 'react';

import {
  View,
  Image,
  Text,
  TouchableHighlight
} from 'react-native';

import { Container } from 'native-base'

import SortableListView from 'react-native-sortable-listview';

let data = ['Place 1','Place 2','Place 3']
let data2 = ['Place 4','Place 5','Place 6']

let order = Object.keys(data); //Array of keys
let order2 = Object.keys(data2); //Array of keys

class RowComponent extends React.Component {
  render () {
    return (
      <TouchableHighlight
        underlayColor={'#B39DDB'}
        delayLongPress={50}
        style={{padding: 25, backgroundColor: "#B39DDB", borderBottomWidth:2, borderColor: '#eee'}}
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
        delayLongPress={50}
        style={{padding: 25, backgroundColor: "#B39DDB", borderBottomWidth:2, borderColor: '#eee'}}
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
        <Text>Day 1</Text>
        <SortableListView
              style={{flex: 1}}
              data={data}
              order={order}
              onRowMoved={e => {
                order.splice(e.to, 0, order.splice(e.from, 1)[0]);
                this.forceUpdate();
              }}
              renderRow={row => <RowComponent data={row} />}/>
        <Text>Day 2</Text>
        <SortableListView
              style={{flex: 1}}
              data={data2}
              order={order2}
              onRowMoved={e => {
                order2.splice(e.to, 0, order2.splice(e.from, 1)[0]);
                this.forceUpdate();
              }}
              renderRow={row => <RowComponent2 data2={row} />}/>
      </Container>
    )
  }
}

export default MyComponent;
