import React, { Component } from 'react';
import Button from 'react-native-button';
import { Text, View, Image, StyleSheet, ScrollView, TouchableNativeFeedback } from 'react-native';
import Metrics from '../../../../common/Metrics';

export default class TermScreen extends React.Component{
    render(){
        const PADDING_HOZI = Metrics.PADDING_HORIZONTAL;
        return(
            <View style={{flex:1,padding:PADDING_HOZI,backgroundColor:'#F4F6F8'}}>
                <Text style={{textAlign:'center',color:'#696A6B',fontSize:16,fontWeight:'bold',marginBottom:10}}>Điều kiện & điều khoản sử dụng dịch vụ Ngân hàng điện tử ACB online</Text>
                <View style={{borderRadius:5,width:Metrics.screenWidth-PADDING_HOZI*2,height:50,backgroundColor:'#FFF'}}>

                </View>
            </View>
        );
    }
}