import React, { Component } from 'react';
import Button from 'react-native-button';
import { TextInput, Alert, TouchableOpacity, StyleSheet, Text, View, Image, ScrollView, TouchableNativeFeedback } from 'react-native';
import { SearchBar, Icon } from 'react-native-elements';
import Metrics from '../../../../common/Metrics';
import { bold, blue } from 'ansi-colors';
import { CustomPicker } from 'react-native-custom-picker'


const PADDING_HORIZONTAL = Metrics.PADDING_HORIZONTAL;

export default class PaymentScreen3 extends React.Component {


    constructor() {
        super();
    }


    componentDidMount() {
        
    }

    componentWillUnmount() {
    }

    state = {
        search: '',
        showMenhGia: false
    };

    updateSearch = search => {
        this.setState({ search });
    };



    render() {
        const options = [
            {
                color: '#000',
                label: 'Gmobile',
                value: 1,
                icon: require('../../../../assets/img/gmobile.png')
            },
            {
                color: '#000',
                label: 'S-fone',
                value: 2,
                icon: require('../../../../assets/img/sfone.png')
            },
            {
                color: '#000',
                label: 'Viettel',
                value: 3,
                icon: require('../../../../assets/img/viettel.png')
            },
            {
                color: '#000',
                label: 'Vinaphone',
                value: 4,
                icon: require('../../../../assets/img/vinaphone.jpg')
            },
            {
                color: '#051C2B',
                label: 'Mobifone',
                value: 5,
                icon: require('../../../../assets/img/mobifone.png')
            }
        ];
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1, backgroundColor: '#0E6DC2' }}>

                    </View>
                    <View style={{ flex: 49, justifyContent: 'space-around', padding: 10 }}>
                        <Text style={{ color: '#535353', fontSize: 16 }}>
                            Tài khoản trích (VND): <Text style={{ fontWeight: 'bold' }}>22522323</Text>
                        </Text>
                        <Text style={{ color: '#0E6DC2', fontSize: 16 }}>
                            1.000.000 VND
                        </Text>
                    </View>
                    <View style={{ flex: 10, justifyContent: 'center' }}>
                        <Icon
                            name='chevron-down'
                            type='evilicon'
                            color='#535353'
                            size={40}
                        />
                    </View>
                </View>
                <View style={{ flex: 6, paddingHorizontal: PADDING_HORIZONTAL, backgroundColor: '#F4F6F8', alignItems: 'center' }}>
                    <View style={{ paddingLeft: 20, justifyContent: 'center', borderWidth: 0.05, marginVertical: 15, height: 70, width: Metrics.screenWidth - PADDING_HORIZONTAL * 2 + 3, backgroundColor: '#FFFFFF', borderRadius: 5 }}>
                        <Text>Hạn mức còn lại</Text>
                        <Text style={{ color: '#535353' }}>Hạn mức SMS: <Text style={{ fontWeight: 'bold' }}>5.000.000 VND</Text></Text>
                    </View>

                    <Text>Lựa chọn hãng {this.props.navigation.getParam('nameScreen')}</Text>

                    <View style={{ borderWidth: 0.05, marginVertical: 15, height: 70, width: Metrics.screenWidth - PADDING_HORIZONTAL * 2 + 3, backgroundColor: '#FFFFFF', borderRadius: 5 }}>
                        <CustomPicker
                            placeholder={'Nhà cung cấp'}
                            options={options}
                            getLabel={item => item}
                            fieldTemplate={this.renderField}
                            optionTemplate={this.renderOption}
                            headerTemplate={this.renderHeader}
                            // onValueChange={value => {
                            //     value ? this.setState({ showMenhGia: true }) : this.setState({ showMenhGia: false })
                            // }}
                        />
                    </View>

                    <View style={{ borderWidth: 0.05, marginVertical: 10, height: 70, width: Metrics.screenWidth - PADDING_HORIZONTAL * 2 + 3, backgroundColor: '#FFFFFF', borderRadius: 5 }}>
                        <TextInput
                            style={styles.textinput}
                            placeholder={"Mã đặt chỗ"}
                            underlineColorAndroid='transparent'
                            keyboardType='default'

                        />
                    </View>

                    <TouchableNativeFeedback onPress={() => alert('Clicked')}>
                        <View style={{ alignItems: 'center', backgroundColor: '#21439C', justifyContent: 'center', height: 50, width: 200, borderRadius: 30, margin: 20 }}>
                            <Text style={{ color: '#FFF', fontWeight: 'bold' }}>TIẾP TỤC</Text>
                        </View>
                    </TouchableNativeFeedback>

                </View>
            </View>
        );
    }

    renderHeader() {

        return (
            <View style={{ marginBottom: 30 }}>
                <View style={{ fontWeight: 'bold' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', marginHorizontal: 20, marginVertical: 5 }}>Đơn vị cung cấp</Text>
                </View>
                <View style={{ borderRadius: 10, borderWidth: 0.5, marginHorizontal: PADDING_HORIZONTAL, paddingHorizontal: PADDING_HORIZONTAL }}>
                    <SearchBar
                        inputStyle={{ fontSize: 14 }}
                        placeholder="Tìm dịch vụ"
                        onChangeText={this.updateSearch}
                        value={''}
                        containerStyle={{ backgroundColor: '#FFFFFF', borderTopWidth: 0, borderBottomWidth: 0, borderRadius: 5, height: 50 }}
                        inputContainerStyle={{ backgroundColor: '#FFFFFF', flexDirection: 'row-reverse', paddingHorizontal: 2 }}
                    />
                </View>
            </View>
        )
    }

    renderFooter(action) {
        return (
            <TouchableOpacity
                style={styles.headerFooterContainer}
                onPress={() => {
                    Alert.alert('Footer', "You've click the footer!", [
                        {
                            text: 'OK'
                        },
                        {
                            text: 'Close Dropdown',
                            onPress: action.close.bind(this)
                        }
                    ])
                }}
            >
                <Text>This is footer, click me!</Text>
            </TouchableOpacity>
        )
    }

    renderField(settings) {
        const { selectedItem, defaultText, getLabel, clear } = settings
        return (
            <View style={{ height: 70, width: Metrics.screenWidth - PADDING_HORIZONTAL * 2 + 3 }}>
                {!selectedItem && (
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                            <Image source={require('../../../../assets/img/circle.png')} resizeMode='contain' style={{ flex: 1 }}></Image>
                        </View>
                        <View style={{ flex: 4, justifyContent: 'center', alignItems: 'flex-start' }}>
                            <Text style={{ fontSize: 16 }}>Nhà cung cấp</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Icon
                                name='navicon'
                                type='evilicon'
                                color='#535353'
                                size={40}
                            />
                        </View>
                    </View>
                )}
                {selectedItem && (
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                            <Image source={getLabel(selectedItem.icon)} resizeMode='contain' style={{ flex: 1 }}></Image>
                        </View>
                        <View style={{ flex: 4, justifyContent: 'center', alignItems: 'flex-start' }}>
                            <Text style={{ fontSize: 16 }}>{getLabel(selectedItem.label)}</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Icon
                                name='navicon'
                                type='evilicon'
                                color='#535353'
                                size={40}
                            />
                        </View>
                    </View>
                )}
            </View>
        )
    }

    renderOption(settings) {
        const { item, getLabel } = settings
        return (
            <View style={styles.optionContainer}>
                <View style={styles.innerContainer}>
                    <View style={{ flex: 1 }}>
                        <Image source={getLabel(item.icon)} resizeMode='contain' style={{ width: 50, height: 50 }}></Image>
                    </View>
                    <View style={{ flex: 5, justifyContent: 'center' }}>
                        <Text style={{ color: item.color }}>{getLabel(item.label)}</Text>
                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        borderColor: 'grey',
        borderWidth: 1,
        padding: 15
    },
    innerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch'
    },
    text: {
        fontSize: 18
    },
    headerFooterContainer: {
        padding: 10,
        alignItems: 'center'
    },
    clearButton: { backgroundColor: 'grey', borderRadius: 5, marginRight: 10, padding: 5 },
    optionContainer: {
        padding: 10,
        borderBottomColor: 'grey',
        borderBottomWidth: 1
    },
    optionInnerContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    box: {
        flex: 1,
        width: 40,
        height: 40,
        marginRight: 10
    },
    textinput: {
        top: 10,
        left: 20,
        flex: 1,
        color: '#000000',
        fontSize: 16,
        height: 40,
        width: Metrics.screenWidth * 0.7,
        borderColor: 'black',
        borderWidth: 0,
        borderBottomWidth: 1,
        marginBottom: 30,
        borderBottomColor: '#EEEEEE'
    },
})
