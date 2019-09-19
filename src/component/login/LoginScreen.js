import React,{Component} from 'react';
import {Button,Text,View} from 'react-native';
export default class LoginScreen extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View>
          <Text>This is login screen</Text>
            <Button
          title="Go to main screen"
          onPress={() => navigate('Main')}
        />
        </View>
        
      );
    }
  }