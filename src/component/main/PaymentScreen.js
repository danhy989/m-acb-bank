import React, {Component} from 'react';
import Button from 'react-native-button';
import {Text, View, Image} from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        const { params = {} } = navigation.state;
        let tabBarLabel = "Thanh toán";
        let tabBarIcon = ({}) => (
            <Image 
                source = {require('../../assets/img/wallet_icon.png')}
                style={{width: 26, height: 26}}
            />
        );
        return {tabBarLabel, tabBarIcon};
    }

    constructor() {
        super();
        this.state = {
        };
      }
    componentDidMount() {
    }

    componentWillUnmount() {
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
                    This is Payment screen
                </Text>
            </View>
        );
    }
}