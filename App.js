/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, 
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
const { width, height } = Dimensions.get('window');

import { createBottomTabNavigator, SafeAreaView, createStackNavigator,withNavigation } from 'react-navigation';

import Top from './app/page/top/top';
// import Mian from './mian_vue';
import Mian from './AppMaster';

import CommonHead from './app/components/commonHead';

import QRvue from './app/page/qrcode/QRvue';
import Details from './app/page/home/Details';
import WEB from './app/page/web/Webview';
import Btn_Qrcode from './app/page/home/Btn_Qrcode';
import Btn_Search from './app/page/home/Btn_Search';
import Btn_Remind from './app/page/home/Btn_Remind';
import Btn from './app/page/home/btn';
import Login_View from './Login_View';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or59487 shake for dev menu',
  android:
    'Double tap R on your keyboard 9487to reload,\n' +
    'Shake or press menu button for dev menu',
});


type Props = {};


class DetailsScreen extends React.Component {
  static navigationOptions = {
    // headerTitle instead of title
    // headerTitle: <Top />,
    title: 'Details',

  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>

        <Button
          title="GoBack"
          onPress={() => this.props.navigation.goBack().Alert("hi")}

        />

<Button
          title="console"
          onPress={() => console.warn(this.props)
        }

        />
        
      </View>
    );
  }
}

class TTOOPP extends React.Component {
  
  // 头部左侧
  renderLeftItem() {
    return (

      // <TouchableOpacity onPress={() => this.props.navigation.navigate('QRvue')}
      //   style={styles.navLeft}>
      //   <Image source={require('./app/img/scanning.png')} style={styles.navIcon} />
      //   <Text style={styles.navText}>扫一扫</Text>
      // </TouchableOpacity>
      <Btn_Qrcode/>
    )
  }
  
  // 头部中间
  renderTitleItem() {
    return (
      // <TouchableOpacity onPress={() => { this.props.navigation.navigate('Details') }}>
      //   <View style={styles.searchBox}>
      //     <Image source={require('./app/img/search.png')} style={styles.searchIcon} />
      //     <Text style={styles.searchContent}>搜索商品, 共10161款好物</Text>
      //   </View>
      // </TouchableOpacity>
      <Btn_Search/>
    )
  }
  // 头部右侧
  
  renderRightItem() {
    return (
      // <TouchableOpacity onPress={() => { this.props.navigation.navigate('WEB') }} style={styles.navRight}>
      //   <Image source={require('./app/img/remind.png')} style={styles.navIcon} />
      //   <Text style={styles.navText}>消息</Text>
      // </TouchableOpacity>
      <Btn_Remind/>
    )
  }


  // static navigationOptions = {
  //   // headerTitle instead of title
  //   headerTitle:  >,
  //   //title: 'Details',

  // };

  render() {
    return (
      <CommonHead
     leftItem={() => this.renderLeftItem()}
     titleItem={() => this.renderTitleItem()}
   rightItem={() => this.renderRightItem()}/>
   

    );
  }
}
class MyBackButton extends React.Component {
  render() {
    return <Button title="Back" onPress={() => { this.props.navigation.push('Details')}} />;
  }
}

// export default withNavigation(MyBackButton);

class HomeScreen extends React.Component {
  static navigationOptions = {
    // headerTitle instead of title
    
     headerTitle: <TTOOPP />,
  //  headerTitle:  
  //   <Button
  //   title="Go to Details"
  //   onPress={() => console.warn(DetailsScreen())}
  // />
//<Btn_Qrcode/>
    //title: 'Details',
    
    
   

  };




  render() {
    return (
      <SafeAreaView style={styles.container}>

      <View style={styles.container}>
       
          
          <View style={styles.home}>
          {/* <Mian/>  */}
          <Login_View/>
          {/* <Button
    title="Go to Details"
    onPress={() => this.props.navigation.push('Details')}
  /> */}
          </View>

      </View>
      </SafeAreaView>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home:{ screen: HomeScreen } ,
    
    QRvue:{ screen: QRvue},

    Details:{ screen: DetailsScreen},
    
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends Component<Props> {


  render() {
    return (
      
                  <RootStack />
     
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
    width: width / 8,
    marginLeft: 6
  }
});
