import React, {Component} from 'react';
import {Text, View, Image, TouchableHighlight, 
    TouchableOpacity, Dimensions, TouchableNativeFeedback} from 'react-native';
import styles from '../mainCss';
import Icon from 'react-native-vector-icons/FontAwesome'
import FlipToggle from 'react-native-flip-toggle-button';
import LinearGradient from 'react-native-linear-gradient';
import Confirm from '../../../common/Confirm';

export default class HomeScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        const { params = {} } = navigation.state;
        let tabBarLabel = "Trang chủ";
        let tabBarIcon = ({ focused }) =>  (
            focused
            ? <Image source={require('../../../assets/img/home_onfocus_icon.png')} size={25}  />
            : <Image source={require('../../../assets/img/home_icon.png')} size={30}  /> 
         );
        return {tabBarLabel, tabBarIcon};
    }

    constructor(props) {
        super(props);
        this.state = { 
            indexImage: 0,
            updateText:'',
            isActive: false,
            money: "***000"
        };
    }
    ToggleFunction = () => {
        var temp = this.state.isActive? "***000": "1.000.000"
        this.setState(state => ({
          isActive: !state.isActive,
          money: temp
        }));
    };
      
    componentDidUpdate(){
    }
  
    componentDidMount(){
    }

    componentWillUnmount() {
    }

    componentDidUpdate(){
  
    }
  
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
            
                </View>
                <View style={styles.body}>
                    <View style={styles.body_top}>
                        <TouchableHighlight style={{alignSelf: 'flex-end'}} onPress={()=>{}}>
                            <Icon name='bell-o' size={20} color='blue' style={{marginTop: '5%' ,marginEnd: '2%'}}/>
                        </TouchableHighlight>
                        <View style={styles.circle_header}>
                            <View style={styles.circle_header_middle}>
                                <View style={styles.circle_header_in}>
                                    <Text style={{color: '#fefffe', fontSize: 15, alignSelf: 'center'}}>HCI</Text>  
                                </View>
                            </View>
                        </View>

                        <Text style={{color: '#1a75c6', fontSize: 22, position:'absolute', paddingTop: 90}}>
                            {this.renderText()} HCI!
                        </Text>                         

                        <View style={styles.swipe}>
                            <FlipToggle
                                value={this.state.isActive} 
                                buttonWidth={40} 
                                buttonHeight={20}
                                buttonRadius={30} 
                                sliderWidth={20} 
                                sliderHeight={20}
                                sliderRadius={50}
                                sliderOnColor='#aade43'
                                sliderOffColor= '#8a9ab5'
                                labelStyle={{ color: 'gray' }}
                                buttonOnColor='#dbe0eb'
                                buttonOffColor='#dbe0eb'
                                onToggle={(newstate) => {this.ToggleFunction()}}
                            />
                            <Text style={{ marginStart: '2%', marginTop: '5%',}}> Hiển thị số tiền </Text>
                        </View>
                    </View>
                    <View style={styles.body_bottom}>

                    <View style={{flex:1, flexDirection:'row'}}>
                    <TouchableNativeFeedback onPress={() => navigate('Account')} navigate={navigate}>
                        <LinearGradient colors={['#1844a4', '#1673c2', '#14a6e2']} style={styles.linearGradient_payment}>
                                <Text style={{position:'absolute', color:'white', paddingTop: '8%', fontSize: Dimensions.get('window').width/22}}>Tài khoản</Text>
                                <Text style={{position:'absolute', color:'white', paddingTop: '22%', fontSize: Dimensions.get('window').width/22}}>Thanh toán</Text>
                                <Text style={{position:'absolute', color:'white', paddingTop: '45%', fontSize: 20, fontSize: Dimensions.get('window').width/23}}>{this.state.money}</Text>
                                <Text style={{position:'absolute', color:'white', bottom: 0, fontSize: Dimensions.get('window').width/24}}>VND</Text>
                        </LinearGradient>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={() => navigate('Saving')} navigate={navigate}>
                        <LinearGradient colors={['#d2e705', '#a6dd49', '#77d38f']} style={styles.linearGradient_saving}>
                            <Text style={{position:'absolute', color:'white', paddingTop: '10%', fontSize: Dimensions.get('window').width/24}}>Tài khoản</Text>
                            <Text style={{position:'absolute', color:'white', paddingTop: '25%', fontSize: Dimensions.get('window').width/23}}>Tiết kiệm</Text>
                            <Text style={{position:'absolute', color:'white', paddingTop: '45%', fontSize: Dimensions.get('window').width/26, alignSelf:'center'}}>Xem chi tiết</Text>       
                        </LinearGradient>
                    </TouchableNativeFeedback>
                    </View>

                    <View style={{flex: 1, flexDirection:'row'}}>
                    <TouchableNativeFeedback onPress={() => navigate('Transfer')} navigate={navigate}>
                        <LinearGradient colors={['#9bacc7', '#8d9eb9', '#7789a5']} style={styles.linearGradient_loan}>
                            <Text style={{color:'white', fontSize: Dimensions.get('window').width/23, fontWeight:'bold', paddingBottom: '20%'}}>Chuyển tiền</Text>
                        </LinearGradient>  
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={() => navigate('ATMCard')} navigate={navigate}>
                        <LinearGradient colors={['#05b2f5', '#2dc4fa', '#4dd6ff']} style={styles.linearGradient_card}>
                                <Text style={{position:'absolute', color:'white', paddingTop: '15%', fontSize: Dimensions.get('window').width/22}}>Thẻ</Text>
                                <Text style={{position:'absolute', color:'white', paddingTop: '40%', fontSize: Dimensions.get('window').width/26}}>Xem chi tiết</Text>
                        </LinearGradient>
                    </TouchableNativeFeedback> 

                    </View>
                         
                    </View>
                </View>
            </View>   
        );
    }

    renderText() {
        var hour = new Date().getHours();
        if(hour > 4 && hour <10)
            return "Chào buổi sáng";
        else if (hour >=10 && hour <13)
            return "Chào buổi trưa";
        else if (hour >=13 && hour <17)
            return "Chào buổi chiều";
        else 
            return "Chào buổi tối";
    }
}