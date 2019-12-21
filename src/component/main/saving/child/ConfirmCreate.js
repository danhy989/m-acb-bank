import React, {Component} from 'react';
import Button from 'react-native-button';
import {Text, View, Image, TextInput, TouchableHighlight, TouchableOpacity, Dimensions, ImageBackground} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import Dialog, { DialogContent } from 'react-native-popup-dialog';

class Item extends React.Component{
    render(){
        return(
            <View style={{flex:1.25, flexDirection:'row', alignItems:'center'}}>
                <Text style={{width:'50%', paddingStart:'2%',  color:'#A0A0A0', fontSize: 16}}>{this.props.context}</Text>
                <Text style={{width:'50%', paddingEnd:'2%', color:'#22429C', textAlign:'right', fontSize: 16, fontWeight:'900'}}>{this.props.value}</Text>
            </View>
        )
    }
}

var radio=[
    {label:"Gửi cả Vốn và Lãi sang kỳ hạn mới", value:0},
    {label:"Gửi cả Vốn sang kỳ hạn mới, nhận Lãi", value:1},
    {label:"Tất toán, nhận cả Vốn lẫn Lãi", value:2},
]

export default class ConfirmCreate extends React.Component {
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
            sotien:0,
            laisuat:0,
            thang:0,
        };
    }
    
    getToday(){
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        return today = dd + '/' + mm + '/' + yyyy;
    }

    calcuteTime(month){
        var today = new Date();
        after = new Date(today.setMonth(today.getMonth()+month));
        var dd = String(after.getDate()).padStart(2, '0');
        var mm = String(after.getMonth() + 1).padStart(2, '0'); 
        var yyyy = after.getFullYear();

        return after = dd + '/' + mm + '/' + yyyy;
    }

    componentDidMount() {
        const { navigation } = this.props;
        this.setState({
            sotien: navigation.getParam('sotien'),
            laisuat: navigation.getParam('laisuat'),
            thang: navigation.getParam('thang'),
            now: this.getToday(),
            after: this.calcuteTime(this.state.thang),
        })
    }


    handleClick = () => {
        this.setState({
            visible: true
        });
    }

    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={{flex: 1, flexDirection:'column'}}>
                <View style={{flex:3, backgroundColor:'#f5f6f8', flexDirection:'column', alignItems:'center', }}>
                   <View style={{width:'90%', height:'95%', borderRadius:5, backgroundColor:'white', 
                        flexDirection:'column', marginTop:'3%', marginStart:'2%', marginEnd:'2%', alignItems:'center'}}>
                        <View style={{flex:1, width:'95%', flexDirection:'column', borderBottomWidth:1, borderBottomColor:'#EDEDED'}}>
                            <View>
                                <Text style={{paddingTop:'2%', color:'#676767', fontSize:16}}>Tên tiền gửi</Text>
                                <Text style={{paddingTop:'1%', color:'#22429C', fontWeight:'bold', fontSize:17}}>{"KHTN " +this.state.thang+"T VND"}</Text>
                            </View>
                        </View>

                        <View style={{flex:1, width:'95%', flexDirection:'row', borderBottomWidth:1, borderBottomColor:'#EDEDED'}}>
                            <View style={{width:'50%', height:'90%', borderRightWidth:1, borderRightColor:'#EDEDED', marginTop:'2%'}}>
                                <Text style={{paddingTop:'1%', paddingLeft:'1%', color:'#676767', fontSize: 17}}>Kỳ hạn</Text>
                                <Text style={{paddingTop:'3%', color:'#22429C', fontWeight:'bold', fontSize:17, alignSelf:'flex-end', paddingEnd: '5%'}}>{this.state.thang + " tháng"}</Text>
                            </View>
                            <View style={{width:'50%', marginTop:'2%', marginStart:'2%'}}>
                                <Text style={{paddingTop:'1%', paddingLeft:'1%', color:'#676767', fontSize: 17}}>Lãi suất</Text>
                                <Text style={{paddingTop:'3%', color:'#22429C', fontWeight:'bold', fontSize:17, alignSelf:'flex-end', paddingEnd: '5%'}}>{this.state.laisuat+"%/tháng"}</Text>
                            </View>
                        </View>

                        <View style={{flex:1, width:'95%', flexDirection:'row', marginBottom:'2%'}}>
                            <View style={{width:'50%', borderRightWidth:1, borderRightColor:'#EDEDED', height:'80%', marginBottom:'3%'}}>
                                <Text style={{paddingTop:'3%', paddingLeft:'1%', color:'#676767', fontSize: 17}}>Bắt đầu</Text>
                                <Text style={{paddingTop:'3%', color:'#22429C', fontWeight:'bold', fontSize:17, alignSelf:'flex-end', paddingEnd: '5%'}}>{this.state.now}</Text>
                            </View>
                            <View style={{width:'50%', marginTop:'2%', marginStart:'2%'}}>
                                <Text style={{paddingLeft:'1%', color:'#676767', fontSize: 17}}>Đáo hạn</Text>
                                <Text style={{paddingTop:'3%', color:'#22429C', fontWeight:'bold', fontSize:17, alignSelf:'flex-end', paddingEnd: '5%'}}>{this.state.after}</Text>
                            </View>
                        </View>
                   </View>
                </View>

                <View style={{flex:2.25, backgroundColor:'#f5f6f8', flexDirection:'column', alignItems:'center'}}>
                    <View style={{width:'90%', marginTop:'3%', height:'90%', borderRadius:10, backgroundColor:'white',
                        flexDirection:'column', marginStart:'2%', marginEnd:'2%'}}>
                            <View style={{flex:1.35, flexDirection:'column', borderBottomWidth:1, borderBottomColor:'#EDEDED',paddingBottom:'2%'}}>
                                <Item context="Tiền gửi ban đầu" value={this.state.sotien + " VND"}></Item>
                                <Item context="Tiền lãi dự kiến" value={parseFloat(this.state.sotien) * this.state.thang*parseFloat(this.state.laisuat)/100 + " VND"}></Item>
                            </View>

                            <View style={{flex:0.85, marginTop:'3%', flexDirection:'row'}}>
                                <Text style={{width:'50%', paddingStart:'2%', color:'#A0A0A0', fontSize: 17}}>Tiền nhận dự kiến</Text>
                                <Text style={{width:'50%', paddingEnd:'2%', color:'#22429C', textAlign:'right', fontSize: 17, fontWeight:'bold'}}>{parseFloat(this.state.sotien) + this.state.thang*(parseFloat(this.state.sotien)*(this.state.laisuat/100)) + " VND"}</Text>
                            </View>
                    </View>
                </View>
                
                <View style={{flex:2.5, backgroundColor:'#f5f6f8', flexDirection:'column', alignItems:'center'}}>
                    <View style={{flex:0.5, marginTop:'3%', marginStart:'5%', alignSelf:'flex-start'}}>
                        <Text style={{alignSelf:'flex-start'}}>Xử lý khi đáo hạn</Text>
                    </View>
                    <View style={{flex:4, width:'90%', height:'95%', borderRadius:10, backgroundColor:'white', justifyContent:'center',
                         flexDirection:'column',marginStart:'2%', marginEnd:'2%', marginTop:'3%', paddingStart:'3%', paddingBottom:'5%'}}
                         >
                        {this.state.visible?null:
                        <RadioForm
                            radio_props={radio}
                            onPress={(value) =>{}}
                            buttonSize={10}
                            buttonOuterSize={20}
                            borderWidth={0.1}
                            buttonInnerColor={'#A0A0A0'}
                            animation={true}
                        />
                        }
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
                        height: Dimensions.get('window').height/4}}>
                            <View style={{flex: 1, justifyContent:'center', alignItems:'center', backgroundColor:'#f4f6f8'}}>
                                <Text>XÁC NHẬN MỞ TÀI KHOẢN</Text>
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
                                        onPress={() => {this.setState({ visible: false});}}>
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
        )
    }
}