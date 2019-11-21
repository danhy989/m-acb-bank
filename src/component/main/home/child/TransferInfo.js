import React, {Component} from 'react';
import Button from 'react-native-button';
import {Text, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import styles from './../../savingCss';

class TextIcon extends React.Component{
    render(){
        var data = [
            {
                "text" : "Chuyển tiền",
                "src" : require('../../../../assets/img/circle_transfer.png'),
                "left": '10%',
                "right": '0%',
            },
            {
                "text" : "Tiết kiệm",
                "src" : require('../../../../assets/img/src_assets_ic_plus_ic_plus.png'),
                "left": '0%',
                "right": '0%',
            },
            {
                "text" : "Thanh toán",
                "src" : require('../../../../assets/img/circle_wallet.png'),
                "left": '0%',
                "right": '10%',
            },
        ]
        return(
            <View style={{flex: 1,flexDirection:'column', alignItems:'center', justifyContent: 'center',
                marginLeft: data[this.props.index].left, marginRight:data[this.props.index].right, width: '40%'}}>
                <Image source={ data[this.props.index].src} style={{width: 50, height:50}}/>
                <Text>{this.props.text}</Text>
            </View>
        )
    }
}
class Record extends React.Component{
    render(){
        return(
                <View style={{flex: 4, width: '90%',height: '35%', marginTop: '2%', marginLeft: '5%', borderRadius: 10, flexDirection:'column',
                    justifyContent: 'center',alignItems: 'center',backgroundColor: 'white'}}>

                    <View style={{flex:3, width:'100%', justifyContent:'center'}}>
                        <Text style={{marginLeft: '5%'}}>{this.props.title}</Text>
                    </View>

                    <View style={{flex:3, backgroundColor: '#106ec3', width:'100%', justifyContent:'space-between', 
                        flexDirection:'row'}}>
                        <View style={{flex: 3, marginLeft:'5%', justifyContent:'center'}}>
                            <Text style={{fontSize: 15, color:'#fafafa'}}>{this.props.name}</Text>
                        </View>
                        <View style={{flex: 1, justifyContent:'center', marginRight:'5%'}}>
                            <Image source={require('../../../../assets/img/share_icon.png')} style={{width:20, height:20, alignSelf:'flex-end', marginRight:'5%'}}/>
                        </View>
                    </View>

                    <View style={{flex:4, width:'100%', flexDirection: 'row', justifyContent:'space-between'}}>
                        <View style={{flex: 1, marginTop:'5%', marginLeft:'5%'}}>
                            <Text style={{fontSize: 15}}>Số dư khả dụng</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'column', marginTop: '5%', marginRight:'5%'}}>
                            <Text style={{alignSelf:'flex-end', fontSize: 15, color: '#042e98'}}>{this.props.money} VND</Text>
                            <Text style={{alignSelf:'flex-end', fontSize: 12, color: '#949494'}}>Số dư thực: {this.props.surplus} VND</Text>
                        </View>
                    </View>
                </View>
        )
    }
}

export default class TransferInfo extends React.Component {
    static navigationOptions = ({navigation}) => {
        const { params = {} } = navigation.state;
        let tabBarLabel = "Tiết kiệm";
        let tabBarIcon = ({ focused }) =>  (
            focused
            ? <Image source={require('../../../../assets/img/saving_onfocus_icon.png')} size={25}  />
            : <Image source={require('../../../../assets/img/saving_icon.png')} size={30}  /> 
         );
        return {tabBarLabel, tabBarIcon};
    }

    constructor() {
        super();
        this.state = {

        };
    }

    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={{flex: 1, flexDirection:'column'}}>
                {/* Header */}
                <View style={{flex: 1, alignItems: 'center', width:'100%', height:'100%', justifyContent: 'center',
                    backgroundColor: 'white', flexDirection:'row'}}>              
                        <Text style={{fontSize: 18}}>Tài khoản thanh toán</Text>

                </View>
                {/* Body */}
                <View style={{flex:13}}>
                    <Record flex="2" title="TGTT KHTN (CA NHAN) VND" name="1315171 - NGUYEN VAN A" surplus="123.000" money="0"/>
                    <View style={{flex: 2, flexDirection: 'row', backgroundColor:'#fafafa', marginTop:'2%'}}>
                        <TextIcon index="0" text="Chuyển tiền"/>
                        <TextIcon index="1" text="Tiết kiệm"/>
                        <TextIcon index="2" text="Thanh toán"/>
                    </View>
                    <View style={{flex: 1, backgroundColor:'white', marginTop: '2%', flexDirection: 'row'}}>
                            <View style={{flex: 2, flexDirection:'row', alignItems:'center'}}>
                                <Image source={require('../../../../assets/img/timer_icon.png')} 
                                    style={{width: 20, height:20, marginLeft:'5%'}}></Image>
                                <Text style={{paddingLeft:'2%'}}>Lịch sử giao dịch</Text>
                            </View>
                            <View style={{flex: 1, width: '100%', alignItems:'center', justifyContent:'center'}}>
                                <Text style={{color: '#5a92d8', paddingLeft: '5%',fontSize: 12}}>
                                    Xem tất cả ></Text>
                            </View>
                    </View>
                    <View style={{flex: 8, backgroundColor:'#fafafa'}}>
                        <View style={{ width: '90%', height: '25%', marginTop: '2%', marginLeft: '5%', borderRadius: 10, 
                        justifyContent: 'center', alignItems: 'center', backgroundColor: 'white',}}>
                            <Text>Không có giao dịch</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}