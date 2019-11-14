import React, {Component} from 'react';
import {Text, View, Image, TextInput, ScrollView, TouchableOpacity, Dimensions} from 'react-native';
import Dialog, { DialogContent, DialogTitle } from 'react-native-popup-dialog';

class Record2 extends React.Component{
    render(){ 
        return(
            <View style={{flexDirection: 'row', alignSelf:'flex-start', width: '90%', height: 35,  borderBottomColor: '#f4f6f8', 
                           marginStart: '2%', marginEnd:'2%', borderBottomWidth: 1, marginTop:'2%', marginBottom: '2%'}}>
                <View style={{ flex: 9, flexDirection: 'row', justifyContent: 'flex-start',}}>
                    <TextInput placeholder={this.props.content}></TextInput>
                </View>
            </View>
        );
    }
}
export default class BankCard extends React.Component {
    constructor() {
        super();
        this.state = {
            text: '',
            showComponent: false,
            isOnline: null,
        };
        this.onIconClick = this.onIconClick.bind(this);
    }
    
    onIconClick() {
        if (this.state.text != '')
            this.setState({
                showComponent: true,
            });
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
           <View style={{flex: 1, flexDirection:'column', alignItems:'center', backgroundColor:'#f4f6f8'}}>              

            
                <Text style={{marginTop:'5%', fontSize: 16}}>Nhu cầu tiết kiệm của bạn là gì?</Text>
                <View style={{width:'90%', height:'40%', backgroundColor:'white', flexDirection:'column', 
                        marginTop: '5%', borderRadius: 10, alignItems:'center'}}>
                    <Text style={{color:'#1941A2', fontWeight:'bold', marginTop:'1%'}}>Gửi theo kỳ hạn lãi suất thấp</Text>
                    <View style={{flex: 1, flexDirection:'row', }}>
                        <Image source={require("../../../../assets/img/saving1.jpg")} 
                                style={{width: '100%', height:'100%'}}></Image>
                    </View>
                    <Text style={{fontSize:14, textAlign:'center', marginBottom:'1%'}}>Tiền gửi có kỳ hạn đa dạng, linh hoạt điều chỉnh ngày đáo hạn theo yêu cầu.</Text>
                </View>
                
                <Text style={{marginTop:'5%', fontSize: 16}}>Nhu cầu tiết kiệm của bạn là gì?</Text>
                <View style={{width:'90%', height:'40%', backgroundColor:'white', flexDirection:'column', 
                        marginTop: '5%', borderRadius: 10, alignItems:'center'}}>
                    <Text style={{color:'#1941A2', fontWeight:'bold', marginTop:'1%'}}>Gửi theo kỳ hạn lãi suất thấp</Text>
                    <View style={{flex: 1, flexDirection:'row', }}>
                        <Image source={require("../../../../assets/img/saving1.jpg")} 
                                style={{width: '100%', height:'100%'}}></Image>
                    </View>
                    <Text style={{fontSize:14, textAlign:'center', marginBottom:'1%'}}>Tiền gửi có kỳ hạn đa dạng, linh hoạt điều chỉnh ngày đáo hạn theo yêu cầu.</Text>
                </View>
                
                <Text style={{marginTop:'5%', fontSize: 16}}>Nhu cầu tiết kiệm của bạn là gì?</Text>
                <View style={{width:'90%', height:'40%', backgroundColor:'white', flexDirection:'column', 
                        marginTop: '5%', borderRadius: 10, alignItems:'center'}}>
                    <Text style={{color:'#1941A2', fontWeight:'bold', marginTop:'1%'}}>Gửi theo kỳ hạn lãi suất thấp</Text>
                    <View style={{flex: 1, flexDirection:'row', }}>
                        <Image source={require("../../../../assets/img/saving1.jpg")} 
                                style={{width: '100%', height:'100%'}}></Image>
                    </View>
                    <Text style={{fontSize:14, textAlign:'center', marginBottom:'1%'}}>Tiền gửi có kỳ hạn đa dạng, linh hoạt điều chỉnh ngày đáo hạn theo yêu cầu.</Text>
                </View>
                
            </View>
        );
    }
}