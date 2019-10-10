import React, { Component } from 'react';
import Button from 'react-native-button';
import { Text, View, Image, StyleSheet, ScrollView, TouchableNativeFeedback } from 'react-native';
import Metrics from '../../../../common/Metrics';
import TextRow from '../../../../common/TextRow';

export default class UserInfoScreen extends React.Component{
    render(){
       
        const PADDING_HORIZONTAL = Metrics.PADDING_HORIZONTAL;
        return(
            <View style={{backgroundColor:'#F3F6F8',flex:1,paddingHorizontal:PADDING_HORIZONTAL,paddingVertical:20}}>
                <Text style={{marginVertical:10,fontSize:16}}>Thông tin cá nhân</Text>
                <View style={{backgroundColor:'#fff',height:Metrics.screenHeight/3,width:Metrics.screenWidth-PADDING_HORIZONTAL*2,paddingBottom:20}}>
                    <TextRow leftText="CMND" rightText="23416738"/>
                    <TextRow leftText="Ngày sinh" rightText="22/09/1998"/>
                    <TextRow leftText="Số điện thoại" rightText="0784387306"/>
                    <TextRow leftText="Email" rightText="DANHY989@GMAIL.COM"/>
                    <TextRow leftText="Địa chỉ" rightText="DHCNTT-KP6 LINH TRUNG Quan Thu Duc TP.Ho Chi Minh"/>
                </View>
                <Text style={{textAlign:'center',marginVertical:10}}>Để thay đổi thông tin cá nhân vui lòng liên hệ tổng đài hoặc đến chi nhánh ACB gần nhất</Text>
                <TouchableNativeFeedback onPress={()=>alert('clicked')}>
                    <View>
                        <Text style={{color:'#5698D4',textAlign:'center'}}>
                            Xem địa điểm >
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}