import React, {Component} from 'react';
import {Text, View, Image, Dimensions, TouchableNativeFeedback} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
// import styles from './../../savingCss';

class TextIcon extends React.Component{
    render(){
        const navigate = this.props.navigate;
        var data = [
            {
                "text" : "Chuyển tiền",
                "src" : require('../../../../assets/img/circle_transfer.png'),
                "left": '10%',
                "right": '0%',
                "screen":'Transfer',
            },
            {
                "text" : "Tiết kiệm",
                "src" : require('../../../../assets/img/saving_icon2.png'),
                "left": '0%',
                "right": '0%',
                "screen":'Saving',
            },
            {
                "text" : "Thanh toán",
                "src" : require('../../../../assets/img/circle_wallet.png'),
                "left": '0%',
                "right": '10%',
                "screen": 'Payment',
            },
        ]
        return(
            <TouchableNativeFeedback onPress={() => navigate(data[this.props.index].screen)} navigate={navigate}>
                <View style={{flex: 1,flexDirection:'column', alignItems:'center', justifyContent: 'center',
                    marginLeft: data[this.props.index].left, marginRight:data[this.props.index].right, width: '50%'}}>
                    <Image source={ data[this.props.index].src} style={{width: Dimensions.get('window').height/10, height: Dimensions.get('window').height/10}}/>
                    <Text>{this.props.text}</Text>
                </View>
            </TouchableNativeFeedback>
        )
    }
}

class HistoryItem extends React.Component{
    render(){
        return(
            <View style={{marginBottom:'2%',height:'28%', paddingTop:'2%', width:'95%', borderRadius: 10, alignSelf:'center'}}>
                <Text style={{alignSelf:'flex-start', paddingStart:'3%', fontSize:16}}>{this.props.date}</Text>
                <View style={{flexDirection: 'column', marginTop: '1%', height: '80%',width: '100%', alignSelf:'center',
                    backgroundColor: 'white', borderRadius:10}}>                   
                    <Text style={{flex:1, width:'70%', paddingStart:'3%', paddingTop:'2%', fontSize:17}}>{this.props.content}</Text>
                    <Text style={{flex:1, alignSelf:'flex-end', paddingTop:'3%', paddingBottom:'2%', paddingEnd:'2%',
                                color:'#146EC3', fontWeight:'900', fontSize: 18}}>{this.props.money}</Text>
                </View>
            </View>
        )
    }
}
class Record extends React.Component{
    render(){
        return(

                // <View style={{width: '100%',height: '100%', marginTop: '2%', marginLeft: '5%', borderRadius: 10, flexDirection:'column',
                //     justifyContent: 'center', alignItems: 'center',backgroundColor: 'white'}}>
                <View style={{width: '90%',height: '90%', marginTop: '2%', marginLeft: '5%',borderRadius: 10, flexDirection:'column',
                    justifyContent: 'center',alignItems: 'center',backgroundColor: 'white'}}>
                    <View style={{flex:3, width:'100%', justifyContent:'center'}}>
                        <Text style={{marginLeft: '5%'}}>{this.props.title}</Text>
                    </View>

                    <View style={{flex:3, backgroundColor: '#106ec3', width:'100%', justifyContent:'space-between', 
                        flexDirection:'row'}}>
                        <View style={{flex: 3, marginLeft:'5%', justifyContent:'center'}}>
                            <Text style={{fontSize: 15, fontWeight:'bold', color:'#fafafa'}}>{this.props.name}</Text>
                        </View>
                        <View style={{flex: 2, marginRight:'2%', justifyContent:'center'}}>
                            <Text style={{fontSize: 15, fontWeight:'bold', color:'#fafafa', alignSelf:'flex-end'}}>{this.props.date}</Text>
                        </View>
                    </View>

                    <View style={{flex:4, width:'100%', flexDirection: 'row', justifyContent:'space-between'}}>
                        <View style={{flex: 1, marginTop:'5%', marginLeft:'5%'}}>
                            <Text style={{fontSize: 15}}>Số dư khả dụng</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'column', marginTop: '5%'}}>
                            <Text style={{alignSelf:'flex-end', fontSize: 15, color: '#042e98', paddingRight:'5%'}}>{this.props.money} VND</Text>
                            <Text style={{alignSelf:'flex-end', fontSize: 12, color: '#949494', paddingRight:'5%'}}>Số dư thực: {this.props.surplus} VND</Text>
                        </View>
                    </View>
                </View>
 
        )
    }
}

export default class TransferInfo extends React.Component {
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

        };
    }

    componentDidMount() {
        const { navigation } = this.props;
        this.setState({
            title: navigation.getParam('title'),
            name: navigation.getParam('name'),
            money: navigation.getParam('money'),
            date: navigation.getParam('date'),
            surplus: navigation.getParam('surplus'),
        })
      }

    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={{flex: 1, flexDirection:'column'}}>
                <View style={{height:'35%', backgroundColor:'#f5f6f8'}}>
                    <Record title={this.state.title} name={this.state.name} surplus={this.state.surplus} 
                        money={this.state.money} date={this.state.date}/>
                </View>
                
                <View style={{height:'65%', backgroundColor:'#f5f6f8', flexDirection:'column'}}>
                    <View style={{height: '22%',flexDirection: 'row', backgroundColor:'#f5f6f8'}}>
                        <TextIcon index="0" text="Chuyển tiền" navigate={navigate}/>
                        <TextIcon index="1" text="Tiết kiệm" navigate={navigate}/>
                        <TextIcon index="2" text="Thanh toán" navigate={navigate}/>
                    </View>
             
                    <View style={{height: '78%', backgroundColor:'#f5f6f8', flexDirection:'column'}}>
                        <View style={{flex:1, width:'100%', backgroundColor:'white', marginTop: '2%', flexDirection: 'row'}}>
                                <View style={{flex: 2, flexDirection:'row', alignItems:'center'}}>
                                    <Image source={require('../../../../assets/img/timer_icon.png')} 
                                        style={{width: 20, height:20, marginLeft:'3%'}}></Image>
                                    <Text style={{paddingLeft:'2%'}}>Lịch sử giao dịch</Text>
                                </View>
                        </View>
                        <View style={{flex:8}}>
                            <ScrollView style={{flexDirection:'column'}}>
                                    <HistoryItem date="01/05/2019" content="Nạp tiền vào ví Momo" money="- 50.000 VND"></HistoryItem>
                                    <HistoryItem date="13/08/2019" content="Rút tiền từ ví Momo" money="+ 100.000 VND"></HistoryItem>
                                    <HistoryItem date="13/08/2019" content='Phí thường niên' money="+ 200.000 VND"></HistoryItem>
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}