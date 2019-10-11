import React, { Component } from 'react';
import Button from 'react-native-button';
import { Text, View, Image, StyleSheet, ScrollView, TouchableNativeFeedback } from 'react-native';
import Metrics from './Metrics';

export default class TextRow extends React.Component{
    render(){
        
        return(
            <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',marginHorizontal:10,marginVertical:20}}>
                        <View style={{flex:1,alignItems:'flex-start'}}>
                            <Text style={{fontSize:16}}>{this.props.leftText}</Text>
                        </View>
                        <View style={{flex:2}}>
                            <Text style={{textAlign:'right',color:'#183C9F',fontSize:16}}>{this.props.rightText}</Text>
                        </View>
            </View>
        );
    }
}