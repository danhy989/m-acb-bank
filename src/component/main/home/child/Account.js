import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class Record extends React.Component{
    render(){
        return(
                <View style={{width: '90%',height: '35%', marginTop: '2%', marginLeft: '5%',borderRadius: 10, flexDirection:'column',
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
                            <Image source={require('./../../../../assets/img/share_icon.png')} style={{width:20, height:20, alignSelf:'flex-end', marginRight:'5%'}}/>
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
export default class Account extends React.Component {
    static navigationOptions = {
        headerRight: (
        <View style={{marginRight: '5%',flex: 1, flexDirection:'row', alignItems:'center', justifyContent:'center', margin:'auto'}}>
            <Image source={require('./../../../../assets/img/timer_icon.png')} style={{height: 20, width: 20}}/>
        </View>
        )       
    }

    constructor() {
        super();
        this.state = {

        };
      }

    render(){
        // const {navigate} = this.props.navigation;
        return(
            <View style={{flex: 1, flexDirection:'column'}}>
                {/* Header */}
                {/* <View style={{flex: 1, alignItems: 'center', width:'100%', height:'100%', justifyContent: 'center',
                    backgroundColor: 'white', flexDirection:'row'}}>
                    <View style={{flex: 1}}>

                    </View>

                    <View style={{flex:3, flexDirection:'row', alignItems:'center', justifyContent:'center', margin:'auto'}}>
                        <Text style={{fontSize: 18}}>Tài khoản thanh toán</Text>
                    </View>
                    
                    <View style={{flex: 1, flexDirection:'row', alignItems:'center', justifyContent:'center', margin:'auto'}}>
                        <Image source={require('./../../../../assets/img/timer_icon.png')} style={{height: 20, width: 20}}/>
                    </View>
                </View> */}
                {/* Body */}
                <View style={{flex:13}}>
                    <View style={{flex:1}}>
                    <LinearGradient colors={['#1847a6', '#0d7cce', '#03aff3']} style={{flex:1, flexDirection:'row', 
                                alignItems:'center', justifyContent:'space-between'}} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                            <View style={{flex:1}}>
                                <Text style={{color: 'white', marginStart: 15}}>Tổng số dư</Text>
                                <Text style={{color: 'white',paddingStart: 25, fontSize: 15}}>0 VND</Text>
                            </View>

                            <View style={{flex:1, alignItems:'center', margin: 0, borderColor: 'white'}}>
                                <View style={{height:'40%', width: '50%',backgroundColor:'#0c66b7', alignSelf:'flex-end', borderTopStartRadius: 15, borderBottomStartRadius: 15, 
                                        flexDirection:'row', alignItems:'center', borderWidth:1, borderColor: 'white', justifyContent:'center'}}>                                   
                                    <Text style={{fontSize: 12, color: 'white'}}>Bộ lọc</Text>
                                    <Image source={require('./../../../../assets/img/filter_icon.png')} style={{height: 15, width: 15, marginStart:10}}/>
                                </View>
                            </View>
                    </LinearGradient>
                    </View>

                    <View style={{flex:7}}>
                        <Record title="TGTT KHTN (CA NHAN) VND" name="1315171 - NGUYEN VAN A" surplus="123.000" money="0"/>
                        <Record title="TGTT SINH VIEN KHTN (CN) VND" name="2426282 - NGUYEN VAN A" surplus="555.000" money="100.000"/>
                    </View>
                </View>
            </View>
        )
    }
}