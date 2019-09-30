import React,{Component} from 'react';
import Router from './src/navigator/Router';
import SignInScreen from './src/component/signIn/SignInScreen';
import MainScreen from './src/navigator/MainTabNavigator';
import DDTTScreen from './src/component/main/payment/child/DDTTScreen';

export  default  class App extends Component{
  render(){
    return(

        <MainScreen/>
        // <Router/>
        // <SignInScreen></SignInScreen>
        // <DDTTScreen/>
    )
  }
}
