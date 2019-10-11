import React, { Component } from 'react';
import Button from 'react-native-button';
import { Text, View, Image, StyleSheet, ScrollView, TouchableNativeFeedback } from 'react-native';
import Metrics from './Metrics'

const PADDING_HORIZONTAL = Metrics.PADDING_HORIZONTAL;

export default class Line extends React.Component {
    render() {
        return (
            <View style={{
                width: Metrics.screenWidth - PADDING_HORIZONTAL * 2, height: 1,
                backgroundColor: '#F3F6F8'
            }}></View>
        )
    }
}