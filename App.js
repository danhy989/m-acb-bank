import React,{Component} from 'react';
import Router from './src/navigator/Router';
import MainScreen from './src/navigator/MainTabNavigator';
import DDTTScreen from './src/component/main/payment/child/DDTTScreen';
import UserInfoScreen from './src/component/main/more/child/UserInfoScreen';
import MoreScreen from './src/component/main/more/MoreScreen';

export  default  class App extends Component{
  render(){
    return(
         //<UserInfoScreen/>
         <MainScreen/>
        // <Router/>
        // <SignInScreen></SignInScreen>
        // <DDTTScreen/>
    )
  }
}
