import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import { StyleSheet } from 'react-native';
import HomeScreen from './HomeScreen'
import MoreScreen from './MoreScreen'
import TransfersScreen from './TransfersScreen'
import SavingScreen from './SavingScreen'
import PaymentScreen from './PaymentScreen'
import { white } from 'ansi-colors';

const TabNavigator = createMaterialBottomTabNavigator({
  Home: {screen: HomeScreen},
  Transfers: {screen: TransfersScreen},
  Saving: {screen: SavingScreen},
  Payment: {screen: PaymentScreen},
  More: { screen: MoreScreen},
  }, {
    initialRouteName: 'Home',
    activeTintColor: 'red',
    activeColor: 'blue',
    shifting: false,
    barStyle: { backgroundColor: 'white' },
    tabBarOptions: {
      tabStyle: {
          paddingVertical: 10
      }
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