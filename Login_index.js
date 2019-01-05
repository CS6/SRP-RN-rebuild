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
import Btn_Search from './app/page/home/Btn_Search';

import Btn_Login from './app/page/home/Btn_Login';
// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');
import firebase from 'react-native-firebase';

const credential = firebase.auth.EmailAuthProvider.credential(
    'sduum82@gmail.com',
    '22476103',
);
const provider = firebase.auth.GoogleAuthProvider.credential(

);
  
export default class Login_index extends Component {
   
    constructor(props) {
        super(props);
        this.unsubscribe = null;
        this.state = {
          user: null,
          message: '',
          codeInput: '',
          phoneNumber: '+886',
          confirmResult: null,
          text: 'Useless Placeholder'
        };
      }
    
      static navigationOptions = {
        // header: null,
        headerLayoutPreset: 'center' ,
        // headerTitleStyle: {
        //     textAlign: 'center',
        //     flexGrow:1,
        //     alignSelf:'center',
        // },
        headerStyle: {
            // paddingHorizontal: 8,
        },
            
        headerTitleStyle:{flex:1, textAlign: 'center'},

            
            
        title: 'AppState',
        headerBackTitleVisible:false,
         headerBackTitle: null,
         headerTruncatedBackTitle: null,
        //  headerLeft: (  //定义导航栏右侧的按钮
        //     <Text >檢查我////, O(W)O</Text>
        //     ),
    
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

    componentDidMount() {
        this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            this.setState({ user: user.toJSON() });
          } else {
            // User has been signed out, reset the state
            this.setState({
              user: null,
              message: '',
              codeInput: '',
              phoneNumber: '+886',
              confirmResult: null,
            });
          }
        });
      }
    
      componentWillUnmount() {
         if (this.unsubscribe) this.unsubscribe();
      }
    
      signIn = () => {
        const { phoneNumber } = this.state;
        this.setState({ message: 'Sending code ...' });
    
        firebase.auth().signInWithPhoneNumber(phoneNumber)
          .then(confirmResult => this.setState({ confirmResult, message: 'Code has been sent!' }))
          .catch(error => this.setState({ message: `Sign In With Phone Number Error: ${error.message}` }));
      };
    
      confirmCode = () => {
        const { codeInput, confirmResult } = this.state;
    
        if (confirmResult && codeInput.length) {
          confirmResult.confirm(codeInput)
            .then((user) => {
              this.setState({ message: 'Code Confirmed!' });
            })
            .catch(error => this.setState({ message: `Code Confirm Error: ${error.message}` }));
        }
      };
    
      signOut = () => {
        firebase.auth().signOut();
      }
    
      renderPhoneNumberInput() {
       const { phoneNumber } = this.state;
    
        return (
          <View style={{ padding: 25 }}>
            <Text>Enter phone number:</Text>
            <TextInput
              autoFocus
              style={{ height: 40, marginTop: 15, marginBottom: 15 }}
              onChangeText={value => this.setState({ phoneNumber: value })}
              placeholder={'Phone number ... '}
              value={phoneNumber}
            />
            <Button title="Sign In" color="green" onPress={this.signIn} />
          </View>
        );
      }
    
      renderMessage() {
        const { message } = this.state;
    
        if (!message.length) return null;
    
        return (
          <Text style={{ padding: 5, backgroundColor: '#000', color: '#fff' }}>{message}</Text>
        );
      }
    
      renderVerificationCodeInput() {
        const { codeInput } = this.state;
    
        return (
          <View style={{ marginTop: 25, padding: 25 }}>
            <Text>Enter verification code below:</Text>
            <TextInput
              autoFocus
              style={{ height: 40, marginTop: 15, marginBottom: 15 }}
              onChangeText={value => this.setState({ codeInput: value })}
              placeholder={'Code ... '}
              value={codeInput}
            />
            <Button title="Confirm Code" color="#841584" onPress={this.confirmCode} />
          </View>
        );
      }
      _user_info = () => {
        
        Alert.alert(firebase.auth());
      }
   


//https://firebase.google.com/docs/auth/web/anonymous-auth
    _Login = ()=>{
        firebase.auth().signInAnonymously().catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            Alert.alert(errorCode,errorMessage);

            // ...
          });

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          Alert.alert(uid);
          console.warn(isAnonymous);
          

          // ...
        } else {
          // User is signed out.
          // ...
          Alert.alert("User is signed out");

        }
        // ...
      }
    
      
      );
    }
    _Google_Login = ()=>{
        try {
           // const ConfirmationResult =  firebase.auth().signInWithPhoneNumber('+886' + this.state.username);
           firebase.auth().signInWithPhoneNumber('+886' + "910927898");
 
           console.log("a");
        } catch (e) {
            console.log(e)
        }
     
    }
    


   
    // constructor() {
    //     super();
    //     this.unsubscriber = null;
    //     this.state = {
    //       user: null,
    //     };
    //   }
    
    //   /**
    //    * Listen for any auth state changes and update component state
    //    */
    //   componentDidMount() {
    //     this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {
    //       this.setState({ user });
    //     });
    //   }
    
    //   componentWillUnmount() {
    //     if (this.unsubscriber) {
    //       this.unsubscriber();
    //     }
    //   }


    render() {
        const { user, confirmResult } = this.state;

        return (
            // <SafeAreaView style={styles.container}>

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
                <Button title='ADD' onPress={this._add}style={styles.button3} />
                <Button title='REMOVE' onPress={this._remove}style={styles.button3} />
                <Button title='GET' onPress={this._getAll}style={styles.button3} />
</View>
<ScrollView>
<Btn_Search/>
{!user && !confirmResult && this.renderPhoneNumberInput()}

{this.renderMessage()}

{!user && confirmResult && this.renderVerificationCodeInput()}

{user && (
  <View
    style={{
      padding: 15,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#77dd77',
      flex: 1,
    }}
  >
    <Text style={{ fontSize: 25 }}>Signed In!</Text>
    <Text>{JSON.stringify(user)}</Text>
    <Button title="Sign Out" color="red" onPress={this.signOut} />

    <Button title="_user_info" color="red" onPress={this._user_info} />
    
  </View>
)}
</ScrollView>

        <View style={styles.bottmContainer}>
          {/* <TouchableOpacity style={[styles.button, { backgroundColor: '#A58987' }]}onPress={this._getAll}>
            <Text style={styles.buttonText} >登入</Text>

          </TouchableOpacity> */}
        <Btn_Login/>

        </View>


            </View>
            // </SafeAreaView>
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
    paddingHorizontal:50,
    paddingVertical:10,
    marginBottom:30,

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
    borderRadius:10,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
  },
  buttonText: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
   
  },
  button3: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
        borderRadius:30,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 50,
        borderTopWidth: 50,
        borderLeftColor: 'transparent',
        borderTopColor: 'red',
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



