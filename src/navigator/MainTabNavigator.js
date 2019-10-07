import React from 'react';
import { Text, View ,Image} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import { StyleSheet } from 'react-native';
import HomeScreen from '../component/main/HomeScreen'
import MoreScreen from '../component/main/more/MoreScreen'
import TransfersScreen from '../component/main/TransfersScreen'
import SavingScreen from '../component/main/SavingScreen'
import PaymentScreen from '../component/main/payment/PaymentScreen'
import { white } from 'ansi-colors';
import DDTTScreen from '../component/main/payment/child/DDTTScreen';
import PaymentNavigator from './PaymentNavigator';

const TabNavigator = createMaterialBottomTabNavigator({
  Home: {screen: HomeScreen},
  Transfers: {screen: TransfersScreen},
  Saving: {screen: SavingScreen},
  Payment: {screen: PaymentNavigator,
    navigationOptions:{  
      tabBarLabel : "Thanh toán",
      tabBarIcon : ({ focused }) => (
        focused
            ? <Image source={require('../assets/img/wallet_onfocus_icon.png')} size={25} />
            : <Image source={require('../assets/img/wallet_icon.png')} size={30} />
    )
  }},
  More: { screen: MoreScreen,navigationOptions:{  
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