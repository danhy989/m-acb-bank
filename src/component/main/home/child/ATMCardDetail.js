import React, {Component} from 'react';
import {Text, View, Image, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../../transfer/transferCss';

class Record extends React.Component{
    render(){
        return(
                <View style={{width: '80%', height: '35%', marginTop: '2%', flexDirection:'column',
                    justifyContent: 'center', alignItems: 'center'}}>

                    <ImageBackground source={require('./../../../../assets/img/atm_card2.png')} 
                        style={{width: '100%', height:'100%', borderRadius: 15, overflow: 'hidden', }}>
                        <View style={{bottom: 0, marginLeft:'5%', marginBottom: '1%', position:'absolute', flexDirection:'column'}}>
                            <Text style={{color: 'white'}}>{this.props.stk}</Text>
                            <Text style={{color: 'white', fontWeight: 'bold'}}>{this.props.name}</Text>
                        </View>
                    </ImageBackground>
                </View>
        )
    }
}
class TextIcon extends React.Component{
    render(){
        var data = [
            {
                "text" : "Chuyển tiền",
                "src" : require('../../../../assets/img/lock_card.png'),
                "left": '0%',
                "right": '0%',
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
export default class ATMCardDetail extends React.Component {
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
                <View style={{flex:13, alignItems:'center', backgroundColor: '#f4f6f8'}}>
                    <Record skt="**** **** **** 1517" name="NGUYEN VAN A"/>
                    <View style={{flex: 4, backgroundColor:'#f4f6f8', marginTop:'5%'}}>
                        <TextIcon index="0" text="Khóa thẻ"/>
                    </View>
                    <View style={{flex: 2, backgroundColor:'white', marginTop: '5%', flexDirection: 'row'}}>
                            <View style={{flex: 2, flexDirection:'row', alignItems:'center'}}>
                                <Image source={require('../../../../assets/img/timer_icon.png')} 
                                    style={{width: 20, height:20, marginLeft:'5%'}}></Image>
                                <Text style={{paddingLeft:'2%'}}>Giao dịch 40 ngày gần nhất</Text>
                            </View>
                    </View>
                    <View style={{flex: 9, backgroundColor:'#f4f6f8', width:'100%'}}>
                        <View style={{ width: '90%', height: '35%', marginTop: '5%', marginLeft: '5%', borderRadius: 5, 
                        justifyContent: 'center', alignItems: 'center', backgroundColor: 'white',}}>
                            <Text style={{textAlign:'center'}}>Trong vòng 40 ngày gần nhất thẻ của Quý khách chưa phát sinh giao dịch</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}