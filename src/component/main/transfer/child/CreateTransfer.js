import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  TouchableNativeFeedback,
} from 'react-native';
import Dialog, {DialogContent} from 'react-native-popup-dialog';
import DatePicker from 'react-native-date-picker';
import Metrics from '../../../../common/Metrics';


class Record extends React.Component {
  render() {
    const {navigate} = this.props;
    return (
      <TouchableNativeFeedback onPress={() => {
        if(this.props.noNavigate!==true){
          navigate("ListBank");
        }
      }}>
        <View style={{flexDirection: 'row', alignSelf: 'flex-start', width: '90%', height: '25%', borderBottomColor: '#f4f6f8', 
            marginStart: '2%', marginEnd: 0, borderBottomWidth: 1, marginTop: '1%', marginBottom: '1%'}}> 
          <View style={{flex: 9, flexDirection: 'row', justifyContent: 'flex-start'}}>
            
          <TextInput>{this.props.content}</TextInput>
          </View>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', marginTop: '4%', 
            marginBottom: '2%',}}>
            <Image
              source={require('../../../../assets/img/src_assets_ic_hambuger_dark_ic_hambuger_dark.png')}
              style={{width: 15, height: 15, marginTop: '3%'}}></Image>
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

class Record2 extends React.Component {
  render() {
    return (
      <View
        style={{flexDirection: 'row', alignSelf: 'flex-start', width: '90%', height: '25%', borderBottomColor: '#f4f6f8', 
            marginStart: '2%', marginEnd: '2%', borderBottomWidth: 1, marginTop: '1%', marginBottom: '1%'}}>
        <View
          style={{flex: 9, flexDirection: 'row', justifyContent: 'flex-start'}}>
          <TextInput style={{color:'#000'}} value={this.props.content}></TextInput>
        </View>
      </View>
    );
  }
}

class Record3 extends React.Component{
  render(){
    return (
      <View style={{flexDirection: 'row', alignSelf: 'flex-start', width: '90%', height: '60%', borderBottomColor: '#f4f6f8', 
          marginStart: '2%', marginEnd: 0, borderBottomWidth: 1, marginTop: '1%', marginBottom: '1%'}}>
        <View style={{ flex: 9, flexDirection: 'row', justifyContent: 'flex-start'}}>
          <TextInput>Chuyển ngay</TextInput>
          </View>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', marginTop: '4%', marginBottom: '2%',}}>
            <Image
              source={require('../../../../assets/img/src_assets_ic_hambuger_dark_ic_hambuger_dark.png')}
              style={{width: 15, height: 15, marginTop: '3%'}}></Image>
          </View>
      </View>
    )
  }
}
export default class CreateTransfer extends React.Component {
  static navigationOptions = {
    headerRight: (
    <View style={{marginRight: '5%',flex: 1, flexDirection:'row', alignItems:'center', justifyContent:'center', margin:'auto'}}>
        
    </View>
    )       
}
  constructor() {
    super();
    this.state = {
      text: '',
      showComponent: false,
      isOnline: null,
      bankName : "ACB - NH TMCP A CHAU",
      cardNo : '',
      fullName : '',
      date: new Date(),
      datepicker:false,
    };
    this.onIconClick = this.onIconClick.bind(this);
  }

  componentDidMount(){
    const {params} = this.props.navigation.state;
    if(params){
      if(params.fullName){
        this.setState({
          bankName:params.bankName,
          cardNo:params.cardNo,
          fullName:params.fullName, 
          message:'',
          ref:'',
        });
      }
    }
  }

  onIconClick() {
    if (this.state.text != '')
      this.setState({
        showComponent: true,
      });
  };

