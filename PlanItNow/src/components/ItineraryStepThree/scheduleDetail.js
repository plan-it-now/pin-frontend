import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import {
  Container,
  Content,
  Item,
  Input,
  Fab,
  Button,
  Icon
} from 'native-base'
import DateTimePicker from 'react-native-modal-datetime-picker';


class ScheduleDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: [],
      isTimePickerVisible: [],
    }
  }

  _showTimePicker = (index) => {
    const newArrVisible = this.state.isTimePickerVisible
    newArrVisible[index] = true
    this.setState({ isTimePickerVisible: newArrVisible })

  }

  _hideTimePicker = (index) => {
    const newArrVisible = this.state.isTimePickerVisible
    newArrVisible[index] = false
    this.setState({ isTimePickerVisible: newArrVisible });
  }

  _handleTimePicked = (date,i) => {
    var string = date.toString()
    waktu = string.slice(16,21)
    let newTime = this.state.time
    newTime[i] = waktu

    let placesTmp = this.props.places;
    placesTmp[i].schedule = waktu
    this.setState({time:newTime}, () => {
      this.props.setTimeSchedule(placesTmp, this.props.bossIdx)
      this._hideTimePicker(i);
    })
  };


  componentWillMount() {
    const newTimeArr = []
    const newVisible = []
    for (let i = 0; i < this.props.places.length; i++) {
      newTimeArr.push('00:11')
      newVisible.push(false);
    }
    this.setState({
      time: newTimeArr,
      isTimePickerVisible: newVisible,
    })
  }

  componentDidMount() {
    console.log('ini PROPS!!!',this.props);
  }

  render() {
    return (
      <View style={{
          backgroundColor: '#EDE7F6',
          borderColor: '#000',
          padding: 10,
          margin: 10,
          borderRadius: 10,
          marginBottom: 25 }}>
          {
            this.props.places.map((x,i) => (
              <View key={i}
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 10,
                  marginBottom: 10,
                }}>
                <View>
                { this.state.time[i] == '00:11' ?
                  <TouchableOpacity >
                   <Button style={{borderRadius:100, backgroundColor:'#5E35B1', marginLeft:10}} onPress={() => this._showTimePicker(i)}>
                    <Text style={{color:'#fff'}}>Set Time</Text>
                   </Button>
                  </TouchableOpacity>
                  :
                  <View >
                    <Text style={{fontSize:20, color:'#5E35B1', paddingLeft:10}} onPress={() => this._showTimePicker(i)}>{this.state.time[i]}</Text>
                  </View>
                }
                  <DateTimePicker
                    mode='time'
                    isVisible={this.state.isTimePickerVisible[i]}
                    onConfirm={(date) => this._handleTimePicked(date,i)}
                    onCancel={() => this._hideTimePicker(i)}
                  />
                </View>


                <View style={{ width: 300, paddingLeft: 15 }}>

                    <Text style={{
                      color: '#000',
                      fontSize: 15
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
