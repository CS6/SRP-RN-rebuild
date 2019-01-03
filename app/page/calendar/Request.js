import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    ScrollView,
    TextInput,
    Button,
    Picker,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { SafeAreaView, } from 'react-navigation';

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');


export default class Request extends Component {

    state = {
        text: 'http://facebook.github.io/react-native/',
    };
    render() {
        return (
          <SafeAreaView style={styles.container}>

          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={styles.container}>
  
            <Text>Request Screen</Text>
            <TextInput style={styles.searchBox} placeholder='key' onChangeText={(txt)=>{this.setState({key:txt})}} value={this.state.key}/>
            <TextInput style={styles.searchBox} placeholder='key' onChangeText={(txt)=>{this.setState({key:txt})}} value={this.state.key}/>
            <TextInput style={styles.searchBox} placeholder='key' onChangeText={(txt)=>{this.setState({key:txt})}} value={this.state.key}/>
            <Picker
  selectedValue={this.state.language}
  style={{ height: 50, width: 100 }}
  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
  <Picker.Item label="病假" value="js1" />
  <Picker.Item label="事假" value="js2" />
  <Picker.Item label="喪假" value="js3" />
  <Picker.Item label="公假" value="js4" />
  <Picker.Item label="婚假" value="js5" />
  <Picker.Item label="產假" value="js6" />
  <Picker.Item label="遠端假" value="js7" />
  <Picker.Item label="生理假" value="js8" />
  <Picker.Item label="育嬰假" value="js9" />


</Picker>
            </View>
  
            <View style={styles.container}>
  
              <Button
                title="送出假單"
                onPress={() => this.props.navigation.navigate('Home')}
              />
            </View>
  
          </View>
        </SafeAreaView>


        );
    };
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },searchBox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: width * 0.7,
      backgroundColor: '#ededed',
      borderRadius: 5,
      height: 50,
      marginVertical: 10,
    },
    logo: {
      height: 120,
      marginBottom: 16,
      marginTop: 64,
      padding: 10,
      width: 135,
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
    modules: {
      margin: 20,
    },
    modulesHeader: {
      fontSize: 16,
      marginBottom: 8,
    },
    module: {
      fontSize: 14,
      marginTop: 4,
      textAlign: 'center',
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      margin: 10,
      borderRadius: 5,
      padding: 5,
  },
  navLeft: {
    alignItems: 'center',
    marginLeft: 10,
  },
  navRight: {
    alignItems: 'center',
    marginRight: 10,
  },
  navIcon: {
    height: 20,
    width: 20,
  },
  navText: {
    fontSize: 10,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.7,
    backgroundColor: '#ededed',
    borderRadius: 5,
    height: 30,
  },
  searchIcon: {
    width: 16,
    height: 16,
    marginRight: 6,
  },
  searchContent: {
    color: '#666',
    fontSize: 14,
  },
  tabBarUnderline: {
    backgroundColor: '#b4282d',
    height: 2,
    width:width/8,
    marginLeft:6
  }
  
  });
  
  
  
  