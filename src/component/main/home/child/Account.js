import React, {Component} from 'react';
import {Text, View, Image, TouchableNativeFeedback} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class Record extends React.Component{
    render(){
        const {navigate} = this.props;
        return(
            <TouchableNativeFeedback onPress={() => navigate("Detail", 
                    {title: this.props.title, name: this.props.name, date: this.props.date, money: this.props.money, surplus: this.props.surplus})}>
                <View style={{width: '90%',height: '35%', marginTop: '2%', marginLeft: '5%',borderRadius: 10, flexDirection:'column',
                    justifyContent: 'center',alignItems: 'center',backgroundColor: 'white'}}>

                    <View style={{flex:3, width:'100%', justifyContent:'center'}}>
                        <Text style={{marginLeft: '5%'}}>{this.props.title}</Text>
                    </View>

                   
                    <View style={{flex:3, backgroundColor: '#106ec3', width:'100%', justifyContent:'space-between', 
                        flexDirection:'row'}}> 
                        <View style={{flex: 3, marginLeft:'5%', justifyContent:'center'}}>
                            <Text style={{fontSize: 15, fontWeight:"bold", color:'#fafafa'}}>{this.props.name}</Text>
                        </View>
                        <View style={{flex: 2, marginRight:'2%', justifyContent:'center'}}>
                            <Text style={{fontSize: 15, fontWeight:'bold', color:'#fafafa', alignSelf:'flex-end'}}>{this.props.date}</Text>
                        </View>
                            {/* <Image source={require('./../../../../assets/img/share_icon.png')} style={{width:20, height:20, alignSelf:'flex-end', marginRight:'5%'}}/> */}
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
            </TouchableNativeFeedback>
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
        const {navigate} = this.props.navigation;
        return(
            <View style={{flex: 1, flexDirection:'column'}}>
                <View style={{flex:13}}>
                    <View style={{flex:1}}>
                        <LinearGradient colors={['#1847a6', '#0d7cce', '#03aff3']} style={{flex:1, flexDirection:'row', 
                                    alignItems:'center', justifyContent:'space-between'}} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                                <View style={{flex:1}}>
                                    <Text style={{color: 'white', marginStart: 15, fontSize: 17, fontWeight: "900"}}>Tổng số dư</Text>
                                    <Text style={{color: 'white',paddingStart: 25, fontSize: 17, fontWeight: "bold"}}>1.123.000 VND</Text>
                                </View>
                        </LinearGradient>
                    </View>

                    <View style={{flex:7, backgroundColor:'#f5f6f8'}}>
                            <Record navigate={navigate} title="1315171 - KHTN (CA NHAN) VND" name="NGUYEN VAN A" surplus="123.000" money="83.000" date="12/01/2018"/>
                            <Record navigate={navigate} title="2426282 - SINH VIEN KHTN (CN) VND" name="NGUYEN VAN A" surplus="1.000.000" money="950.000" date="01/05/2019"/>
                    </View>
                </View>
            </View>
        )
    }
}