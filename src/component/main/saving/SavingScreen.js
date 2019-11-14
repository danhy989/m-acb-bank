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
            ? <Image source={require('../../../assets/img/saving_onfocus_icon.png')} size={25}  />
            : <Image source={require('../../../assets/img/saving_icon.png')} size={30}  /> 
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
                        <View style={{flex: 1}}>
                        <Text style={{color: 'white', paddingTop: 10, paddingStart: 10}}>Tổng số dư</Text>
                        <Text style={{color: 'white', paddingTop: 5, paddingStart: 25, fontSize: 25}}>0</Text>

                        </View>
                      <View style={{flex:1, alignItems:'center', margin: 0, borderColor: 'white'}}>
                            <View style={{height:'30%', width: '40%',backgroundColor:'#9bda55', alignSelf:'flex-end', borderTopStartRadius: 15, borderBottomStartRadius: 15, 
                                    flexDirection:'row', alignItems:'center', borderWidth:1, borderColor: 'white', justifyContent:'center'}}>                                   
                                <Text style={{fontSize: 12, color: 'white'}}>Bộ lọc</Text>
                                <Image source={require('../../../assets/img/filter_icon.png')} style={{height: 12, width: 12, marginStart:5}}/>
                            </View>
                        </View>
                  </LinearGradient>
              </View>
              
              <View style={styles.body_bottom}>
                <View style={{flex: 1, backgroundColor:'#fafafa'}}>
                    <View style={{ width: '90%', height: '25%', marginTop: '2%', marginLeft: '5%', borderRadius: 10, 
                    justifyContent: 'center', alignItems: 'center', backgroundColor: 'white',}}>
                        <Text style={{fontSize: 12}}>Quý khách chưa tạo tài khoản tiết kiệm.</Text>
                        <Text style={{color: '#5a92d8', paddingLeft: '5%', paddingTop: '5%', fontSize: 12}}>
                                    Tạo tài khoản ></Text>
                    </View>
                </View>
                <View style={{position:'absolute', alignSelf:'flex-end', right: 0, marginRight: '2%',marginBottom: '3%'}}>
                  <Image source={require('../../../assets/img/src_assets_ic_plus_ic_plus.png')}
                    style={{width: 50, height: 50}}>
                  </Image>
                </View>
              </View>
          </View>   
        );
    }
}