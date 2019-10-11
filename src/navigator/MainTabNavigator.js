import React from 'react';
import { Text, View ,Image} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import { StyleSheet } from 'react-native';
import HomeScreen from '../component/main/HomeScreen'
import TransfersScreen from '../component/main/TransfersScreen'
import SavingScreen from '../component/main/SavingScreen'
import PaymentNavigator from './PaymentNavigator';
import MoreNavigator from './MoreNavigator';

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