import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    ScrollView,
    WebView,
    TextInput,
    AsyncStorage,
    Alert,
    Button,
    TouchableOpacity,

} from 'react-native';
import { createBottomTabNavigator, SafeAreaView, createStackNavigator,withNavigation } from 'react-navigation';

import Btn_Login from './app/page/home/Btn_Login';
// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');

  
  
export default class Login_index extends Component {

    constructor(props) {
        super(props);
        this.state = { text: 'Useless Placeholder' };
      }
    
      static navigationOptions = {
        // header: null,
        headerLayoutPreset: 'center' ,
        headerTitleStyle: {
            textAlign: 'center',
            flexGrow:1,
            alignSelf:'center',
        },
        headerStyle: {
            paddingHorizontal: 8,
        },
            
          
            
            
        title: 'AppState',
        headerBackTitleVisible:false,
         headerBackTitle: null,
         headerTruncatedBackTitle: null,
         headerLeft: (  //定义导航栏右侧的按钮
            <Text >檢查我////, O(W)O</Text>
            ),
    
    }

 
    state = {
        key:'',
        value:'',
        data: '\n',
    }

    _getAll = () => {
        this.setState({data: '\n'});
        AsyncStorage.getAllKeys((err,keys) => {
            if (keys && keys.length>0) {
                keys.map((key, index) => {
                    AsyncStorage.getItem(key, (err, result) => {
                        var msg = this.state.data+key + ': ' + result + '\n';
                        this.setState({data: msg});
                    })
                });
            }
        })
    }
    _add = () => {
        AsyncStorage.setItem(this.state.key, this.state.value, (error) => {
            if (error == null) {
                Alert.alert('保存成功');
            } else {
                Alert.alert('error');
            }
        })
    }

    _remove = ()=>{
        AsyncStorage.removeItem(this.state.key,(error)=>{
            if (error == null) {
                Alert.alert('删除成功');
            } else {
                Alert.alert('error');
            }
        })
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>

            <View style={styles.container}>
            <Image style={styles.background} source={{ uri: 'https://unsplash.it/800/600?image=102&blur' }} />
        <View style={styles.container}>
        <Btn_Login/>

          <Text style={[styles.title, { fontSize: 40}]}>Logo</Text>
        </View>
        <View style={styles.container}>
        <TextInput style={styles.searchBox} placeholder='key' onChangeText={(txt)=>{this.setState({key:txt})}} value={this.state.key}/>
                <TextInput style={styles.searchBox} placeholder='value' onChangeText={(txt)=>{this.setState({value:txt})}} value={this.state.value}/>
                
        </View>
  <ScrollView>
  <Text>data:{this.state.data}</Text>
  </ScrollView>
                
                <View style={styles.bottmContainer}>
                <Button title='ADD' onPress={this._add}/>
                <Button title='REMOVE' onPress={this._remove}/>
                <Button title='GET' onPress={this._getAll}/>
</View>
        <View style={styles.bottmContainer}>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#53423D'}]}>
            <Text style={styles.buttonText}>LOG IN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#A58987' }]}onPress={this._getAll}>
            <Text style={styles.buttonText} >SIGN GET</Text>
          </TouchableOpacity>
        </View>
            </View>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.7,
        backgroundColor: '#ededed',
        borderRadius: 5,
        height: 50,
        marginVertical: 10,
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
      
  bottmContainer: {
    height: 60,
    flexDirection: 'row',
  },
  background: {
    height: 800,
    width: 600,
    position: 'absolute',
    
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  desc: {
    fontSize: 20,
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0)',
    textAlign: 'center'
  }
});



