/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator, SafeAreaView, createStackNavigator } from 'react-navigation';

import Top from './app/page/top/top';
// import Mian from './mian_vue';
import Mian from './AppMaster';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or59487 shake for dev menu',
  android:
    'Double tap R on your keyboard 9487to reload,\n' +
    'Shake or press menu button for dev menu',
});


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.container}>

      <View style={styles.container}>
        <View style={{ backgroundColor: 'skyblue', flex: 1 }} >
        <Top/>
        </View>
        
          
          <View style={styles.home}>
          <Mian/>
          </View>

      </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#F5FCFF',
  },
  home: {
    flex: 16,
    flexDirection: 'column',
  },
  mini: {
    flex: 1,
    flexDirection: 'row',
  },
  body: {
    flex: 7,
    flexDirection: 'row',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  Text: {
    textAlign: 'center',
  },
});
