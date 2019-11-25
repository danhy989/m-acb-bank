
import React, {Component} from 'react';
import {Text, View, Image, Linking, TouchableNativeFeedback} from 'react-native';
import styles from './transferCss';
import LinearGradient from 'react-native-linear-gradient';
import ViewOverflow from 'react-native-view-overflow';
import {ConfirmDialog} from 'react-native-simple-dialogs';

class Record extends React.Component{
    render(){ 
        var image = [
            require('../../../assets/img/src_assets_transfers_ic_bank_blue_21_ic_bank_blue_21.png'),
            require('../../../assets/img/src_assets_transfers_ic_card_21_ic_card_21.png'),
            require('../../../assets/img/src_assets_transfers_ic_passport_16_ic_passport_16.png'),
        ]
        const {navigate} = this.props;
        return(
            <TouchableNativeFeedback onPress={()=>navigate(this.props.nameScreen)}>
                <View style={{flexDirection: 'row', alignSelf:'flex-start', width: '90%', height: 35,  borderBottomColor: '#f4f6f8', 
                            marginStart: '5%', borderBottomWidth: 1, marginTop: '5%'}}>
                        <Image source={image[this.props.stt]} style={{flex: 1, marginBottom: 5, width: 30, height: 30,resizeMode:'center'}}></Image>
                        <View style={{ flex: 8, flexDirection: 'row', justifyContent: 'flex-start', paddingStart: '5%'}}>
                            <Text style={{paddingTop: 5, paddingStart: 5, fontSize: 15}}>{this.props.content}</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                            <Text style={{paddingTop: 5, paddingRight: 5, fontSize: 15}}>></Text>
                        </View>
                </View>
            </TouchableNativeFeedback>
        );
    }
}
export default class TransferScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        const { params = {} } = navigation.state;
        let tabBarLabel = "Chuyển tiền";
        let tabBarIcon = ({ focused }) =>  (
            focused
            ? <Image source={require('../../../assets/img/transfer_onfocus_icon.png')} size={25} style={{marginBottom: 5}}/>
            : <Image source={require('../../../assets/img/transfer_icon.png')} size={30} style={{marginBottom: 5}} /> 
          );
        return {tabBarLabel, tabBarIcon};
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
                <View style={styles.header}>              
                    <Text>Chuyển tiền</Text>
                </View>
                <View style={styles.body_top}>
                    <LinearGradient colors={['#73acf7', '#82c0f9', '#90d3fb']} style={styles.gradient}
                         start= {{ x: 0, y: 0 }}
                         end= {{ x: 1, y: 0} }>
                        <Text style={{color:'white', paddingTop: 10, paddingStart: 10, fontSize: 15}}>Chuyển tiền đến</Text>
                    </LinearGradient>
                    
                    <View style={styles.body_content}>
                            <Record navigate={navigate} nameScreen="TKNH" content="Tài khoản ngân hàng" image='../../../assets/img/img/bank_icon.png' stt="0"></Record> 
                            <Record navigate={navigate} nameScreen="BankCard" content="Thẻ ngân hàng" image='../../../assets/img/atm_icon.png' stt="1"/>
                            <Record navigate={navigate} nameScreen="BankCard" content="CMND/ Hộ chiếu" image='../../../assets/img/cmnd_icon.png' stt="2"/>
                    </View>

                    <ViewOverflow style={{flex: 1}}>
                    </ViewOverflow>

                </View>

                <View style={styles.body_bottom}>
                    <View style={styles.bot_header}>
                        <View style={{ flex: 1, marginStart:'2%', flexDirection: 'row', justifyContent: 'flex-start'}}>
                            <Text style={{paddingTop: 5, paddingStart: 5, fontSize: 15}}>Danh sách người nhận</Text>
                        </View>

                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                            <Text style={{color: '#5a92d8', paddingTop: 5, paddingRight: 5, fontSize: 15}}
                                onPress={() => Linking.openURL('http://google.com')}>
                                Xem tất cả  >
                            </Text>
                        </View>
                    </View>

                    <View style={styles.body_content_bottom}>
                        <Text style={{padding:0}}>Không có dữ liệu</Text>
                    </View>
                </View>
            </View>   
          );
        }
}