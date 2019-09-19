import React,{Component} from 'react';
import {Text,View,Image} from 'react-native';
import styles from './LoginCss';
import SwitchButton from '../../common/SwitchButton'
import AppIntroSlider from 'react-native-app-intro-slider';
import Swiper from 'react-native-swiper';


export default class LoginScreen extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
    };


    render() {
      const {navigate} = this.props.navigation;
        return (
          <View style={styles.container}>
              <View style={styles.header}>
                  <View style={styles.header_left}>
  
                  </View>
                  <View style={styles.header_center}>
                      <Text>ACB</Text>
                  </View>
                  <View style={styles.header_right}>
                      <SwitchButton
                      onValueChange={(val) => this.setState({ activeSwitch: val })}      // this is necessary for this component
                      text1 = 'EN'                        // optional: first text in switch button --- default ON
                      text2 = 'VN'                       // optional: second text in switch button --- default OFF
                      switchWidth = {100}                 // optional: switch width --- default 44
                      switchHeight = {44}                 // optional: switch height --- default 100
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
                        <View style={styles.circle_1} />
                        <View style={styles.circle_2} />
                        <View style={styles.circle_3} />
                        <Swiper style={styles.wrapper} showsButtons={false}>
                            <View style={styles.circle_4} >
                              <Image style={styles.image} source={require("../../assets/img/70845769_1221643054705200_8115508707732750336_n.png")} resizeMode="contain"></Image>             
                            </View>
                            <View style={styles.circle_4} >
                              <Image style={styles.image} source={require("../../assets/img/galaxy.png")} resizeMode="contain"></Image>             
                            </View>
              
                        </Swiper>
                </View>
              </View>
              <View style={styles.footer}>
  
              </View>
          </View>   
        );
      }
  }