  parseDate(mdate){
    var mm = mdate.getMonth() + 1; // getMonth() is zero-based
    var dd = mdate.getDate();
    var hour = mdate.getHours();
    var minute = mdate.getMinutes();
    return [(dd>9 ? '' : '0') + dd,
            (mm>9 ? '' : '0') + mm,
            mdate.getFullYear(),            
           ].join('/') + ' ' +
           [(hour>9 ? '' : '0') + hour,
           (minute>9 ? '' : '0') + minute,].join(':');
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
        <View style={{flex:1}}>
        <TouchableOpacity style={{flex: 0.8, height:'100%'}}
          onPress={() => {this.setState({visible: true});}}>
          <View style={{flex: 2, height:'80%', backgroundColor: 'white', flexDirection: 'row',}}>
            <View style={{width: '2%', backgroundColor: '#21439C'}}></View>
              <View style={{flex: 10, flexDirection: 'column', alignItems: 'flex-start', 
                justifyContent: 'center', marginStart: '2%',}}>
                <View>
                  <Text style={{color:'#97979B'}}>Tài khoản trích (VND): <Text style={{fontWeight:'bold',color:'#000'}}>22522323</Text></Text>
                  <Text style={{paddingTop: '2%', color: '#21439C', fontSize: 15, fontWeight: 'bold'}}> 1.000.000 VND</Text>
                </View>
            </View>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('../../../../assets/img/src_assets_ic_dropdown_ic_dropdown.png')}
                style={{width: 12, height: 12}}></Image>
            </View>
          </View>
        </TouchableOpacity>

        <View style={{flex: 5, backgroundColor: '#f4f6f8'}}>
          <View style={{flex:2.5, flexDirection:'column'}}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{marginTop: '2%', marginStart: '2%'}}>
                Thông tin người nhận
              </Text>
              <Image
                source={require('../../../../assets/img/src_assets_ic_contact_list_ic_contact_list.png')}
                style={{width: Metrics.screenWidth/21, height: Metrics.screenWidth/21, marginTop: '2%', marginEnd: '3%'}}></Image>
            </View>
            <View
              style={{ flex: 4.25, width: '90%', height: '90%', borderRadius: 10, alignItems: 'center',
                margin: '5%', marginTop: '2%', marginBottom: '2%', backgroundColor: 'white',}}>
              <Text style={{alignSelf:'flex-start',marginTop:'2%',marginLeft:'2%',color:'#97979B'}}>Ngân hàng</Text>
              <Record navigate={navigate} content={this.state.bankName}></Record>


              <Text style={{alignSelf:'flex-start',marginTop:'2%',marginLeft:'2%',color:'#97979B'}}>Số tài khoản</Text>
              <View
                style={{flexDirection: 'row', alignSelf: 'flex-start', width: '90%', height: '25%', borderBottomColor: '#f4f6f8', 
                marginStart: '2%', marginEnd: '1%', borderBottomWidth: 1, marginTop: '1%', marginBottom: '1%'}}>
                  <TextInput style={{color:'#000', width:'100%'}}
                    keyboardType='decimal-pad'
                    onChangeText={(cardNo) => this.setState({cardNo})}
                    value={this.state.cardNo}>
                  </TextInput>
              </View>
            </View>
          </View>
          
