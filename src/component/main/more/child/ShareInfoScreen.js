import React, { Component } from 'react';
import Button from 'react-native-button';
import { Text, View, Image, StyleSheet, ScrollView, TouchableNativeFeedback } from 'react-native';
import Metrics from '../../../../common/Metrics';
import TextRow from '../../../../common/TextRow';
import Line from '../../../../common/Line';
import { Icon } from 'react-native-elements'

export default class ShareInfoScreen extends React.Component {
    render() {

        const PADDING_HORIZONTAL = Metrics.PADDING_HORIZONTAL;
        return (
            <View style={{ backgroundColor: '#F3F6F8', flex: 1, paddingHorizontal: PADDING_HORIZONTAL, paddingVertical: 20 }}>
                <Text style={{ marginVertical: 10, fontSize: 16, textAlign: 'center' }}>Chọn tài khoản để chia sẻ thông tin</Text>
                <View style={{ backgroundColor: '#fff', width: Metrics.screenWidth - PADDING_HORIZONTAL * 2, paddingBottom: 20 }}>
                    <Text style={{ textAlign: 'left', fontSize: 16, fontWeight: 'bold', margin: 10 }}>TGTT SINH VIEN KHTN (CN) VND</Text>
                    <Line />
                    <TextRow leftText="Số tài khoản" rightText="23416738" />
                    <TextRow leftText="Tên chủ tài khoản" rightText="VU NGOC DUY ANH" />
                    <TextRow leftText="Tên ngân hàng" rightText="ACB" />
                    <TextRow leftText="Chi nhánh" rightText="ACB - TRUNG TAM THE" />
                    <Line />
                    <View style={{ alignSelf: 'flex-end', flexDirection: 'row',alignItems:'center' }}>
                        <Text style={{ fontSize: 16, color: '#183C9F', margin: 10 }}>Chia sẻ</Text>
                        <Icon
                            name='share-google'
                            type='evilicon'
                            color='#517fa4'
                        />
                    </View>

                </View>
            </View>
        );
    }
}