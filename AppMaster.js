import React from 'react';
import { createBottomTabNavigator, SafeAreaView, createStackNavigator } from 'react-navigation';
import {
  Component, StyleSheet, Platform, Image, TextInput
  , Button, Text, View, ScrollView, TouchableOpacity, Dimensions,
} from 'react-native';
import firebase from 'react-native-firebase';
import Icon from 'react-native-vector-icons/FontAwesome5';
import QRCode from 'react-native-qrcode';
import ScrollableTabView, { ScrollableTabBar, DefaultTabBar } from 'react-native-scrollable-tab-view';

import CommonHead from './app/components/commonHead';

//引用插件

import Recommend from './app/page/home/recommend';
import Otherpage from './app/page/home/otherpage';
import Qrcode from './app/page/qrcode/QRvue';
import Settings from './app/page/home/Settings';
import Details from './app/page/home/Details';
import Webview from './app/page/web/Webview';

import Request from './app/page/calendar/Request';
import Reply from './app/page/calendar/Reply';




// import Info from './app/page/home/Dinfo';
const { width, height } = Dimensions.get('window');


class scroll_Screen extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      tabShow: false,
      label: ['推荐', '新品', '居家', '餐厨', '配件', '服装', '电器', '洗护', '杂货', '饮食', '婴童', '志趣'],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        tabShow: true
      });
    }, 0)
  }

  // // 头部左侧
  // renderLeftItem() {
  //   return (

  //     <TouchableOpacity onPress={() => this.props.navigation.navigate('qrcode')}
  //       style={styles.navLeft}>
  //       <Image source={require('./app/img/scanning.png')} style={styles.navIcon} />
  //       <Text style={styles.navText}>扫一扫</Text>
  //     </TouchableOpacity>
  //   )
  // }
  // // 头部中间
  // renderTitleItem() {
  //   return (
  //     <TouchableOpacity onPress={() => { this.props.navigation.navigate('Other') }}>
  //       <View style={styles.searchBox}>
  //         <Image source={require('./app/img/search.png')} style={styles.searchIcon} />
  //         <Text style={styles.searchContent}>搜索商品, 共10161款好物</Text>
  //       </View>
  //     </TouchableOpacity>
  //   )
  // }
  // // 头部右侧
  // renderRightItem() {
  //   return (
  //     <TouchableOpacity onPress={() => { this.props.navigation.navigate('Details') }} style={styles.navRight}>
  //       <Image source={require('./app/img/remind.png')} style={styles.navIcon} />
  //       <Text style={styles.navText}>消息</Text>
  //     </TouchableOpacity>
  //   )
  // }

  // 滑动tab
  renderScrollableTab() {
    let label = this.state.label
    if (this.state.tabShow) {
      return (

        <ScrollableTabView
          renderTabBar={() => <ScrollableTabBar />}
          tabBarBackgroundColor='#fff'
          tabBarActiveTextColor='#b4282d'
          tabBarInactiveTextColor='#333'
          tabBarUnderlineStyle={styles.tabBarUnderline}
        >
              {/* label: ['推荐', '新品', '居家', '餐厨', '配件', '服装', '电器', '洗护', '杂货', '饮食', '婴童', '志趣'], */}

          {
            label.map((item, index) => {

              switch (item) {
                case '推荐':
                  return (
                    <Recommend tabLabel={item} key={index} />
                  )
                  break;
                case '新品':
                  return (
                    <Qrcode tabLabel={item} key={index} />
                  )
                  break;
                case '居家':
                  return (
                    <Qrcode tabLabel={item} key={index} />
                  )
                  break;
                case '餐厨':
                  return (
                    <Otherpage tabLabel={item} key={index} />
                  )
                  break;
                default:
                  return (
                    <Otherpage tabLabel={item} key={index} />
                  )
                  break;
              }
            })
          }
        </ScrollableTabView>

      )
    }

  }

  render() {
    return (
      <SafeAreaView style={styles.container}>

        <View style={styles.container}>
          {/* <CommonHead
            leftItem={() => this.renderLeftItem()}
            titleItem={() => this.renderTitleItem()}
            rightItem={() => this.renderRightItem()}
          /> */}
          <View style={{ flex: 1 }}>
            {this.renderScrollableTab()}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}


class index_Screen extends React.Component {


  // 滑动tab
  renderScrollableTab() {

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <Text>Home!</Text>
        <Icon name="battery-full" size={30} color="#900" />
        <Icon name="battery-three-quarters" size={30} color="#900" />
        <Icon name="battery-half" size={30} color="#900" />
        <Icon name="battery-quarter" size={30} color="#900" />
        <Icon name="battery-empty" size={30} color="#900" />
        <Icon name="bed" size={30} color="#900" />
        <Icon name="american-sign-language-interpreting" size={30} color="#777" />

      </View>

    )
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>

        <View style={styles.container}>
         
          <View style={{ flex: 1 }}>
            {this.renderScrollableTab()}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}


class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

          <Text>Home!</Text>
          <Icon name="battery-full" size={30} color="#900" />
          <Icon name="battery-three-quarters" size={30} color="#900" />
          <Icon name="battery-half" size={30} color="#900" />
          <Icon name="battery-quarter" size={30} color="#900" />
          <Icon name="battery-empty" size={30} color="#900" />
          <Icon name="bed" size={30} color="#900" />
          <Icon name="american-sign-language-interpreting" size={30} color="#777" />

        </View>
      </SafeAreaView>
    );
  }
}


