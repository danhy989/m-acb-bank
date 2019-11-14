import React from 'react';
import { Text, View ,Image} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import { StyleSheet } from 'react-native';

import PaymentNavigator from './PaymentNavigator';
import MoreNavigator from './MoreNavigator';
import HomeNavigator from './HomeNavigator';
import TransferNavigator from './TransferNavigator';
import SavingNavigator from './SavingNavigator';

const TabNavigator = createMaterialBottomTabNavigator({
  Home: {
    screen: HomeNavigator,
    navigationOptions:{
      tabBarLabel: "Trang chủ",
      tabBarIcon: ({ focused }) =>  (
          focused
          ? <Image source={require('../assets/img/home_onfocus_icon.png')} size={25}/>
          : <Image source={require('../assets/img/home_icon.png')} size={30}/> 
       )
    }
  },
  Transfer: {
    screen: TransferNavigator,
    navigationOptions:{
      tabBarLabel: "Chuyển tiền",
      tabBarIcon: ({ focused }) =>  (
        focused
        ? <Image source={require('../assets/img/transfer_onfocus_icon.png')} size={25} style={{marginBottom: 5}}/>
        : <Image source={require('../assets/img/transfer_icon.png')} size={30} style={{marginBottom: 5}} /> 
      )
    }
  },
  Saving: {
    screen: SavingNavigator,
    navigationOptions:{
      tabBarLabel: "Tiết kiệm",
      tabBarIcon: ({ focused }) =>  (
        focused
          ? <Image source={require('../assets/img/saving_onfocus_icon.png')} size={25}  />
          : <Image source={require('../assets/img/saving_icon.png')} size={30}  /> 
      )
    }
  },
  Payment: {screen: PaymentNavigator,
    navigationOptions:{  
      tabBarLabel : "Thanh toán",
      tabBarIcon : ({ focused }) => (
        focused
            ? <Image source={require('../assets/img/wallet_onfocus_icon.png')} size={25} />
            : <Image source={require('../assets/img/wallet_icon.png')} size={30} />
    )
  }},
  More: { screen: MoreNavigator,navigationOptions:{  
    tabBarLabel : "Thêm",
    tabBarIcon : ({ focused }) => (
      focused
          ? <Image source={require('../assets/img/more_onfocus_icon.png')} size={25} />
          : <Image source={require('../assets/img/more_icon.png')} size={30} />
  )
}},
  },
  {
    initialRouteName: 'Home',
    activeColor: 'blue',
    shifting: false,
    barStyle: { backgroundColor: 'white'  },
    tabBarOptions: {
      
    },
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
}
);

const MainScreen = createAppContainer(TabNavigator);
export default MainScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})