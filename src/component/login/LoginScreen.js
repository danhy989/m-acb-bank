import React,{Component} from 'react';
import {Text,View,Image,TouchableHighlight} from 'react-native';
import styles from './LoginCss';
import SwitchButton from '../../common/SwitchButton';
import Swiper from 'react-native-swiper';

//Hide warning 
console.disableYellowBox = true;

export default class LoginScreen extends React.Component {

    constructor(props) {
      super(props);
      this.state = { indexImage: 0,updateText:'' };
    }

    static navigationOptions = {
      title: 'Welcome',
    };

    componentDidUpdate(){

    }

    componentDidMount(){
      this.setState({updateText:'Ngân hàng của mọi nhà'})
    }

    componentDidUpdate(){

    }

    updateTextWithSwipe() {
       switch(this.state.indexImage){
          case 0: 
            this.setState({updateText:'Giá trị của cuộc sống'})
            break;

          case 1:
            this.setState({updateText:'Làm chủ tương lai'})
            break;
          case 2:
            this.setState({updateText:'Ngân hàng của mọi nhà'})
            break;
          default:
            this.setState({updateText:'default'})
            break;
       }
    }


    render() {
      const {navigate} = this.props.navigation;
        return (
          <View style={styles.container}>
              <View style={styles.header}>
                  <View style={styles.header_left}>
  
                  </View>
                  <View style={styles.header_center}>
                  <Image style={styles.image_header} source={require("../../assets/img/src_assets_logoacb.png")} resizeMode="contain"></Image>             
                  </View>
                  <View style={styles.header_right}>
                      <SwitchButton
                      onValueChange={(val) => this.setState({ activeSwitch: val })}      // this is necessary for this component
                      text1 = 'EN'                        // optional: first text in switch button --- default ON
                      text2 = 'VN'                       // optional: second text in switch button --- default OFF
                      switchWidth = {75}                 // optional: switch width --- default 44
                      switchHeight = {30}                 // optional: switch height --- default 100
                      switchdirection = 'rtl'             // optional: switch button direction ( ltr and rtl ) --- default ltr
                      switchBorderRadius = {100}          // optional: switch border radius --- default oval
                      switchSpeedChange = {500}           // optional: button change speed --- default 100
                      switchBorderColor = '#d4d4d4'       // optional: switch border color --- default #d4d4d4
                      switchBackgroundColor = '#fff'      // optional: switch background color --- default #fff
                      btnBorderColor = '#00a4b9'          // optional: button border color --- default #00a4b9
                      btnBackgroundColor = '#106EC3'      // optional: button background color --- default #00bcd4
                      fontColor = '#b1b1b1'               // optional: text font color --- default #b1b1b1
                      activeFontColor = '#fff'            // optional: active font color --- default #fff
                  />
                  </View>
              </View>
              <View style={styles.body}>
                <View style={styles.circlesContainer}>
                        <View style={styles.circle_1} >
                            <Text style={{fontSize:28}} ellipsizeMode="middle" >{this.state.updateText}</Text>
                        </View>
                        <View style={styles.circle_2} />
                        <View style={styles.circle_3} />
                        <Swiper style={styles.wrapper} autoplay={true} onIndexChanged={(inde)=>{this.setState({indexImage: inde}),this.updateTextWithSwipe()}}>
                            <View style={styles.circle_4} >
                              <Image style={styles.image_radius} source={require("../../assets/img/src_assets_background_sample_1.png")} resizeMode="contain"></Image>             
                            </View>
                            <View style={styles.circle_4} >
                              <Image style={styles.image_radius} source={require("../../assets/img/src_assets_background_sample_2.png")} resizeMode="contain"></Image>             
                            </View>
                            <View style={styles.circle_4} >
                              <Image style={styles.image_radius} source={require("../../assets/img/src_assets_background_sample_3.png")} resizeMode="contain"></Image>             
                            </View>
              
                        </Swiper>
                </View>
              </View>
              <View style={styles.footer}>
                    <View style={styles.footer_button_login}>
                        <TouchableHighlight style={styles.buttonLogin} onPress={() => navigate('SignIn')}>
                                <Text style={{color:'#FFFFFF'}}>ĐĂNG NHẬP</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.footer_button_more}>
                        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                          <Text style={{color:'#787878'}} onPress={()=>alert('Clicked')}>
                              Tin tức
                          </Text>
                        </View>
                        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{color:'#787878'}} onPress={()=>alert('Clicked')}>
                              Tỷ giá 
                          </Text>
                        </View>
                        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{color:'#787878'}} onPress={()=>alert('Clicked')}>
                              Liên hệ 
                          </Text>
                        </View>
                        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{color:'#787878'}} onPress={()=>alert('Clicked')}>
                              Địa điểm 
                          </Text>
                        </View>
                        
                    </View>
              </View>
          </View>   
        );
      }
  }