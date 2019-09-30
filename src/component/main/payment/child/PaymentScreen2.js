import React, { Component } from 'react';
import Button from 'react-native-button';
import { Text, View, Image, ScrollView, TouchableNativeFeedback } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Metrics from '../../../../common/Metrics';

const PADDING_HORIZONTAL = Metrics.PADDING_HORIZONTAL;

export default class PaymentScreen2 extends React.Component {


    constructor() {
        super();
    }

    state = {
        
    };


    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <View>
                <Text>PaymentScreen2</Text>
            </View>
        );
    }
}