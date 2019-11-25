import React, {Component} from 'react';
import {Text, View, Image, TouchableNativeFeedback, TouchableOpacity, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './savingCss';

class Record extends React.Component{
    render(){
        const {navigate} = this.props;
        return(
            <TouchableNativeFeedback onPress={() => navigate("Detail", 
                    {title: this.props.title, name: this.props.name, date: this.props.date, money: this.props.money, surplus: this.props.surplus})}>
                <View style={{width: '90%',height: '40%', marginTop: '4%',borderRadius: 10, flexDirection:'column',
                    justifyContent: 'center',alignItems: 'center',backgroundColor: 'white'}}>

                    {/* <View style={{flex:1, width:'100%', justifyContent:'center', backgroundColor:'#43C267', borderTopLeftRadius:10, borderTopRightRadius:10}}>
                        <Text style={{marginLeft: '5%'}}>{this.props.title}</Text>
                    </View> */}

                
                        <View style={{flex:1, width:'100%', flexDirection:'column', backgroundColor:'#43C267', borderTopLeftRadius:10, 
                            borderTopRightRadius:10, borderBottomWidth:1, borderBottomColor:'#EDEDED'}}>
                            <View>
                                <Text style={{paddingTop:'2%', color:'#676767'}}>Tên tiền gửi</Text>
                                <Text style={{paddingTop:'1%', color:'#22429C', fontWeight:'bold', fontSize:17}}>{"KHTN T VND"}</Text>
                            </View>
                        </View>

                        <View style={{flex:1.25, width:'95%', flexDirection:'row', borderBottomWidth:1, borderBottomColor:'#EDEDED'}}>
                            <View style={{width:'50%', height:'90%', borderRightWidth:1, borderRightColor:'#EDEDED', marginTop:'2%'}}>
                                <Text style={{color:'#676767'}}>Kỳ hạn</Text>
                                <Text style={{paddingTop:'1%', color:'#22429C', fontWeight:'bold', fontSize:17}}>{" tháng"}</Text>
                            </View>
                            <View style={{width:'50%', marginTop:'2%', marginStart:'2%'}}>
                                <Text style={{color:'#676767'}}>Lãi suất</Text>
                                <Text style={{paddingTop:'1%', color:'#22429C', fontWeight:'bold', fontSize:17}}>{"%/tháng"}</Text>
                            </View>
                        </View>

                        <View style={{flex:1.25, width:'95%', flexDirection:'row', marginBottom:'2%'}}>
                            <View style={{width:'50%', borderRightWidth:1, borderRightColor:'#EDEDED', height:'80%', marginBottom:'3%'}}>
                                <Text style={{paddingTop:'3%', color:'#676767'}}>Bắt đầu</Text>
                                <Text style={{paddingTop:'1%', color:'#22429C', fontWeight:'bold', fontSize:17}}></Text>
                            </View>
                            <View style={{width:'50%', marginTop:'2%', marginStart:'2%'}}>
                                <Text style={{color:'#676767'}}>Đáo hạn</Text>
                                <Text style={{paddingTop:'1%', color:'#22429C', fontWeight:'bold', fontSize:17}}></Text>
                            </View>
                        </View>
                </View>
            </TouchableNativeFeedback>
        )
    }
}

export default class SavingScreen extends React.Component {
    static navigationOptions = ({navigation}) => {

    }

    constructor() {
        super();
        this.state = {

        };
    }
    render() {
        const {navigate} = this.props.navigation;
        return (
          <View style={styles.container}>
                <LinearGradient colors={['#76d28b', '#a4dc4a', '#d0e60e']} style={styles.gradient}
                            start= {{ x: 0, y: 0 }} end= {{ x: 1, y: 0} }>
                    <View style={{flex: 1}}>
                        <Text style={{color: 'white', paddingTop: '2%', paddingStart: '8%'}}>Tổng số dư</Text>
                        <Text style={{color: 'white', paddingTop: '1%', paddingStart: '4%', fontSize: 25}}>100.000 VND</Text>
                    </View>
                </LinearGradient>
              
                <View style={styles.body_bottom}>
                {/* <View style={{flex: 1, backgroundColor:'#fafafa'}}>
                    <View style={{ width: '90%', height: '25%', marginTop: '2%', marginLeft: '5%', borderRadius: 10, 
                    justifyContent: 'center', alignItems: 'center', backgroundColor: 'white',}}>
                        <Text style={{fontSize: 12}}>Quý khách chưa tạo tài khoản tiết kiệm.</Text>
                        <Text style={{color: '#5a92d8', paddingLeft: '5%', paddingTop: '5%', fontSize: 12}}>
                                    Tạo tài khoản ></Text>
                    </View>
                </View>
                 */}
                    <Record navigate={navigate}></Record>
                    <Record navigate={navigate}></Record>

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