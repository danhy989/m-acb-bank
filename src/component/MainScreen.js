import React,{Component} from 'react';
import {Button,Text,View} from 'react-native';
export default class MainScreen extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View>
            <Text>This is main screen</Text>
        </View>
      );
    }
  }