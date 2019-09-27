import React, {Component} from 'react';
import {Text, View, Image, TouchableHighlight, ImageBackground} from 'react-native';
import styles from './mainCss';
import Icon from 'react-native-vector-icons/FontAwesome'
import SwitchButton from '../../common/Swipe'
import FlipToggle from 'react-native-flip-toggle-button';

export default class HomeScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        const { params = {} } = navigation.state;
        let tabBarLabel = "Trang chủ";
        let tabBarIcon = ({}) => (
            <Image 
                source = {require('../../assets/img/home_icon.png')}
                style={{width: 26, height: 26}}
            /> 
        );
        return {tabBarLabel, tabBarIcon};
    }

    constructor(props) {
        super(props);
        this.state = { 
            indexImage: 0,
            updateText:'',
            isActive: false,
        };
    }
    ToggleFunction = () => {
        this.setState(state => ({
          isActive: !state.isActive
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
                        <Icon name='bell-o' size={20} color='blue' style={{marginEnd: 10}}/>
                    </TouchableHighlight>
                        <View style={styles.circle_header} >
                            <ImageBackground style={{ alignItems: 'center', 
                                                justifyContent:'center', 
                                        flexDirection: 'row',
                                        width: 100,
                                        height: 100,
                                    }}                                                                 
                                source={require('./../../assets/img/src_assets_ic_term_notification_ic_notification.png')} style={{width: '100%', height: '100%'}}>
                                <Text style={{color: '#fefffe', fontSize: 15, alignSelf: 'center'}}>HCI</Text>  
                            </ImageBackground>
                                
                        </View>
                        <Text style={{color: '#1a75c6', fontSize: 25}}>
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
                            sliderOnColor='#8a9ab5'
                            sliderOffColor= '#8a9ab5'
                            labelStyle={{ color: 'gray' }}
                            buttonOnColor='#dbe0eb'
                            buttonOffColor='#dbe0eb'
                            onToggle={(newstate) => {
                            this.ToggleFunction()
                    }}
                />
                <Text style={{marginStart: 5}}> Hiển thị số tiền </Text>
            </View>
                  </View>
                  <View style={styles.body_bottom}>

                  </View>
                </View>
            </View>   
        );
    }

    renderText() {
        var date= new Date()
        var hour = date.getHours()
        if(hour > 4 && hour <10)
        //    return <Text >Chào buổi sáng</Text>;
        return "Chào buổi sáng";
        else if (hour >=10 && hour <1)
            // return <Text>Chào buổi trưa</Text>;
            return "Chào buổi trưa";
        else if (hour >=1 && hour <5)
            // return <Text>Chào buổi chiều</Text>;
            return "Chào buổi chiều";
        else 
            // return <Text>Chào buổi tối</Text>
            return "Chào buổi tối"
    }
}