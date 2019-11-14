import React, {Component} from 'react';
import {Text, View, Image, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../../transfer/transferCss';

class Record extends React.Component{
    render(){
        return(
                <View style={{width: '80%', height: '35%', marginTop: '2%', flexDirection:'column',
                    justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>

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
export default class ATMCard extends React.Component {
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
                <View style={{flex:13, alignItems: 'center'}}>
                        <Record stk="**** **** **** 1517" name="NGUYEN VAN A"/>
                        <Record stk="**** **** **** 2019" name="NGUYEN VAN B"/>
                </View>
            </View>
        )
    }
}