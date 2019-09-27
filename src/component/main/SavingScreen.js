import React, {Component} from 'react';
import Button from 'react-native-button';
import {Text, View, Image} from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        const { params = {} } = navigation.state;
        let tabBarLabel = "Tiết kiệm";
        let tabBarIcon = ({ focused }) =>  (
            focused
            ? <Image source={require('../../assets/img/saving_onfocus_icon.png')} size={25}  />
            : <Image source={require('../../assets/img/saving_icon.png')} size={30}  /> 
         );
        return {tabBarLabel, tabBarIcon};
    }

    constructor() {
        super();
        this.state = {

        };
      }
    render(){
        return (
            <View style ={{
                flex: 1,
                backgroundColor: '#067a7',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{ fontWeight: 'bold', fontSize: 22}}>
                    This is Saving screen
                </Text>
            </View>
        );
    }
}