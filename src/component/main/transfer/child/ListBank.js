import React, {Component} from 'react';
import {Text, View, Image, TextInput, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class Record extends React.Component{
    render(){ 
        var name=[
            [   
                "ACB - NH TMCP A CHAU",
                "ABBANK - NHTMCP AN BINH",
                "AGRIBANK - NH NONG NGHIEP VA PHAT TRIEN NONG THON"
            ],
            [
                "BIDV - NH TMCP DAU TU VA PHAT TRIEN VN",
                "BANGKOK BANK",
                "BANK OF CHINA",
                "BANK OF INDIA",
                "BVB - NH TMCP BAO VIET",
            ],
            [ 
                "CIMB - NH TNHH MTV CIMB",
                "CITI BANK",
            ]
        ]
        var image = [    
            [
                require('../../../../assets/img/timer_icon.png'),
                require('../../../../assets/img/atm_icon.png'),
                require('../../../../assets/img/cmnd_icon.png'),
            ],
            [
                require('../../../../assets/img/timer_icon.png'),
                require('../../../../assets/img/atm_icon.png'),
                require('../../../../assets/img/cmnd_icon.png'),
                require('../../../../assets/img/timer_icon.png'),
                require('../../../../assets/img/atm_icon.png'),
            ],
            [
                require('../../../../assets/img/timer_icon.png'),
                require('../../../../assets/img/atm_icon.png'),
                require('../../../../assets/img/cmnd_icon.png'),
            ],

        ]

        return(
            <View style={{flexDirection: 'row', alignSelf:'flex-start', width: '90%', height: 38,  borderBottomColor: '#f4f6f8', 
                           marginStart: '5%', marginTop: '5%'}}>
                <Image source={image[this.props.stt][this.props.index]} style={{flex: 1, marginBottom: 5, width: 25, height: 25}}></Image>
                <View style={{ flex: 8, flexDirection: 'row', justifyContent: 'flex-start', alignItems:'flex-start', paddingStart: '5%'}}>
                    <Text style={{ paddingStart: 5, fontSize: 13}}>{name[this.props.stt][this.props.index]}</Text>
                </View>
                <Image source={require('../../../../assets/img/src_assets_ic_transfer_fast_ic_transfer_fast.png')} 
                    style={{flex: 1, resizeMode:'center', marginBottom: 5, width: 15, height: 15}}></Image>
            </View>
        );
    }
}

class Cateloy extends React.Component{
    render(){
        return(
            <View style={{margin: '3%'}}>
                <Text>{this.props.catelogy}</Text>
                <View style={{flexDirection: 'column', marginTop: '2%', width: '100%', alignSelf:'center',
                    backgroundColor: 'white', borderRadius: 10}}>
                    <Record stt={this.props.stt} index="0"></Record>
                    <Record stt={this.props.stt} index="1"></Record>
                    <Record stt={this.props.stt} index="2"></Record>                
                </View>

           </View>
        )
    }
}

export default class ListBank extends React.Component {
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
          <View style={{flex: 1, flexDirection: 'column',}}>
              <View style={{flex: 1, backgroundColor: 'blue',}}>
                  <LinearGradient colors={['#6fadfc', '#7fc1fd', '#8ed5ff']} 
                  style={{flex: 1, flexDirection: 'column', alignItems:'center', justifyContent:'center'}}
                       start= {{ x: 0, y: 0 }}
                       end= {{ x: 1, y: 0} }>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent:'flex-start', alignItems: 'center',
                            width: '90%', height: '100%', backgroundColor:'white', marginTop: '2%', borderRadius: 10}}>
                            <Image source={require('../../../../assets/img/src_assets_ic_transfer_fast_ic_transfer_fast.png')} 
                                style={{ marginStart: '3%',paddingTop:0, width: 15, height: 15}}></Image>
                            <TextInput placeholder="Tìm ngân hàng"
                            secureTextEntry></TextInput>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent:'center'}}>
                            <Image source={require('../../../../assets/img/src_assets_ic_transfer_fast_ic_transfer_fast.png')} 
                                style={{width: 15, height: 15}}></Image>
                            <Text style={{fontSize:13, color:'white'}}> Hỗ trợ chuyển tiền nhanh</Text>
                        </View>
                  </LinearGradient>
              </View>
              
              <View style={{flex: 5, backgroundColor: '#f4f6f8'}}>
                <ScrollView style={{flexDirection:'column'}}
                   >
                    {/* <View style={{margin: '3%'}}>
                            <Text>A</Text>
                        <View style={{flexDirection: 'column', marginTop: '2%', width: '100%', alignSelf:'center',
                          backgroundColor: 'white', borderRadius: 10}}>
                          <Record stt="0"></Record>
                          <Record stt="1"></Record>
                          <Record stt="2"></Record>                
                    </View>

                    </View> */}
                    <Cateloy catelogy="A" stt="0"></Cateloy>
                    <Cateloy catelogy="B" stt="1"></Cateloy>
                    <Cateloy catelogy="C" stt="2"></Cateloy>
                </ScrollView>
                </View>
          </View>   
        );
    }
}