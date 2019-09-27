import React,{Component} from 'react';
import Router from './src/navigator/Router';
import MainScreen from './src/component/main/MainScreen'
import SignInScreen from './src/component/signIn/SignInScreen';


export  default  class App extends Component{
  render(){
    return(

        <MainScreen/>
        // <Router/>
        // <SignInScreen></SignInScreen>
    )
  }
}