class meow extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ScrollView>
            <View style={styles.container}>
              <Image source={require('./assets/ReactNativeFirebase.png')} style={[styles.logo]} />
              <Text style={styles.welcome}>
                Welcome to {'\n'} React Native Firebase
          </Text>
              <Text style={styles.instructions}>
                To get started, edit App.js
          </Text>
              {Platform.OS === 'ios' ? (
                <Text style={styles.instructions}>
                  Press Cmd+R to reload,{'\n'}
                  Cmd+D or shake for dev menu
            </Text>
              ) : (
                  <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Cmd+M or shake for dev menu
            </Text>
                )}
              <View style={styles.modules}>
                <Text style={styles.modulesHeader}>The following Firebase modules are pre-installed:</Text>
                {firebase.admob.nativeModuleExists && <Text style={styles.module}>admob()</Text>}
                {firebase.analytics.nativeModuleExists && <Text style={styles.module}>analytics()</Text>}
                {firebase.auth.nativeModuleExists && <Text style={styles.module}>auth()</Text>}
                {firebase.config.nativeModuleExists && <Text style={styles.module}>config()</Text>}
                {firebase.crashlytics.nativeModuleExists && <Text style={styles.module}>crashlytics()</Text>}
                {firebase.database.nativeModuleExists && <Text style={styles.module}>database()</Text>}
                {firebase.firestore.nativeModuleExists && <Text style={styles.module}>firestore()</Text>}
                {firebase.functions.nativeModuleExists && <Text style={styles.module}>functions()</Text>}
                {firebase.iid.nativeModuleExists && <Text style={styles.module}>iid()</Text>}
                {firebase.invites.nativeModuleExists && <Text style={styles.module}>invites()</Text>}
                {firebase.links.nativeModuleExists && <Text style={styles.module}>links()</Text>}
                {firebase.messaging.nativeModuleExists && <Text style={styles.module}>messaging()</Text>}
                {firebase.notifications.nativeModuleExists && <Text style={styles.module}>notifications()</Text>}
                {firebase.perf.nativeModuleExists && <Text style={styles.module}>perf()</Text>}
                {firebase.storage.nativeModuleExists && <Text style={styles.module}>storage()</Text>}
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}


export default createBottomTabNavigator({
  scroll: { screen: scroll_Screen },
  Home: { screen: HomeScreen },
  Settings: { screen: Settings },
  meow: { screen: meow },
  info: { screen: Webview },
  Request: { screen: Request },
  Reply: { screen: Reply },
  index: { screen: index_Screen },
  Other: { screen: Otherpage },


}, {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = "address-card";
        } else if (routeName === 'Settings') {
          iconName = "500px";
        } else if (routeName === 'meow') {
          iconName = "rocket";
        } else if (routeName === 'info') {
          iconName = "android";
        } else if (routeName === 'Request') {
          iconName = "calendar-alt";
        } else if (routeName === 'scroll') {
          iconName = "assistive-listening-systems";

        } else if (routeName === 'Reply') {
          iconName = "calendar-check";

        } else if (routeName === 'Other') {
          iconName = "video";
        } else if (routeName === 'index') {
          iconName = "bell-slash";
        }






        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        // return <Icon name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
        return (
         
              <Icon name={iconName} size={horizontal ? 20 : 25} color={tintColor} />
       
      );
      },
    }),

    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },


);


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
    width: width / 8,
    marginLeft: 6
  }

});



