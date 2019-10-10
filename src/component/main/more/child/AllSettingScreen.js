import React, { Component } from 'react';
import Button from 'react-native-button';
import { Text, View, Image, StyleSheet, ScrollView, TouchableNativeFeedback } from 'react-native';
import Metrics from '../../../../common/Metrics';
import CardItem from '../../../../common/CardItem';
import Line from '../../../../common/Line';
import CardItemWithinSwitchButton from '../../../../common/CardItemWithinSwitchButton';

const PADDING_HORIZONTAL = Metrics.PADDING_HORIZONTAL;

export default class AllSettingScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1,paddingHorizontal:PADDING_HORIZONTAL,paddingVertical:PADDING_HORIZONTAL,backgroundColor:'#F3F6F8'}}>
                <View style={{marginBottom:10,backgroundColor:'#FFF',height:'35%'}}>
                    <CardItem  text="Đổi tên truy cập" img={require('../../../../assets/img/src_assets_ic_customer_ic_customer.png')}/>
                    <Line/>
                    <CardItem  text="Đổi mật khẩu" img={require('../../../../assets/img/src_assets_ic_key_ic_key.png')}/>
                    <Line/>
                    <CardItemWithinSwitchButton  text="Kích hoạt vân tay" img={require('../../../../assets/img/src_assets_ic_touch_id_ic_touch_id.png')}/>
                    <Line/>
                    <CardItem  text="Lịch sử đăng nhập" img={require('../../../../assets/img/src_assets_ic_time_machine_ic_time_machine.png')}/>
                </View>
                <View style={{backgroundColor:'#fff',height:'20%'}}>
                <CardItem  text="Kích hoạt tài khoản ngưng hoạt động" img={require('../../../../assets/img/src_assets_ic_padlock_ic_padlock.png')}/>
                <Line/>
                <CardItem text="Thông báo số dư tự động" img={require('../../../../assets/img/src_assets_ic_google_alerts_ic_google_alerts.png')}/>
                
                </View>
            </View>
        );
    }
}