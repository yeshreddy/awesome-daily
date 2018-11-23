import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet,View, DrawerLayoutAndroid } from 'react-native';

export  class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
      </View>
    );
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}>
        
      </DrawerLayoutAndroid>
    );
  }

}

AppRegistry.registerComponent('awesome', () => SideMenu);
