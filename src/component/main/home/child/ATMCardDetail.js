import React, {Component} from 'react';
import {Text, TextInput, View, Image, ImageBackground, TouchableOpacity, Dimensions, ScrollView} from 'react-native';
import Dialog, { DialogContent } from 'react-native-popup-dialog';

class Record extends React.Component{
    render(){
        var image=[
            require('./../../../../assets/img/atm_card2.png'),
            require('./../../../../assets/img/atm_card_deactive.png')
        ]

        return(
            <View style={{width: '80%', height: '35%', marginTop: '2%', flexDirection:'column',
                    justifyContent: 'center', alignItems: 'center', backgroundColor: '#f4f6f8'}}>
                <ImageBackground source={image[this.props.status]} 
                    style={{width: '100%', height:'100%', borderRadius: 15, overflow: 'hidden', }}>
                    <View style={{bottom: 0, marginBottom: '1%', marginLeft:'5%', position:'absolute', flexDirection:'column'}}>
                        <Text style={{color: 'white'}}>{this.props.stk}</Text>
                        <Text style={{color: 'white', fontWeight: 'bold'}}>{this.props.name}</Text>
                    </View>
                </ImageBackground>
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
class TextIcon extends React.Component{
    render(){
        var data = [
            {
                "src" : require('../../../../assets/img/lock_card.png'),
                "left": '0%',
                "right": '0%',
            },
        ]
        return(
            <View style={{flex: 1,flexDirection:'column', alignItems:'center', justifyContent: 'center',
                marginLeft: data[this.props.index].left, marginRight:data[this.props.index].right, width: '50%'}}>
                <Image source={ data[this.props.index].src} style={{width: Dimensions.get('window').height/10, height:Dimensions.get('window').height/10}}/>
                <Text>{this.props.text}</Text>
            </View>
        )
    }
}
export default class ATMCardDetail extends React.Component {
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

        };
      }

    componentDidMount() {
        const { navigation } = this.props;
        this.setState({
            stk: navigation.getParam('stk'),
            name: navigation.getParam('name'),
            status: navigation.getParam('status'),
            objIndex: navigation.getParam('index'),
            handleClickParent: navigation.getParam('handleClickParent')
        })
    }
    
    handleClick = () => {
        this.setState({
             status: 1,
             visible: false
        });
        this.state.handleClickParent(1, this.state.objIndex)
   }

    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={{flex:1, alignItems:'center', backgroundColor: '#f4f6f8', flexDirection:'column'}}>
                <Record stk={this.state.stk} name={this.state.name} status={this.state.status} 
                    />
                <View style={{flex: 4, backgroundColor:'#f4f6f8', marginTop:'2%', flexDirection:'column'}}>
                    <TouchableOpacity style={{flex: 1, width:'100%'}}
                        onPress={() => {this.setState({ visible: true });}}>
                        <TextIcon index="0" text="Khóa thẻ"/>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 2, backgroundColor:'white', marginTop: '2%', flexDirection: 'row'}}>
                        <View style={{flex: 2, flexDirection:'row', alignItems:'center'}}>
                            <Image source={require('../../../../assets/img/timer_icon.png')} 
                                style={{width: 20, height:20, marginLeft:'5%'}}></Image>
                            <Text style={{paddingLeft:'2%'}}>Giao dịch 40 ngày gần nhất</Text>
                        </View>
                </View>
                <View style={{flex: 9, backgroundColor:'#f4f6f8', width:'100%',marginTop: '2%'}}>
                    <ScrollView style={{flexDirection:'column'}}>
                        <HistoryItem date="01/05/2019" content="Rút tiền tại ATM CHO THU DUC" money="- 500.000 VND"></HistoryItem>
                        <HistoryItem date="13/08/2019" content="Chuyển tiền từ ATM CHO THU DUC" money="- 200.000 VND"></HistoryItem>
                        <HistoryItem date="13/08/2019" content='Phí thường niên' money="+ 200.000 VND"></HistoryItem>
                    </ScrollView>
                </View>

                <Dialog
                    visible={this.state.visible}
                    dialogTitle={
                        <View style={{width: 0.9 * Dimensions.get('window').width,
                            height: Dimensions.get('window').height/4}}>
                        <View style={{flex: 1, justifyContent:'center', alignItems:'center', backgroundColor:'#f4f6f8'}}>
                                <Text>XÁC NHẬN KHÓA THẺ</Text>
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
                                        onPress={this.handleClick}>
                                        {/* onPress={() => {this.setState({ visible: false, status: 1 });}}> */}
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