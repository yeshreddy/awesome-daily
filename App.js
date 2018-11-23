import React from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';

import {OpeningView} from './src/openingview';
import {SideMenu} from './src/Drawer/sidemenu';

import { Constants } from 'expo';

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.appContainer}>
          <View style={styles.statusBar}/>
          <OpeningView/>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  appContainer:{
    flex:1
  },
  statusBar: {
    backgroundColor: "skyblue",
    height: Constants.statusBarHeight
  }
});


