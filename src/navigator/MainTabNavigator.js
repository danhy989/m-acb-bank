import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import { StyleSheet } from 'react-native';
import HomeScreen from '../component/main/HomeScreen'
import MoreScreen from '../component/main/MoreScreen'
import TransfersScreen from '../component/main/TransfersScreen'
import SavingScreen from '../component/main/SavingScreen'
import PaymentScreen from '../component/main/payment/PaymentScreen'
import { white } from 'ansi-colors';

const TabNavigator = createMaterialBottomTabNavigator({
  Home: {screen: HomeScreen},
  Transfers: {screen: TransfersScreen},
  Saving: {screen: SavingScreen},
  Payment: {screen: PaymentScreen},
  More: { screen: MoreScreen},
  }, {
    initialRouteName: 'Home',
    activeColor: 'blue',
    shifting: false,
    barStyle: { backgroundColor: 'white'  },
    tabBarOptions: {
      
    },
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
})

const MainScreen = createAppContainer(TabNavigator);
export default MainScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})