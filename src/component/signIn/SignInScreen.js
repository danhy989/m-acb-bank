import React, { Component } from 'react';
import { Button, Text, View, Image, ImageBackground, TextInput ,TouchableHighlight} from 'react-native';
import styles from './SignInCss'
import SwitchButton from '../../common/SwitchButton';
import Metrics from '../../common/Metrics';


export default class SignInScreen extends React.Component {

    constructor(props) {
        super(props);

    }

    static navigationOptions = {
        title: 'Welcome',
    };
    render() {

          const {navigate} = this.props.navigation;
        return (
            <View>
                <ImageBackground style={{ width: '100%', height: '100%' }} source={require("../../assets/img/src_assets_loginbg_loginbg.png")} >
                    <View style={styles.header}>
                        <View style={styles.header_left}>

                        </View>
                        <View style={styles.header_center}>
                            <Image style={styles.image_header} source={require("../../assets/img/src_assets_ic_logo_white_ic_logo_white.png")} resizeMode="contain" ></Image>
                        </View>
                        <View style={styles.header_right}>
                            <SwitchButton
                                onValueChange={(val) => this.setState({ activeSwitch: val })}      // this is necessary for this component
                                text1='EN'                        // optional: first text in switch button --- default ON
                                text2='VN'                       // optional: second text in switch button --- default OFF
                                switchWidth={75}                 // optional: switch width --- default 44
                                switchHeight={30}                 // optional: switch height --- default 100
                                switchdirection='rtl'             // optional: switch button direction ( ltr and rtl ) --- default ltr
                                switchBorderRadius={100}          // optional: switch border radius --- default oval
                                switchSpeedChange={500}           // optional: button change speed --- default 100
                                switchBorderColor='#d4d4d4'       // optional: switch border color --- default #d4d4d4
                                switchBackgroundColor='#fff'      // optional: switch background color --- default #fff
                                btnBorderColor='#00a4b9'          // optional: button border color --- default #00a4b9
                                btnBackgroundColor='#106EC3'      // optional: button background color --- default #00bcd4
                                fontColor='#b1b1b1'               // optional: text font color --- default #b1b1b1
                                activeFontColor='#fff'            // optional: active font color --- default #fff
                            />
                        </View>
                    </View>
                    <View style={{ flex: 9 }}>
                        <ImageBackground style={{ flex: 1, width: Metrics.screenWidth * 1.5, height: Metrics.screenWidth * 1.5, top: -Metrics.screenWidth / 10, left: -Metrics.screenWidth / 2.5 }} source={require("../../assets/img/white-circle-pngc09-4dd3-a6e5-e4a33d437599.png")} resizeMode="contain">
                            <View style={{ flex: 1 }}>
                                <View style={{ flex: 4, alignItems: 'center', justifyContent: 'center' }}>
                                    <TextInput
                                        style={styles.textinput}
                                        placeholder={"Tên đăng nhập"}
                                        underlineColorAndroid='transparent'
                                    />
                                    <TextInput
                                        style={styles.textinput}
                                        secureTextEntry={true}
                                        placeholder={"Mật khẩu"}
                                        underlineColorAndroid='transparent'
                                    />
                                </View>
                                <View style={{ flex: 1,alignItems:'flex-end' }}>
                                    <TouchableHighlight style={styles.buttonLogin} onPress={() => navigate('Main')}>
                                        <Text style={{ color: '#000' }}>ĐĂNG NHẬP</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                            <View style={{ flex: 1 }}>

                            </View>

                        </ImageBackground>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}