import React,{Component} from 'react';
import Router from './src/navigator/Router';
import MainScreen from './src/component/main/MainScreen';

export  default  class App extends Component{
  render(){
    return(
        <MainScreen/>
    )
  }
}