          <View style={{flex:1.2, flexDirection:'column'}}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{marginTop: '2%', marginStart: '2%'}}>
                Thời gian chuyển
              </Text>
            </View>

            <View
              style={{flex:2, width: '90%', height: '90%', borderRadius: 10, alignItems: 'center',
                margin: '5%', marginTop: '2%', marginBottom: '2%', backgroundColor: 'white',}}>
              
                <View style={{flexDirection: 'row', alignSelf: 'flex-start', width: '90%', height: '60%', borderBottomColor: '#f4f6f8', 
                    marginStart: '2%', marginEnd: 0, borderBottomWidth: 1, marginTop: '1%', marginBottom: '1%'}}>
                  <View style={{ flex: 11, flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <Text style={{marginTop:'5%', marginLeft:'3%'}}>{this.parseDate(this.state.date)}</Text>
                  </View>
                  <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', marginTop: '4%', marginBottom: '2%',}}>
                    <TouchableOpacity style={{flex: 0.8, height:'100%'}}
                    onPress={() => {this.setState({datepicker: true});}}>
                      <Image
                        source={require('../../../../assets/img/src_assets_ic_calendar_blue_14_ic_calendar_blue_14.png')}
                        style={{width: Metrics.screenWidth/21, height: Metrics.screenWidth/21, marginTop: '3%'}}></Image>
                    </TouchableOpacity>
                    </View>
                </View>
              
            </View>
          </View>

          <View style={{flex:1.2, flexDirection:'column'}}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{marginTop: '2%', marginStart: '2%'}}>
                Số tiền
              </Text>
            </View>

            <View
              style={{flex:2, width: '90%', height: '90%', borderRadius: 10, alignItems: 'center',
                margin: '5%', marginTop: '2%', marginBottom: '2%', backgroundColor: 'white',}}>
              <TouchableNativeFeedback onPress={() => {
                if(this.props.noNavigate!==true){
                  navigate("ListBank");
                }}}>
                <View style={{flexDirection: 'row', alignSelf: 'flex-start', width: '90%', height: '60%', borderBottomColor: '#f4f6f8', 
                    marginStart: '2%', marginEnd: 0, borderBottomWidth: 1, marginTop: '1%', marginBottom: '1%'}}>
                  <View style={{ flex: 9, flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <TextInput style={{width:'80%'}} keyboardType='decimal-pad'
                        onChangeText={(sotien) => this.setState({sotien})}
                        value={this.state.sotien}>
                    </TextInput>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', marginTop: '4%', marginBottom: '2%',}}>
                      <Text>VND</Text>
                    </View>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>

          <View
              style={{flex: 1.25, width: '90%', height: '80%', borderRadius: 10, alignItems: 'center',
                margin: '5%', marginTop: '2%', marginBottom: '2%', backgroundColor: 'white',}}>
              <View style={{flex:1, flexDirection: 'row', alignSelf: 'flex-start', width: '90%', height: '60%', borderBottomColor: '#f4f6f8', 
                    marginStart: '2%', marginEnd: 0, borderBottomWidth: 1, marginTop: '1%', marginBottom: '1%'}}>
                  <TextInput placeholder="Nội dung (không dấu)"
                  onChangeText={(message) => this.setState({message})}
                  value={this.state.message}></TextInput>
              </View>
              <View style={{flex:1, flexDirection: 'row', alignSelf: 'flex-start', width: '90%', height: '60%', borderBottomColor: '#f4f6f8', 
                    marginStart: '2%', marginEnd: 0, borderBottomWidth: 1, marginTop: '1%', marginBottom: '1%'}}>
                  <TextInput placeholder="Số tham chiếu (không dấu)"
                   onChangeText={(ref) => this.setState({ref})}
                   value={this.state.ref}></TextInput>
              </View>
            </View>

          <View style={{flex: 0.75, width: '100%', height: 50, borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity
               onPress={() => navigate("ConfirmTransfer", {sotien:this.state.sotien, date:this.parseDate(this.state.date), 
                  bankName:this.state.bankName, cardNo:this.state.cardNo, message:this.state.message, ref:this.state.ref})}
              style={{backgroundColor: '#21439C', width: '40%', height: '80%', justifyContent: 'center', alignItems: 'center', borderRadius: 30}}>
              <Text style={{color: 'white'}}>Tiếp tục</Text>
            </TouchableOpacity>
          </View>

          <Dialog
            visible={this.state.visible}
            dialogTitle={
              <View
                style={{
                  width: 0.9 * Dimensions.get('window').width,
                  height: Dimensions.get('window').height / 5,
                }}>
                <View
                  style={{
                    flex: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#f4f6f8',
                  }}>
                  <Text>Lựa chọn tài khoản trích</Text>
                </View>
                <View
                  style={{
                    flex: 5,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      flex: 4,
                      flexDirection: 'column',
                      justifyContent: 'center',
                      marginTop: '5%',
                      marginLeft: '5%',
                    }}>
                    <Text
                      style={{
                        color: '#1c44a3',
                        fontWeight: 'bold',
                        paddingTop: '2%',
                      }}>
                      22522323
                    </Text>
                    <Text style={{color: '#163FA1', paddingTop: '2%'}}>
                      NGUYEN VAN A
                    </Text>
                    <Text style={{color: '#163FA1', paddingTop: '2%'}}>
                      TGTT SINH VIEN KHTN (CN) VND
                    </Text>
                    <Text
                      style={{
                        color: '#0D6CC2',
                        fontWeight: 'bold',
                        paddingTop: '2%',
                      }}>
                      1.000.000
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={require('../../../../assets/img/src_assets_ic_checked_checked.png')}
                      style={{width: 15, height: 15}}></Image>
                  </View>
                </View>
              </View>
            }
            onTouchOutside={() => {
              this.setState({visible: false});
            }}>
            <DialogContent></DialogContent>
          </Dialog>
        
          <Dialog
            visible={this.state.datepicker}
            dialogTitle={
              <DatePicker
                date={this.state.date}
                onDateChange={date => this.setState({ date })}
              />
            }
            onTouchOutside={() => {
              this.setState({datepicker: false});
            }}>
            <DialogContent></DialogContent>
          </Dialog>
        </View>
      {/* </ScrollView> */}
        </View>

    );
  }
}
