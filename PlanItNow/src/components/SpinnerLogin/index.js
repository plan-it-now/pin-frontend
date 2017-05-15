import React from 'react';

import {
  View,
  Button,
  AsyncStorage
} from 'react-native'

import {
  Container,
  Content,
  Spinner
} from 'native-base';


class SpinnerLogin extends React.Component {
  constructor(props) {
    super(props)

  }

  componentWillMount() {
    const { navigate } = this.props.navigation
    AsyncStorage.getItem('token', (err, result) => {
      if (err) {
        console.log(err);
      } else {
        setTimeout(function(){
          navigate('inputQuery')
        }, 3000);

      }
    })
  }

  render () {
    return (
      <Container>
        <Content>
          <Spinner color='red'/>
        </Content>
      </Container>
    )
  }

}

export default SpinnerLogin;
