import React from 'react';
import {
  Text,
  View,
  TouchableNativeFeedback,
} from 'react-native';
import Metrics from './Metrics';
import Dialog, {DialogContent} from 'react-native-popup-dialog';

const PADDING_HORIZONTAL = Metrics.PADDING_HORIZONTAL;

export default class Confirm extends React.Component {
  render() {
    return (
      <Dialog
            visible={this.state.dialogVisible}
            dialogTitle={
              <View
                style={{
                  width: 0.9 * Metrics.screenWidth,
                  height: Metrics.screenHeight / 5,
                }}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#22429C',
                  }}>
                  <Text style={{color: '#FFFFFF'}}>XÁC NHẬN CHUYỂN TIỀN</Text>
                </View>
                <View
                  style={{
                    flex: 2,
                    flexDirection: 'column',
                    paddingVertical: 20,
                    paddingHorizontal: 0.1 * Metrics.screenWidth,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 15,
                      marginBottom: 10,
                    }}>
                    Vui lòng nhập mật khẩu đăng nhập để xác nhận Chuyển tiền
                  </Text>
                  <Text style={{textAlign: 'center', marginBottom: 10}}>
                    **************
                  </Text>
                  <View
                    style={{
                      alignSelf: 'center',
                      width: 0.6 * Metrics.screenWidth,
                      height: 1,
                      backgroundColor: '#D7D7D7',
                      marginBottom: 15,
                    }}></View>
                  <TouchableNativeFeedback onPress={()=>{this.setState({dialogVisible: false})}}>
                    <View
                      style={{
                        alignSelf: 'center',
                        width: '40%',
                        height: '40%',
                        backgroundColor: '#22429C',
                        borderRadius: 10,
                        alignItems:'center',
                        justifyContent:'center'
                      }}>
                          <Text style={{alignSelf:'center',color:'#FFF'}}>Xác nhận</Text>
                      </View>
                  </TouchableNativeFeedback>
                </View>
              </View>
            }
            onTouchOutside={() => {
              this.setState({dialogVisible: false});
            }}>
            <DialogContent></DialogContent>
          </Dialog>
    );
  }
}
