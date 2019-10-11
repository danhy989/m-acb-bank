import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './savingCss';

export default class SavingScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        const { params = {} } = navigation.state;
        let tabBarLabel = "Tiết kiệm";
        let tabBarIcon = ({ focused }) =>  (
            focused
            ? <Image source={require('../../assets/img/saving_onfocus_icon.png')} size={25}  />
            : <Image source={require('../../assets/img/saving_icon.png')} size={30}  /> 
         );
        return {tabBarLabel, tabBarIcon};
    }

    constructor() {
        super();
        this.state = {

        };
    }
    render() {
        const {navigate} = this.props.navigation;
        return (
          <View style={styles.container}>
              <View style={styles.header}>              
                  <Text>Danh sách tiền gửi</Text>
              </View>
              <View style={styles.body_top}>
                  <LinearGradient colors={['#76d28b', '#a4dc4a', '#d0e60e']} style={styles.gradient}
                       start= {{ x: 0, y: 0 }}
                       end= {{ x: 1, y: 0} }>
                      <Text style={{color: 'white', paddingTop: 10, paddingStart: 10}}>Tổng số dư</Text>
                      <Text style={{color: 'white', paddingTop: 5, paddingStart: 25, fontSize: 25}}>0</Text>
                  </LinearGradient>
                  {/* <View style={styles.body_content}>
                      <Text> Content </Text>
                  </View> */}
              </View>
              
              <View style={styles.body_bottom}>
              </View>
          </View>   
        );
    }
}