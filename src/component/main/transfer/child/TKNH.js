import React, {Component} from 'react';
import {Text, View, Image, TextInput, ScrollView, TouchableOpacity, Dimensions} from 'react-native';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
class Record extends React.Component{
    render(){ 
        return(
            <View style={{flexDirection: 'row', alignSelf:'flex-start', width: '90%', height: 35,  borderBottomColor: '#f4f6f8', 
                marginStart: '2%',marginEnd:0, borderBottomWidth: 1, marginTop:'2%', marginBottom: '2%'}}>
                <View style={{ flex: 9, flexDirection: 'row', justifyContent: 'flex-start',}}>
                    <TextInput placeholder={this.props.content}></TextInput>
                </View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', marginTop:'2%', marginBottom: '2%'}}>
                    <Image source={require("../../../../assets/img/src_assets_ic_hambuger_dark_ic_hambuger_dark.png")}
                    style={{width: 15, height: 15, marginTop: '3%'}}></Image>
                </View>
            </View>
        );
    }
}

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
export default class TKNH extends React.Component {
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
            <ScrollView style={{ flexDirection: 'column'}}
                    // contentContainerStyle={{flexGrow: 1}}
                    // horizontal={false}
                    >
                <TouchableOpacity style={{flex: 1}}
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
                    <View style={{flex: 1, flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={{marginTop: '2%', marginStart: '2%'}}>Thông tin người nhận</Text>
                        <Image source={require("../../../../assets/img/src_assets_ic_contact_list_ic_contact_list.png")}
                            style={{width:15, height:15, marginTop: '2%', marginEnd: '5%'}}></Image>
                    </View>
                    <View style={{flex: 1, width: '90%', height: '90%', borderRadius: 10, alignItems: 'center', 
                           margin:'5%', marginTop:'2%', marginBottom:'2%', backgroundColor: 'white'}}>
                        <Record content="Ngân hàng"></Record>
                        <Record2 content="Số tài khoản nhận"></Record2>
                    </View>
                    <Text style={{marginTop: '2%', marginStart: '2%'}}>Thời gian chuyển tiền</Text>
                    <View style={{flex: 1, width: '90%', height: '90%', borderRadius: 10, alignItems: 'center', 
                           margin:'5%', marginTop:'2%', marginBottom:'2%', backgroundColor: 'white'}}>
                        <Record content="Chuyển ngay"></Record>
                    </View>
                    <Text style={{marginTop: '2%', marginStart: '2%'}}>Số tiền</Text>
                    <View style={{flex: 1, width: '90%', height: '90%', borderRadius: 10, alignItems: 'center', 
                           margin:'5%', marginTop:'2%', marginBottom:'2%', backgroundColor: 'white'}}>
                        <View style={{flexDirection: 'row', alignSelf:'flex-start', width: '90%', height: 35,  borderBottomColor: '#f4f6f8', 
                           marginStart: '2%', marginEnd:'2%', borderBottomWidth: 1, marginTop: '2%'}}>
                            <View style={{ flex: 9, flexDirection: 'row', justifyContent: 'flex-start',}}>
                            <TextInput placeholder="Số tiền"></TextInput>
                                </View>
                            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                                <Text style={{marginTop: '2%'}}>VND</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flex: 1, width: '90%', height: '90%', borderRadius: 10, alignItems: 'center', 
                               margin:'5%', marginTop:'2%', marginBottom:'2%', backgroundColor: 'white'}}>
                            <Record2 content="Nội dung (không dấu)"></Record2>
                            <Record2 content="Số tham chiếu (tùy chọn)"></Record2>
                    </View>

                    <View style={{flex: 1, width: '100%', height: 50, borderRadius: 10, alignItems: 'center', 
                              justifyContent:'center',}}>
                            <TouchableOpacity style={{ backgroundColor:'#21439C', width:'40%', height:'80%', justifyContent:'center', alignItems:'center', borderRadius:30}}>
                                <Text style={{color:'white'}}>Tiếp tục</Text>
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
            </ScrollView>
        );
    }
}