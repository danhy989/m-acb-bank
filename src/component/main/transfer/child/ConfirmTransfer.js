import React, {Component} from 'react';
import {Text, View, Image, TextInput, TouchableHighlight, TouchableOpacity, Dimensions, Button} from 'react-native';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import Metrics from '../../../../common/Metrics';

const RADIUS = Dimensions.get('window').width;

class Item extends React.Component{
  
    render(){ 
        return(
            <View style={{flexDirection: 'row', width: '95%', height: 25, alignItems:'center',
                    marginStart: '2%', marginTop:'0.5%', marginBottom:'1%'}}>
                <View style={{flex: 5, flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <Text style={{fontSize:16, color:'#444444'}}>{this.props.title}</Text>
                </View>
                <View style={{flex: 5, flexDirection: 'row', justifyContent: 'flex-end', color:'#f4f6f8'}}>
                    <Text style={{fontSize:16, color:'#526BC7', fontWeight:'900'}}>{this.props.value}</Text>
                </View>
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
    render() {

        const {navigate} = this.props.navigation;
        return (
            <View style={{flex:1}}>
                <TouchableOpacity style={{flex: 0.8}}
                    onPress={() => {
                    this.setState({ visible: true });
                    }}>   
                <View style={{flex:1, height: 80, backgroundColor: 'white', flexDirection:'row'}}>
                    <View style={{width:'2%', backgroundColor:'#21439C'}}></View>
                    <View style={{flex: 10, flexDirection: 'column', alignItems:'flex-start', justifyContent:'center',
                                    marginStart: '2%'}}>
                        <View>
                            <Text>Tài khoản trích (VND)</Text>
                            <Text style={{paddingTop: '2%', color:'#21439C', fontSize:15, fontWeight:'bold'}}>555.000</Text>
                        </View>
                    </View>
                    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                        <Image source={require("../../../../assets/img/src_assets_ic_dropdown_ic_dropdown.png")} 
                            style={{width: 12, height:12}}></Image>
                    </View>
                </View>
                </TouchableOpacity>
                    
                <View style={{flex: 5, backgroundColor: '#f4f6f8'}}>
                    <Text style={{marginTop: '2%', marginStart: '2%'}}>Số tiền gửi</Text>
                    <View style={{flex: 1.25, width: '90%', height: '90%', borderRadius: 10, flexDirection:'column',
                            marginStart:'5%', marginEnd:'5%', marginTop:'2%', backgroundColor: 'white'}}>
                        <View style={{flexDirection: 'row', alignSelf:'flex-start', width: '95%', height: 35,  borderBottomColor: '#f4f6f8', 
                                marginStart: '2%',marginEnd:0, borderBottomWidth: 1, marginTop:'2%', marginBottom: '2%'}}>

                            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', marginTop:'5%', color:'#f4f6f8'}}>
                                <Text style={{fontSize:14, color:'#444444'}}>VND</Text>
                            </View>
                        </View>
                        <View style={{alignSelf:'flex-end', marginBottom:'2%'}}>
                            <Text style={{paddingRight:'2%', color:'gray', fontStyle:'italic'}}>Tối thiểu là 1.000.000 VND</Text>
                        </View>
                    </View>

                    <Text style={{marginTop: '2%', marginStart: '2%'}}>Thời gian tích lũy</Text>
                    <View style={{flex: 2.05, width: '90%', height: '90%', borderRadius: 10, alignItems: 'center', 
                           margin:'5%', marginTop:'2%',backgroundColor: 'white'}}>
                        <View style={{flex:0.5, width:'100%'}}>
                            <View style={{flex:1, flexDirection:'row', backgroundColor:'white', alignItems:'center'}}>
                                
                            </View>
                        </View>
                    </View>

                    <View style={{flex: 0.65, alignItems:'center', justifyContent:'center', backgroundColor:'#f5f6f8',
                            width: '100%', borderRadius: 10}}>
                        <TouchableOpacity style={{ backgroundColor:'#21439C', width:'40%', height:'70%', justifyContent:'center', alignItems:'center', borderRadius:30}}
                            onPress={this.handleClick}>
                            {/* onPress={() => {this.setState({ visible: false, status: 1 });}}> */}
                            <Text style={{color:'white'}}>Xác nhận</Text>
                        </TouchableOpacity>
                    </View>

                    <Dialog
                        visible={this.state.visible}
                        dialogTitle={<View style={{width: 0.9 * Dimensions.get('window').width,
                        height: Dimensions.get('window').height/5}}>
                            <View style={{flex: 2, justifyContent:'center', alignItems:'center', backgroundColor:'#f4f6f8'}}>
                                <Text>Lựa chọn tài khoản trích</Text>
                            </View>
                            <View style={{flex: 5, flexDirection:'row', justifyContent:'space-between'}}>
                                <View style={{flex: 4, flexDirection:'column', justifyContent:'center', 
                                        marginTop:'5%', marginLeft:'5%', }}>
                                    <Text style={{color:'#1c44a3', fontWeight:'bold', paddingTop:'2%'}}>22314524</Text>
                                    <Text style={{color:'#163FA1', paddingTop:'2%'}}>NGUYEN VAN A</Text>
                                    <Text style={{color:'#163FA1', paddingTop:'2%'}}>TGTT SINH VINH KHTN (CN) VND</Text>
                                    <Text style={{color:'#0D6CC2', fontWeight:'bold', paddingTop:'2%'}}>555.000</Text>
                                </View>
                                <View style={{flex: 1, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                    <Image source={require("../../../../assets/img/src_assets_ic_checked_checked.png")}
                                        style={{width:15, height:15}}>
                                    </Image>
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
            </View>
        );
    }
}