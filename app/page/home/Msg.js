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
    TouchableOpacity,
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import  { RemoteMessage,Notification ,firebase } from 'react-native-firebase';

import { SafeAreaView, } from 'react-navigation';

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');


  _get_FB_token = () => {
    firebase.messaging().getToken()
  .then(fcmToken => {
    if (fcmToken) {
      // user has a device token
      Alert.alert(fcmToken);

    } else {
      // user doesn't have a device token yet
      Alert.alert(' user doesn t have a device token yet');

    } 
  });
}

_Check_FB_token = () => {
firebase.messaging().hasPermission()
.then(enabled => {
  if (enabled) {
    // user has permissions
    Alert.alert(" user has permissions");

  } else {
    // user doesn't have permission
    Alert.alert(" user doesn't have permission");

  } 
});
}


  _request_user_FB_token_chmod = () => {

  firebase.messaging().requestPermission()
  .then(() => {
    // User has authorised  
    Alert.alert(" User has authorised  ");

  })
  .catch(error => {
    // User has rejected permissions  
    Alert.alert(" User has rejected permissions  ");

  });
}

// const message = new firebase.messaging.RemoteMessage()
//   .setMessageId('unique id')
//   .setTo('senderId@gcm.googleapis.com')
//   .setData({
//     key1: 'value1',
//     key2: 'value2',
//   });
// // Send the message
// firebase.messaging().sendMessage(message);


export default class Msg extends Component {

    state = {
        text: 'http://facebook.github.io/react-native/',
    };
    render() {
        return (
            <SafeAreaView style={styles.container}>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Msg</Text>
                    <Button
                        title="Go to Details"
                        onPress={() => this.props.navigation.navigate('Home')}
                    />

{firebase.messaging.nativeModuleExists && <Text style={styles.module}>messaging()</Text>}
                                {firebase.notifications.nativeModuleExists && <Text style={styles.module}>notifications()</Text>}
                                <Button title="Go to get_FB_token" onPress={_get_FB_token}/>
                                <Button title="Check_FB_token" onPress={_Check_FB_token}/>
                                <Button title="_request_user_FB_token_chmod" onPress={_request_user_FB_token_chmod}/>
                               


                    
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
  
  
  
  