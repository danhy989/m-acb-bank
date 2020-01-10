import React, {Component} from 'react';
import {Text, View, Image, TextInput, TouchableHighlight, TouchableOpacity, Dimensions, Button} from 'react-native';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import Metrics from '../../../../common/Metrics';
import { showMessage, hideMessage } from "react-native-flash-message";
import FlashMessage from "react-native-flash-message";
const RADIUS = Dimensions.get('window').width;

class Record extends React.Component{
    render(){ 
        return(
            <View style={{flexDirection: 'row', width: '95%', height: 25, alignItems:'center',
                    marginStart: '2%', marginTop:'0.5%', marginBottom:'1%'}}>
                <Text style={{width:'50%'}}>{this.props.field}</Text>
                <Text style={{width:'50%', textAlign:'right', color: '#143EA1', fontSize:15}}>{this.props.value}</Text>
            </View>
        );
    }
}
export default class ConfirmTransfer extends React.Component {
    
  static navigationOptions = {
    headerRight: (
      <View style={{marginRight: '5%',flex: 1, flexDirection:'row', alignItems:'center', justifyContent:'center', margin:'auto'}}>
          <Image source={require('./../../../../assets/img/timer_icon.png')} style={{height: 20, width: 20}}/>
      </View>
      )       
    }
    constructor(props) {
      super(props);
      this.state = {
          visible:false,
      };
    }

    handleClick = () => {
        this.setState({
            visible: true
        });
    }
    
    componentDidMount() {
        const { navigation } = this.props;
        this.setState({
            sotien: navigation.getParam('sotien'),
            cardNo: navigation.getParam('cardNo'),
            bankName: navigation.getParam('bankName'),
            date: navigation.getParam('date'),
            message: navigation.getParam('message'),

        })
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{flex:1}}> 
                <View style={{flex:0.8, backgroundColor: '#106EC3', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color:'white', fontWeight:'bold', fontSize:20}}>{this.state.sotien} VND</Text>
                    <Text style={{color:'white', fontWeight:'900'}}>Năm mươi nghìn đồng</Text>
                </View>
                    
                <View style={{flex: 1.5, backgroundColor: '#F5F6F8'}}>
                    <View style={{flex:0.4, flexDirection:'row', alignItems:'center', marginTop:'2%'}}>
                        <Image
                            source={require('../../../../assets/img/src_assets_confirm_sender_confirm_sender.png')}
                            style={{width: Metrics.screenWidth/20, height: Metrics.screenWidth/20, 
                                    marginTop: '2%', marginEnd: '2%', marginLeft:'4%'}}/>
                        <Text style={{marginTop:'1%'}}>Bên chuyển</Text> 
                    </View>
                    <View style={{flex:2, backgroundColor:'white', width:'94%', height:'100%', margin:'3%', 
                        borderRadius: 3, justifyContent:'space-around'}}>
                        <Text style={{marginLeft:'4%', marginTop:'3%'}}>NGUYEN VAN A</Text> 
                        <Text style={{marginLeft:'4%'}}>SINH VIEN KHTN (CN) VND</Text> 
                        <Text style={{marginLeft:'4%', marginBottom:'5%', color:'#143EA1', fontWeight:'bold'}}>22522323</Text> 
                    </View>
                </View> 

                <View style={{flex:3.5, backgroundColor:'red', backgroundColor:'#F5F6F8'}}>
                    <View style={{flex:0.5, flexDirection:'row'}}>
                        <Image
                            source={require('../../../../assets/img/src_assets_confirm_receiver_confirm_receiver.png')}
                            style={{width: Metrics.screenWidth/20, height: Metrics.screenWidth/20, 
                                marginTop: '2%', marginEnd: '2%', marginLeft:'4%'}}/>
                        <Text style={{marginTop:'2%'}}>Bên nhận</Text> 
                    </View>
                    <View style={{flex:2.5, backgroundColor:'white', marginTop:'1%', width:'94%', marginLeft:'3%',
                        justifyContent:'space-around', marginRight:'3%', marginTop:'3%', borderRadius:3}}>
                        <Record field="Tên người nhận" value="VU NGOC DUY ANH"></Record>
                        <Record field="Ngân hàng" value={this.state.bankName}></Record>
                        <Record field="Tài khoản nhận" value={this.state.cardNo}></Record>
                    </View>

