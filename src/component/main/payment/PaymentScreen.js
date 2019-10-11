import React, { Component } from 'react';
import Button from 'react-native-button';
import { Text, View, Image, ScrollView, TouchableNativeFeedback } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Metrics from '../../../common/Metrics';

const PADDING_HORIZONTAL = Metrics.PADDING_HORIZONTAL;

class CardItem extends React.Component {

    render() {
        const navigate = this.props.navigate;
        const DeviceWidth = Metrics.screenWidth + PADDING_HORIZONTAL * 2;
        return (
            <TouchableNativeFeedback onPress={() => navigate(this.props.name,{nameScreen:this.props.nameScreen})}>
                    <View style={{ marginHorizontal: 0.5, width: DeviceWidth * 0.2, height: DeviceWidth * 0.25, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 8 }}>
                    <Image source={this.props.img} resizeMode="contain"
                        style={{ width: '40%', height: '40%' }} />
                    <Text style={{ fontSize: 12, textAlign: 'center' }}>{this.props.text}</Text>
                </View>
            </TouchableNativeFeedback>
        );
    }
}

export default class PaymentScreen extends React.Component {


    constructor() {
        super();
    }

    state = {
        search: '',
    };


    componentDidMount() {
    }

    componentWillUnmount() {
    }

    updateSearch = search => {
        this.setState({ search });
    };

    render() {
        const {navigate} = this.props.navigation;
        console.log(this.props.navigation);
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: Metrics.headerFontSize }}>Thanh toán</Text>
                    </View>
                    <View style={{ flex: 1, backgroundColor: Metrics.backgroundMainApp, paddingHorizontal: PADDING_HORIZONTAL, paddingVertical: PADDING_HORIZONTAL }}>
                        <SearchBar
                            inputStyle={{ fontSize: 14 }}
                            placeholder="Tìm dịch vụ"
                            onChangeText={this.updateSearch}
                            value={this.state.search}
                            containerStyle={{ backgroundColor: '#FFFFFF', borderTopWidth: 0, borderBottomWidth: 0, borderRadius: 5, height: 50 }}
                            inputContainerStyle={{ backgroundColor: '#FFFFFF', flexDirection: 'row-reverse', paddingHorizontal: 2 }}
                        />
                    </View>
                </View>
                <View style={{
                    flex: 4, paddingHorizontal: PADDING_HORIZONTAL, justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#F2F7F8'
                }}>
                    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                        <View style={{ flexDirection: 'row', marginVertical: PADDING_HORIZONTAL }}>
                            <View>
                                <CardItem name="DDTT" navigate={navigate} img={require('../../../assets/img/src_assets_payment_ic_phone_ic_phone.png')} text="Nạp DTDD trả trước"></CardItem>
                                <CardItem name="PaymentScreen2" navigate={navigate} img={require('../../../assets/img/src_assets_payment_ic_tv_ic_tv.png')} text="Truyền hình"></CardItem>
                                <CardItem name="PaymentScreen3" nameScreen="tàu lửa" navigate={navigate} img={require('../../../assets/img/src_assets_payment_ic_train_ic_train.png')} text="Vé tàu lửa"></CardItem>
                            </View>
                            <View>
                                <CardItem name="PaymentScreen2" navigate={navigate} img={require('../../../assets/img/src_assets_payment_ic_eletricity_ic_eletricity.png')} text="Điện"></CardItem>
                                <CardItem name="PaymentScreen2" navigate={navigate} img={require('../../../assets/img/src_assets_payment_ic_phone_later_ic_phone_later.png')} text="DTDD trả sau"></CardItem>
                                <CardItem img={""} text=""></CardItem>
                            </View>
                            <View>
                                <CardItem name="PaymentScreen2" navigate={navigate} img={require('../../../assets/img/src_assets_payment_ic_water_ic_water.png')} text="Nước"></CardItem>
                                <CardItem name="PaymentScreen2" navigate={navigate} img={require('../../../assets/img/src_assets_payment_ic_home_phone_ic_home_phone.png')} text="Điện thoại cố định"></CardItem>
                                <CardItem img={""} text=""></CardItem>
                            </View>
                            <View>
                                <CardItem name="PaymentScreen2" navigate={navigate} img={require('../../../assets/img/src_assets_payment_ic_internet_ic_internet.png')} text="Internet"></CardItem>
                                <CardItem name="PaymentScreen3" nameScreen="máy bay" navigate={navigate} img={require('../../../assets/img/src_assets_payment_ic_plane_ic_plane.png')} text="Vé máy bay"></CardItem>
                                <CardItem img={""} text=""></CardItem>
                            </View>
                        </View>
                        <View style={{ alignItems: 'flex-start', marginVertical: 10 }}>
                            <Text style={{ flex: 1 }}>Thanh toán tự động</Text>
                            <View style={{ flex: 1, flexDirection: 'row', height: Metrics.screenWidth * 0.15, width: Metrics.screenWidth - PADDING_HORIZONTAL * 2, marginTop: 10, justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableNativeFeedback onPress={() => alert('Clicked')}>
                                    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFFFFF', justifyContent: 'center', marginRight: 0.5, height: '100%' }} >
                                        <Text>Danh sách</Text>
                                    </View>
                                </TouchableNativeFeedback>
                                
                                <TouchableNativeFeedback onPress={() => alert('Clicked')}>
                                    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFFFFF', justifyContent: 'center', marginLeft: 0.5, height: '100%' }}>
                                        <Text>Tạo mới</Text>
                                    </View>
                                </TouchableNativeFeedback>
                               
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-start', marginVertical: 10 }}>
                            <Text style={{ flex: 1 }}>Danh sách hóa đơn</Text>
                            <View style={{ flex: 1, backgroundColor: '#fff', height: Metrics.screenWidth * 0.4, width: Metrics.screenWidth - PADDING_HORIZONTAL * 2, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                                <Text>Không có dữ liệu</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}