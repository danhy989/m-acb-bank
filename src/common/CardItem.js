import React, { Component } from 'react';
import Button from 'react-native-button';
import { Text, View, Image, StyleSheet, ScrollView, TouchableNativeFeedback } from 'react-native';
import Metrics from './Metrics'
import { bigIntLiteral } from '@babel/types';

const PADDING_HORIZONTAL = Metrics.PADDING_HORIZONTAL;

export default class CardItem extends React.Component {
    render() {
      let _height;
      let iconSize;
      if(this.props.card_item_height=== undefined ){
          _height = 50;
      }else{
        _height = this.props.card_item_height;
      }
      
      const navigate = this.props.navigate;
      return (
        <TouchableNativeFeedback onPress={() => navigate(this.props.name)}>
          <View style={{ flex: 1, flexDirection: 'row', width: Metrics.screenWidth - PADDING_HORIZONTAL * 2, height: _height, alignItems: 'center' ,marginVertical:10}}>
            {/* <Image style={{ flex: 1, height: '40%' , marginHorizontal:PADDING_HORIZONTAL }} source={this.props.img} resizeMode="contain"></Image> */}
            <Text style={{ flex: 7, fontSize: 16 }}>{this.props.text}</Text>
            <Image style={{ flex: 1, height: 20 }} source={require("../assets/img/src_assets_ic_arrow_forward_ic_arrow_forward.png")} resizeMode="contain"></Image>
          </View>
        </TouchableNativeFeedback>
      );
    }
  }