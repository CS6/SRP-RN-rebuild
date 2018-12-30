import React from 'react';
import { Button,StyleSheet,TouchableOpacity,Image,Text } from 'react-native';
import { withNavigation } from 'react-navigation';

class Btn_Remind extends React.Component {
  render() {
    return (
    
    <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}
    style={styles.navRight}>
    
    <Image source={require('../../img/remind.png')} style={styles.navIcon} />
        <Text style={styles.navText}>消息</Text>
  </TouchableOpacity>
    
    );
  }
}





const styles = StyleSheet.create({
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
  });
  

// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(Btn_Remind);