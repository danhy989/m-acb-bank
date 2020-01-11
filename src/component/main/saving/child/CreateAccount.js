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
export default class CreateAccount extends React.Component {
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
            sotien:0,
            laisuat:5,
            thang:1,

            oldIndex: -1,
            newIndex: -1,
            showMonth:true,
            month:-1,
            active:[true,true,true],
            mValue:[1,2,3,4,5,6,],
            mValue2:[7,8,9,10,11,12,],
            mValue3:[12,24,37],
            mBackground:[true, true, true, true, true, true, true, true, true, true, true, true],
            mBackground3:[true, true, true],

        };
    }

    changeBackgroud = (index, item) => {
        this.state.mBackground[index]=true;
        // this.setState({
        //     thang: item,
        // });
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
                    <View style={{flex: 1.2, width: '90%', height: '90%', borderRadius: 10, flexDirection:'column',
                            marginStart:'5%', marginEnd:'5%', marginTop:'2%', backgroundColor: 'white'}}>
                        <View style={{flexDirection: 'row', alignSelf:'flex-start', width: '95%', height: 35,  borderBottomColor: '#f4f6f8', 
                                marginStart: '2%',marginEnd:0, borderBottomWidth: 1, marginTop:'2%', marginBottom: '2%'}}>
                            <View style={{ flex: 9, flexDirection: 'row', justifyContent: 'flex-start',}}>
                                <TextInput style={{width:'80%'}} keyboardType='decimal-pad'
                                    onChangeText={(sotien) => this.setState({sotien})}
                                    value={this.state.sotien}
                                ></TextInput>
                            </View>
                            <View style={{flex: 0.9, flexDirection: 'row', justifyContent: 'flex-end', marginTop:'3%', color:'#f4f6f8'}}>
                                <Text style={{fontSize:14, color:'#444444'}}>VND</Text>
                            </View>
                        </View>
                        <View style={{ marginBottom:'2%',marginTop:'2%'}}>
                            <Text style={{textAlign:'right',paddingRight:'5%', color:'gray', fontStyle:'italic'}}>Tối thiểu là 1.000.000 VND</Text>
                        </View>
                    </View>

                    <Text style={{marginTop: '2%', marginStart: '2%'}}>Thời gian tích lũy</Text>
                    <View style={{flex: 2.05, width: '90%', height: '90%', borderRadius: 10, alignItems: 'center', 
                           margin:'5%', marginTop:'2%',backgroundColor: 'white'}}>
                        <View style={{flex:0.5, width:'100%'}}>
                            <View style={{flex:1, flexDirection:'row', backgroundColor:'white', alignItems:'center',
                                    borderTopLeftRadius:10, borderTopEndRadius:10}}>
                                <TouchableOpacity style={{flex: 1, backgroundColor:this.state.showMonth?'white':'#DCE0EB', borderTopLeftRadius:10,}}
                                    onPress={() => {this.state.mBackground[this.state.newIndex]=true, 
                                        this.setState({newIndex:-1,showMonth: true, laisuat:5});
                                    }}>  
                                <View style={{flex:1, justifyContent:'center'}}>
                                    <Text style={{textAlign:'center', color:this.state.showMonth?'#22429C':'white', fontSize:16, fontWeight:'900'}}>Tháng</Text>
                                </View>
                                </TouchableOpacity>
                                
                                <TouchableOpacity style={{flex: 1}}
                                    onPress={() => {this.state.mBackground3[this.state.newIndex]=true,
                                        this.setState({newIndex:-1,showMonth: false, laisuat: 7});
                                    }}>  
                                <View style={{flex:1, borderTopEndRadius:10, backgroundColor:this.state.showMonth?'#DCE0EB':'white', alignItems:'center', justifyContent:'center'}}>
                                    <Text style={{textAlign:'center', color:this.state.showMonth?'white':'#22429C', fontSize:16,fontWeight:'900'}}>Năm</Text>
                                </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {this.state.showMonth?

                        <View style={{flex:1.5, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>      
                            <View style={{flex:1, flexDirection:'row', marginTop:'2%', justifyContent:'center', alignItems:'center'}}>
                                {this.state.mValue.map((item, key)=>(
                                     <TouchableOpacity style={{paddingStart:'2.5%', paddingEnd:'2.5%'}}
                                        onPress={()=>{this.setState({thang:item, oldIndex: key, newIndex:key}), 
                                                this.state.mBackground[key]=false, this.state.mBackground[this.state.oldIndex]=true }}>
                                     <View style={{ backgroundColor:this.state.mBackground[key]?'white':'#22429C', width:RADIUS/10, height:RADIUS/10, borderRadius: RADIUS/10, 
                                         justifyContent:'center', alignItems:'center', borderWidth:0.5, borderColor:'gray'}}>
                                         <Text style={{textAlign:'center', fontWeight:'bold',color:this.state.mBackground[key]?'#183AB4':'white'}}>{item}</Text>
                                     </View>
                                 </TouchableOpacity>
                                ))}
                            </View>

                            <View style={{flex:1, flexDirection:'row',marginTop:'2%', paddingTop:'1%', marginBottom:'2%'}}>
                                {this.state.mValue2.map((item, key)=>(
                                    <TouchableOpacity style={{paddingStart:'2.5%', paddingEnd:'2.5%'}}
                                        onPress={()=>{this.setState({thang:item, oldIndex: key+6, newIndex:key+6}), 
                                                this.state.mBackground[key+6]=false, this.state.mBackground[this.state.oldIndex]=true}}>
                                         <View style={{ backgroundColor:this.state.mBackground[key+6]?'white':'#22429C', width:RADIUS/10, height:RADIUS/10, borderRadius: RADIUS/10, 
                                            justifyContent:'center', alignItems:'center', borderWidth:0.5, borderColor:'gray'}}>
                                            <Text style={{textAlign:'center', fontWeight:'bold',color:this.state.mBackground[key+6]?'#183AB4':'white'}}>{item}</Text>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                        :
     
                        <View style={{flex:1.5, flexDirection:'row', marginTop:'2%', paddingStart:'2%', paddingEnd:'2%', justifyContent:'center', alignItems:'center'}}>
                                <View style={{flex:1, flexDirection:'row',marginTop:'2%', paddingTop:'1%', marginBottom:'2%', justifyContent:'center', alignItems:'center'}}>
                                {this.state.mValue3.map((item, key)=>(
                                     <TouchableOpacity style={{paddingStart:'2.5%', paddingEnd:'2.5%'}}
                                        onPress={()=>{this.setState({thang:item, oldIndex: key, newIndex:key}), 
                                                this.state.mBackground3[key]=false, this.state.mBackground3[this.state.oldIndex]=true}}>
                                     <View style={{ backgroundColor:this.state.mBackground3[key]?'white':'#22429C', width:RADIUS/10, height:RADIUS/10, borderRadius: RADIUS/10, 
                                         justifyContent:'center', alignItems:'center', borderWidth:0.5, borderColor:'gray'}}>
                                         <Text style={{textAlign:'center', fontWeight:'bold',color:this.state.mBackground3[key]?'#183AB4':'white'}}>{key+1}</Text>
                                     </View>
                                 </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                        }
                    </View>

                    <View style={{flex: 2.25, width: '90%', height: '90%', borderRadius: 10, alignItems: 'center', 
                           marginStart:'5%', marginEnd:'5%', backgroundColor: 'white', justifyContent:'space-between'}}>
                            <Item title="Tên tài khoản" value={"KHTN " +this.state.thang+"T VND"}></Item>
                            <Item title="Lãi suất" value={this.state.laisuat+"%/tháng"}></Item>
                            <Item title="Tiền lãi hàng tháng" value={parseFloat(this.state.sotien) * parseFloat(this.state.laisuat)/100 + " VND"}></Item>
                            <Item title="Tiền nhận dự kiến" value={parseFloat(this.state.sotien) + this.state.thang*(parseFloat(this.state.sotien)*(this.state.laisuat/100)) + " VND"}></Item>
                    </View>

                    <View style={{flex:0.75, alignItems:'center', marginTop:'2%'}}>

                    <TouchableHighlight style={{backgroundColor:'#21439C', width:'40%', height:'80%', justifyContent:'center', 
                            alignItems:'center', borderRadius:30}}
                            onPress={() => navigate("ConfirmCreateSaving", {laisuat:this.state.laisuat, sotien:this.state.sotien,
                                    thang:this.state.thang})}>
                        <Text style={{color:'white'}}>Tiếp tục</Text>
                    </TouchableHighlight>
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