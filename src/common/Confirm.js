import React, { Component } from 'react';
import Button from 'react-native-button';
import { Text, View, Image, StyleSheet, ScrollView, TouchableNativeFeedback } from 'react-native';
import Metrics from './Metrics'
import { bigIntLiteral } from '@babel/types';
import CardItem from './CardItem';

const PADDING_HORIZONTAL = Metrics.PADDING_HORIZONTAL;

export default class Confirm extends React.Component {
    render() {
      const navigate = this.props.navigate;
      return (
        <View style={{width:'60%', height:'30%', borderTopStartRadius: 10, borderTopStartRadius: 10}}>
          {/* <View style={{backgroundColor:'#090F9C'}}>
            <Text>Xác nhận </Text>
          </View>
          <View>
            <Text>Vui lòng nhập mật khẩu để</Text>
          </View> */}
          <CardItem text="ABCD"></CardItem>
        </View>
      );
    }
  }