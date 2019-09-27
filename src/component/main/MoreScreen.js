import React, {Component} from 'react';
import Button from 'react-native-button';
import {Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import FlipToggle from 'react-native-flip-toggle-button'
import styles from '../login/LoginCss';
export default class MoreScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        const { params = {} } = navigation.state;
        let tabBarLabel = "Thêm";
        let tabBarIcon = () => (
          <Image 
          source = {require('../../assets/img/more_icon.png')}
      style={{width: 26, height: 26}}
      />
        );
        return {tabBarLabel, tabBarIcon};
    }
    constructor() {
        super();
        this.state = {
         isActive: false,
        };
      }

    render() {
        return (
        <View style={styles.body}>

        </View>
        );   
    }
}