                    <View style={{flex:2, backgroundColor:'white', marginTop:'2%',width:'94%',
                            marginLeft:'3%', marginRight:'3%', borderRadius:3, justifyContent:'space-around'}}>
                        <Record field="Thời gian" value={this.state.date}></Record>
                        <Record field="Phí giao dịch" value="0 VND"></Record>
                        <Record field="Người chịu phí" value="Bên chuyển"></Record>
                    </View>
                    <View style={{flex:1.6, backgroundColor:'white', marginTop:'2%', flexDirection:'column', 
                        width:'94%', marginLeft:'3%', marginRight:'3%', borderRadius:3}}>
                        <Text style={{color:'#646464', marginTop:'2%', marginLeft:'3%'}}>Nội dung</Text>
                        <Text style={{alignSelf:'flex-end', width:'75%',textAlign:'right',marginRight:'3%', 
                            paddingTop:'1%', fontSize:15, color:'#143EA1'}}>
                            {this.state.message}</Text>
                    </View>
                </View>  
                
                <View style={{flex: 0.6, alignItems:'center', justifyContent:'center', backgroundColor:'#f5f6f8',
                            width: '100%', borderRadius: 10}}>
                        <TouchableOpacity style={{ backgroundColor:'#21439C', width:'40%', height:'70%', justifyContent:'center', alignItems:'center', borderRadius:30}}
                            onPress={this.handleClick}>
                            {/* onPress={() => {this.setState({ visible: false, status: 1 });}}> */}
                            <Text style={{color:'white'}}>Xác nhận</Text>
                        </TouchableOpacity>
                </View> 

                <FlashMessage position="top" />
                <Dialog
                        visible={this.state.visible}
                        dialogTitle={<View style={{width: 0.9 * Dimensions.get('window').width,
                        height: Dimensions.get('window').height/4}}>
                            <View style={{flex: 1, justifyContent:'center', alignItems:'center', backgroundColor:'#f4f6f8'}}>
                                <Text>XÁC NHẬN CHUYỂN TIỀN</Text>
                            </View>
                            <View style={{flex: 4, flexDirection:'column'}}>
                                <View style={{flex: 4, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                    <Text style={{textAlign:'center', width:'75%', fontStyle:'italic', color:'#1c44a3', fontWeight:'bold', paddingTop:'2%'}}>Vui lòng nhập mật khẩu để xác nhận Khóa thẻ</Text>
                                    <TextInput secureTextEntry={true} style={{width:'50%', height: '50%', textAlign:'center', borderBottomColor: 'gray', borderBottomWidth: 1}} placeholder="*********" />
                                    {/* <Text style={{color:'#0D6CC2', fontWeight:'bold', paddingTop:'2%'}}>555.000</Text> */}
                                </View>
                                <View style={{flex: 1, alignItems:'center', justifyContent:'center',
                                        width: '100%', borderRadius: 10, marginTop:'2%'}}>
                                    <TouchableOpacity style={{ backgroundColor:'#21439C', width:'40%', height:'100%', justifyContent:'center', alignItems:'center', borderRadius:30}}
                                        onPress={() => {this.setState({ visible: false}), 
                                            showMessage({
                                                message: "Chuyển tiền thành công",
                                                type: "success",
                                                duration: 1850,
                                            });}}>
                                        <Text style={{color:'white'}}>Xác nhận</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>}    
                        onTouchOutside={() => {
                        this.setState({ visible: false });
                        }}>
                        <DialogContent>
                        </DialogContent>
                    </Dialog>
            </View>
        );
    }
}