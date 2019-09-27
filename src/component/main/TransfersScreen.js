import React, {Component} from 'react';
import Button from 'react-native-button';
import {Text, View, Image} from 'react-native';

export default class TransfersScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        const { params = {} } = navigation.state;
        let tabBarLabel = "Chuyển tiền";
        let tabBarIcon = ({ focused }) =>  (
            focused
            ? <Image source={require('../../assets/img/transfer_onfocus_icon.png')} size={25} style={{marginBottom: 5}}/>
            : <Image source={require('../../assets/img/transfer_icon.png')} size={30} style={{marginBottom: 5}} /> 
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
                    This is Transfers screen
                </Text>
            </View>
        );
    }
}