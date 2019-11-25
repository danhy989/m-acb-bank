import React, {Component} from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';

class Item extends React.Component{
    render(){
        return(
            <View style={{flex:1.25, flexDirection:'row', alignItems:'center'}}>
                <Text style={{width:'50%', paddingStart:'2%',  color:'#A0A0A0'}}>{this.props.context}</Text>
                <Text style={{width:'50%', paddingEnd:'2%', color:'#22429C', textAlign:'right'}}>{this.props.value}</Text>
            </View>
        )
    }
}

class HistoryItem extends React.Component{
    render(){
        return(
            <View style={{marginTop:'3%', height:'25%'}}>
                <Text style={{alignSelf:'flex-start', paddingStart:'3%', fontSize:16}}>{this.props.date}</Text>
                <View style={{flexDirection: 'column', marginTop: '1%', height: '80%',width: '100%', alignSelf:'center',
                    backgroundColor: 'white'}}>                   
                    <Text style={{flex:1, width:'80%', paddingStart:'3%', paddingTop:'3%', fontSize:17}}>{this.props.content}</Text>
                    <Text style={{flex:1, alignSelf:'flex-end', paddingTop:'3%', paddingBottom:'2%', paddingEnd:'2%',
                                color:'#146EC3', fontWeight:'900', fontSize: 18}}>{this.props.money}</Text>
                </View>
            </View>
        )
    }
}

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
                                <Text style={{paddingTop:'2%', color:'#676767'}}>Tên tiền gửi</Text>
                                <Text style={{paddingTop:'1%', color:'#22429C', fontWeight:'bold', fontSize:17}}>{"KHTN " +this.state.thang+"T VND"}</Text>
                            </View>
                        </View>

                        <View style={{flex:1, width:'95%', flexDirection:'row', borderBottomWidth:1, borderBottomColor:'#EDEDED'}}>
                            <View style={{width:'50%', height:'90%', borderRightWidth:1, borderRightColor:'#EDEDED', marginTop:'2%'}}>
                                <Text style={{color:'#676767'}}>Kỳ hạn</Text>
                                <Text style={{paddingTop:'1%', color:'#22429C', fontWeight:'bold', fontSize:17}}>{this.state.thang + " tháng"}</Text>
                            </View>
                            <View style={{width:'50%', marginTop:'2%', marginStart:'2%'}}>
                                <Text style={{color:'#676767'}}>Lãi suất</Text>
                                <Text style={{paddingTop:'1%', color:'#22429C', fontWeight:'bold', fontSize:17}}>{this.state.laisuat+"%/tháng"}</Text>
                            </View>
                        </View>

                        <View style={{flex:1, width:'95%', flexDirection:'row', marginBottom:'2%'}}>
                            <View style={{width:'50%', borderRightWidth:1, borderRightColor:'#EDEDED', height:'80%', marginBottom:'3%'}}>
                                <Text style={{paddingTop:'3%', color:'#676767'}}>Bắt đầu</Text>
                                <Text style={{paddingTop:'1%', color:'#22429C', fontWeight:'bold', fontSize:17}}>{this.state.now}</Text>
                            </View>
                            <View style={{width:'50%', marginTop:'2%', marginStart:'2%'}}>
                                <Text style={{color:'#676767'}}>Đáo hạn</Text>
                                <Text style={{paddingTop:'1%', color:'#22429C', fontWeight:'bold', fontSize:17}}>{this.state.after}</Text>
                            </View>
                        </View>
                   </View>
                </View>

                <View style={{flex:2, backgroundColor:'#f5f6f8', flexDirection:'column', alignItems:'center'}}>
                    <View style={{width:'90%', marginTop:'3%', height:'90%', borderRadius:10, backgroundColor:'white',
                        flexDirection:'column', marginStart:'2%', marginEnd:'2%'}}>
                            <View style={{flex:1.35, flexDirection:'column', borderBottomWidth:1, borderBottomColor:'#EDEDED',paddingBottom:'2%'}}>
                                <Item context="Tiền gửi ban đầu" value={this.state.sotien + " VND"}></Item>
                                <Item context="Tiền lãi dự kiến" value={parseFloat(this.state.sotien) * this.state.thang*parseFloat(this.state.laisuat)/100 + " VND"}></Item>
                            </View>

                            <View style={{flex:0.65, marginTop:'3%', flexDirection:'row'}}>
                                <Text style={{width:'50%', paddingStart:'2%', color:'#A0A0A0'}}>Tiền nhận dự kiến</Text>
                                <Text style={{width:'50%', paddingEnd:'2%', color:'#22429C', textAlign:'right'}}>{parseFloat(this.state.sotien) + this.state.thang*(parseFloat(this.state.sotien)*(this.state.laisuat/100)) + " VND"}</Text>
                            </View>

                            
                    </View>
                </View>
                
                <View style={{flex:2.5, backgroundColor:'#f5f6f8', flexDirection:'column', alignItems:'center'}}>
                    <View style={{flex:1, marginTop:'2%', marginStart:'5%', alignSelf:'flex-start'}}>
                        <Text style={{alignSelf:'flex-start'}}>Xử lý khi đáo hạn</Text>
                    </View>
                    <View style={{flex:4, width:'100%', height:'100%'}}>
                        <ScrollView style={{flexDirection:'column'}}>
                            <HistoryItem date="01/07/2019" content="Cập nhật tiền lãi" money="+ 50.000 VND"></HistoryItem>
                            <HistoryItem date="01/08/2019" content="Cập nhật tiền lãi" money="+ 50.000 VND"></HistoryItem>
                            <HistoryItem date="01/09/2019" content='Cập nhật tiền lãi' money="+ 50.000 VND"></HistoryItem>
                        </ScrollView>
                    </View>
                </View>
            </View>
        )
    }
}