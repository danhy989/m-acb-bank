import React,{Component} from 'react';
import Router from './src/navigator/Router';
import SignInScreen from './src/component/signIn/SignInScreen';

export  default  class App extends Component{
  render(){
    return(
        // <Router/>
        <SignInScreen></SignInScreen>
    )
  }
}
