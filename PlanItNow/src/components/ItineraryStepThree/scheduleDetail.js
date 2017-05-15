import React from 'react';
import {
  View,
  Text
} from 'react-native'
import {
  Container,
  Content,
  Item,
  Input,
  Fab,
  Button
} from 'native-base'

class ScheduleDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('ini props',this.props.places);
  }
  render() {
    return (
      <View style={{
          backgroundColor: '#EDE7F6',
          borderColor: '#000',
          padding: 10,
          margin: 10}}>
          {
            this.props.places.map(x => (
              <View style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 10,
                  marginBottom: 10
                }}>
                <View style={{ width: 130 }}>
                  <Item rounded red>
                    <Input style={{
                        borderColor: '#000',
                        borderWidth: 1,
                        borderRadius: 50,
                        paddingLeft: 20}}/>
                  </Item>
                </View>

                <View
                  style={{ width: 300, paddingLeft: 15 }}
                >
                  <Text style={{
                    color: '#000',
                    fontSize: 18
                  }}>{x.place.name}</Text>
                </View>

              </View>
            ))
          }

      </View>
    )
  }
}

export default ScheduleDetail;
