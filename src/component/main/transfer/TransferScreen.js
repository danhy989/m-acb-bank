
import React, {Component} from 'react';
import {Text, View, Image, Linking, TouchableNativeFeedback, ScrollView} from 'react-native';
import styles from './transferCss';
import LinearGradient from 'react-native-linear-gradient';
import ViewOverflow from 'react-native-view-overflow';
import Metrics from '../../../common/Metrics';

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
                            marginStart: '5%', borderBottomWidth:this.props.stt==2 ? 0:1, marginTop: '5%'}}>
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

class HumanListRecord extends Component{
    render(){
        const {navigate} = this.props;
        return(
            <TouchableNativeFeedback onPress={()=>navigate('TKNH',{
                fullName:this.props.fullName,
                bankName:this.props.bankName,
                cardNo:this.props.cardNo
            })}>
                <View style={{flexDirection:'row',height:'18%',width:Metrics.screenWidth-(Metrics.PADDING_HORIZONTAL*2)}}>
                <View style={{flex:1,justifyContent:'center'}}>
                    <View style={{backgroundColor:'#3396D8',width:40,height:40,borderRadius:50,alignSelf:'center',justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'#FFF'}}>{this.props.shortName}</Text>
                    </View>
                </View>
                <View style={{flex:4,paddingVertical:'5%',paddingHorizontal:'5%'}}>
                    <Text style={{color:'#7E94C9',fontWeight:'bold'}}>{this.props.fullName}</Text>
                    <View style={{flexDirection:'row',marginVertical:'1%'}}>
                        <Image source={require('../../../assets/img/src_assets_transfers_ic_bank_blue_21_ic_bank_blue_21.png')} style={{resizeMode:'center',height:'70%',width:'5%'}}></Image>
                        <Text style={{marginLeft:'5%'}}>{this.props.cardNo}</Text>
                    </View>
                    <Text style={{color:'#939393'}}>{this.props.bankName}</Text>
                </View>
            </View>
            </TouchableNativeFeedback>
        );
    }
}

export default class TransferScreen extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
          return (
            <View style={styles.container}>
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
                                onPress={() => {}}>
                                Xem tất cả  >
                            </Text>
                        </View>
                    </View>
                    <View style={styles.body_content_bottom}>
                        <ScrollView>
                            <HumanListRecord navigate={navigate} shortName="DA" fullName="VU NGOC DUY ANH" cardNo="22091998" bankName="ACB - NH TMCP A CHAU"/>
                            <HumanListRecord navigate={navigate} shortName="AD" fullName="VU NGOC ANH DUY" cardNo="14022019" bankName="Đông Á Bank - NH Đông Á"/>
                            <HumanListRecord navigate={navigate} shortName="ND" fullName="VU ANH NGOC DUY" cardNo="24213222" bankName="Đông Á Bank - NH Đông Á"/>
                            <HumanListRecord navigate={navigate} shortName="DA" fullName="NGOC VU DUY ANH" cardNo="14215255" bankName="ACB - NH TMCP A CHAU"/>
                            <HumanListRecord navigate={navigate} shortName="ND" fullName="ANH VU NGOC DUY" cardNo="12787533" bankName="ACB - NH TMCP A CHAU"/>
                        </ScrollView>
                    </View>
                </View>
            </View>   
          );
        }
}