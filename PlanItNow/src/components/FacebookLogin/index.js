import React from 'react';

import {
  View,
  Text,
  Button
} from 'react-native';

const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken,
  LoginManager
} = FBSDK;

class LoginFb extends React.Component {
  constructor(props) {
    super(props)

  }

  authfacebooksdk() {
    var self = this
    LoginManager.logInWithReadPermissions(['public_profile','email']).then(
      function(result) {
        if (result.isCancelled) {
          alert('Login cancelled');
        } else {
          console.log('masuk sini',result.accessToken);
          var app = self
          AccessToken.getCurrentAccessToken()
                     .then((accessTokenData) => {
                       console.log('accessTokenData --------', accessTokenData.accessToken);
                       fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' + accessTokenData.accessToken)
                         .then((response) => response.json())
                         .then((json) => {
                           console.log('response json ------',json);
                           var user = {}
                           // Some user object has been set up somewhere, build that user here
                           user.name = json.name
                           user.id = json.id
                           user.user_friends = json.friends
                           user.email = json.email
                           user.username = json.name
                           user.loading = false
                           user.loggedIn = true
                           app._requestLoginFacebook(user)
                         })
                         .catch((error) => {
                           console.log(error);
                         })
                     }, (error => {
                       console.log('Error nih' + error);
                     }))
                  }
      },
        function(error) {
          alert('Login fail with error: ' + error);
        }
        )
  }

  render () {
    return (
      <View>
        <LoginButton
          onPress={() => this.authfacebooksdk.bind(this)}
        />

      </View>

    );
  }

}
export default LoginFb;
