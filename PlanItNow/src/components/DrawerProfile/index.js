import React from 'react';

import {
  View,
  Text
} from 'react-native';

import {
  Drawer
} from 'native-base';

class DrawerProfile extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
      closeDrawer = () => {
        this.drawer._root.close()
      };
      openDrawer = () => {
        this.drawer._root.open()
      };
        return (
          <Drawer
            ref={(ref) => { this.drawer = ref; }}
            content={
              <View navigator={this.navigator}>
                <Text>Profile</Text>
                <Text>Setings</Text>
              </View>
            }
            onClose={() => this.closeDrawer()} >
          // Main View
        </Drawer>
        );
    }
}

export default DrawerProfile
