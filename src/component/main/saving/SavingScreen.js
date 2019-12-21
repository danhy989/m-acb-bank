import React, {Component} from 'react';
import {Text, View, Image, TouchableNativeFeedback, TouchableOpacity, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './savingCss';

class Record extends React.Component{
    render(){
        const {navigate} = this.props;
        return(
            <TouchableNativeFeedback onPress={() => navigate("Detail", {title: this.props.title, name: this.props.name,
                date: this.props.date, money: this.props.money, surplus: this.props.surplus, thang:this.props.thang, 
                laisuat:this.props.laisuat, sotien: this.props.tien, after:this.props.after, now:this.props.now})}>
                <View style={{width:'90%', height:'35%', borderRadius:5, backgroundColor:'white', 
                        flexDirection:'column', marginTop:'3%', marginStart:'2%', marginEnd:'2%', alignItems:'center'}}>
                        <View style={{flex:0.66, width:'100%', flexDirection:'column', borderBottomWidth:1, backgroundColor:'#43C267',
                            borderBottomColor:'#EDEDED', alignItems:'center', justifyContent:'center', borderTopEndRadius: 5, borderTopStartRadius:5}}>
                            <Text style={{paddingTop:'1%', color:'white', fontWeight:'bold', fontSize:17}}>{"KHTN " +this.props.thang+"THANG VND"}</Text>
                        </View>

                        <View style={{flex:1, width:'95%', flexDirection:'row', borderBottomWidth:1, borderBottomColor:'#EDEDED'}}>
                            <View style={{width:'50%', height:'90%', borderRightWidth:1, borderRightColor:'#EDEDED', marginTop:'2%'}}>
                                <Text style={{paddingTop:'1%', paddingLeft:'1%', color:'#676767', fontSize: 16}}>Số tiền gửi</Text>
                                <Text style={{paddingTop:'3%', color:'#377849', fontWeight:'bold', fontSize:16, alignSelf:'flex-end', paddingEnd: '5%'}}>{this.props.tien}</Text>
                            </View>
                            <View style={{width:'50%', marginTop:'2%', marginStart:'2%'}}>
                                <Text style={{paddingTop:'1%', paddingLeft:'1%', color:'#676767', fontSize: 16}}>Lãi suất</Text>
                                <Text style={{paddingTop:'3%', color:'#377849', fontWeight:'bold', fontSize:16, alignSelf:'flex-end', paddingEnd: '5%'}}>{this.props.laisuat+"%/tháng"}</Text>
                            </View>
                        </View>

                        <View style={{flex:1, width:'95%', flexDirection:'row', }}>
                            <View style={{width:'50%', borderRightWidth:1, borderRightColor:'#EDEDED', height:'80%', marginBottom:'3%'}}>
                                <Text style={{paddingTop:'3%', paddingLeft:'1%', color:'#676767', fontSize: 16}}>Bắt đầu</Text>
                                <Text style={{paddingTop:'3%', color:'#377849', fontWeight:'bold', fontSize:16, alignSelf:'flex-end', paddingEnd: '5%'}}>{this.props.now}</Text>
                            </View>
                            <View style={{width:'50%', marginTop:'2%', marginStart:'2%'}}>
                                <Text style={{paddingLeft:'1%', color:'#676767', fontSize: 16}}>Đáo hạn</Text>
                                <Text style={{paddingTop:'3%', color:'#377849', fontWeight:'bold', fontSize:16, alignSelf:'flex-end', paddingEnd: '5%'}}>{this.props.after}</Text>
                            </View>
                        </View>
                   </View>
            </TouchableNativeFeedback>
        )
    }
}

export default class SavingScreen extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
          <View style={styles.container}>
                <LinearGradient colors={['#76d28b', '#a4dc4a', '#d0e60e']} style={styles.gradient}
                            start= {{ x: 0, y: 0 }} end= {{ x: 1, y: 0} }>
                    <View style={{flex: 1}}>
                        <Text style={{color: 'white', paddingTop: '2%', paddingStart: '8%', fontSize: 17}}>Tổng số dư</Text>
                        <Text style={{color: 'white', paddingTop: '1%', paddingStart: '5%', fontSize: 18, fontWeight:'bold'}}>100.000 VND</Text>
                    </View>
                </LinearGradient>
              
                <View style={styles.body_bottom}>
                    <Record navigate={navigate} thang="12" tien="5000000 VND" laisuat="5" now="05/01/2019" after="05/01/2020" laisuat="5"></Record>
                    <Record navigate={navigate} thang="6" tien="2500000 VND" laisuat="5" now="01/05/2019" after="01/11/2019" laisuat="5"></Record>
                </View>
                <View style={{position:'absolute', alignSelf:'flex-end', right: 0, bottom: 0, marginRight: '2%',marginBottom: '2%'}}>
                    <TouchableOpacity style={{flex: 1, width:'100%'}}
                        onPress={() => navigate("CreateAccount")}>
                        <Image source={require('../../../assets/img/src_assets_ic_plus_ic_plus.png')}
                            style={{width: Dimensions.get('window').height/14, height: Dimensions.get('window').height/14}}>
                        </Image>
                    </TouchableOpacity>
                </View>
              
          </View>   
        );
    }
}