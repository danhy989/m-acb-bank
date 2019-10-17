import React, { Component } from 'react';
import Button from 'react-native-button';
import { Text, View, Image, StyleSheet, ScrollView, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Metrics from '../../../common/Metrics'
import SwitchButton from '../../../common/SwitchButton';
import CardItem from '../../../common/CardItem';
import Line from '../../../common/Line';

const PADDING_HORIZONTAL = Metrics.PADDING_HORIZONTAL;


export default class MoreScreen extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.header_left}>

          </View>
          <View style={styles.header_center}>
            <Image style={styles.image_header} source={require("../../../assets/img/src_assets_logoacb.png")} resizeMode="contain"></Image>
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
        <View style={styles.body}>
          <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <View style={styles.view_card}>
                <CardItem name="UserInfoScreen" navigate={navigate} card_item_height={100} text="VU NGOC DUY ANH" img={require('../../../assets/img/src_assets_ic_welcome_user_ic_welcome_user.png')}></CardItem>
            </View>
            <View style={styles.view_card}>
              <CardItem name="AllSettingScreen" navigate={navigate} text="Cài đặt" img={require('../../../assets/img/src_assets_ic_setting_setting.png')}></CardItem>
              <Line/>
              <CardItem name="ShareInfoScreen" navigate={navigate} text="Chia sẻ thông tin tài khoản" img={require('../../../assets/img/src_assets_ic_share_ic_share.png')}></CardItem>
            </View>
            <View style={styles.view_card}>
              <CardItem name="NewsScreen" navigate={navigate} text="Tin tức" img={require('../../../assets/img/src_assets_ic_new_news.png')}></CardItem>
              <Line/>
              <CardItem name="ExchangeRateScreen" navigate={navigate}  text="Tỷ giá" img={require('../../../assets/img/src_assets_ic_chart_chart.png')}></CardItem>
              <Line/>
              <CardItem name="LocationScreen" navigate={navigate}  text="Địa điểm" img={require('../../../assets/img/src_assets_ic_location_location.png')}></CardItem>
            </View>
            <View style={styles.view_card}>
              <CardItem name="TermScreen" navigate={navigate}  text="Điều khoản và điều kiện sử dụng" img={require('../../../assets/img/src_assets_ic_list_list.png')}></CardItem>
              <Line/>
              <CardItem name="QuestionScreen" navigate={navigate}  text="Câu hỏi thường gặp" img={require('../../../assets/img/src_assets_ic_faq_ic_faq.png')}></CardItem>
              <Line/>
              <CardItem name="ContactScreen" navigate={navigate}  text="Liên hệ" img={require('../../../assets/img/src_assets_ic_contact_contact.png')}></CardItem>
            </View>
            <View style={styles.view_card}>
              <CardItem name="1" navigate={navigate} text="Đăng xuất" img={require('../../../assets/img/src_assets_ic_shutdown_ic_shutdown.png')}></CardItem>
            </View>

          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F6F8',
    flexDirection: 'column'
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    //backgroundColor:'#000000'
  },
  header_left: {
    flex: 1,
    //backgroundColor:'#007ACC'
  },
  header_center: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto'
    //backgroundColor:'#007ACC'
  },
  header_right: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto'
    //backgroundColor:'#007ACC'
  },
  body: {
    flex: 9,
    alignItems: 'center',
    paddingHorizontal: PADDING_HORIZONTAL
    // backgroundColor:'#000000'
  },
  image_radius: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 50
  },
  image_header: {
    flex: 1,
    width: 30,
    height: 30
  },
  view_card: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10
  },

});
