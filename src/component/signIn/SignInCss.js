import {StyleSheet} from "react-native";
import Metrics from '../../common/Metrics'

const BASE_SIZE = Metrics.screenWidth+50;
const CIRCLE_BORDER_COLOR = '#DCEDFD';
const CIRCLE_BORDER_WIDTH = 2;
const CIRCLE_BORDER_STYLE = 'solid';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor:'#E8EEF8',
        flexDirection: 'column'
    },
    header:{
        flex:1,
        flexDirection:'row',
        //backgroundColor:'#000000'
    },
    header_left:{
        flex:1,
        //backgroundColor:'#007ACC'
    },
    header_center:{
        flex:3,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        margin:'auto'
        //backgroundColor:'#007ACC'
    },
    header_right:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        margin:'auto'
        //backgroundColor:'#007ACC'
    },
    image_header:{
        flex:1, 
         width: 30,
        height:30
    },
    textinput: {
        color:'#000000',
        fontSize:16,
        top:50,
        left:50,
        height: 40,
        width:Metrics.screenWidth*0.7,
        borderColor: 'black',
        borderWidth: 0,
        borderBottomWidth:1,
        marginBottom:30,
        borderBottomColor:'#EEEEEE'
      },
      buttonLogin:{
        backgroundColor:'#FFFFFF',
        width:'30%',
        height:'80%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
        borderWidth:0.03,
        marginRight:Metrics.screenWidth/6,
        opacity:1
    },
});
export default styles