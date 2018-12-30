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
    Button

} from 'react-native';
import { SafeAreaView, } from 'react-navigation';

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');

  
  
export default class Login_View extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Useless Placeholder' };
      }
    
      static navigationOptions = {
        title: 'AppState'
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
                <Text>Login_View</Text>
                <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />                
      <TextInput style={styles.searchBox} placeholder='key' onChangeText={(txt)=>{this.setState({key:txt})}} value={this.state.key}/>
                <TextInput style={styles.searchBox} placeholder='value' onChangeText={(txt)=>{this.setState({value:txt})}} value={this.state.value}/>
                <Button title='ADD' onPress={this._add}/>
                <Button title='REMOVE' onPress={this._remove}/>
                <Button title='GET' onPress={this._getAll}/>
                <Text>data:{this.state.data}</Text>
            </View>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.7,
        backgroundColor: '#ededed',
        borderRadius: 5,
        height: 30,
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
});



