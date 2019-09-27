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
        flexDirection: 'column',
        backgroundColor: '#f5f6f8'
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
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        margin:'auto'
        //backgroundColor:'#007ACC'
    },
    header_right:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end',
        margin:'auto'
        //backgroundColor:'#007ACC'
    },
    body:{
        flex:14,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
    //    backgroundColor:'blue'
    },
    body_top:{
        flex: 3,
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
        // backgroundColor: 'yellow',
    },
    body_bottom: {
        flex: 12,
        width:'100%',
        height:'100%',
    },
    footer:{
        flex:2,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    image_radius: {
        flex: 1,
        width:'100%',
        height:'100%',
        borderRadius: 50
    },
    image_header:{
        flex:1, 
         width: 30,
        height:30
    },

    circle_header:{     
        width: 120,
        height: 120,
        borderRadius: BASE_SIZE/2, 
        backgroundColor: '#eef0f5',
        alignItems: 'center',
        justifyContent:'center',
    },
    circle_header_middle:{
        width: 70,
        height: 70,
        borderRadius: BASE_SIZE/2, 
        backgroundColor: '#f5f6f8',
        alignItems: 'center',
        justifyContent:'center',
    },
    circle_header_in: {
        width: 50,
        height: 50,
        borderRadius: BASE_SIZE/2, 
        backgroundColor: '#3b91c5',
        alignItems: 'center',
        justifyContent:'center',
    },
    circle_payment:{
        marginTop: 100,
        width: 120,
        height: 120,
        borderRadius: BASE_SIZE/2, 
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
    },
    text_main:{
        color:'#1a75c6',
    },

    swipe:{
        alignSelf: "flex-start",
        marginStart: 10,
        marginTop: 10,
        flexDirection:'row',
    },
    linearGradient_payment: {
        marginTop: 50,
        marginStart: 50,
        width: 150,
        height: 150,
        borderRadius: BASE_SIZE/2,         
        // alignItems: 'center',
        justifyContent:'center',
    },
    linearGradient_saving: {
        top: -130,
        left: 205,
        width: 130,
        height: 130,
        borderRadius: BASE_SIZE/2,         
        // alignItems: 'center',
        justifyContent:'center',
    },
    linearGradient_loan: {
        top: -125,
        left: 60,
        width: 120,
        height: 120,
        borderRadius: BASE_SIZE/2,         
        // alignItems: 'center',
        justifyContent:'center',
    },
    linearGradient_card: {
        top: -245,
        left: 190,
        width: 130,
        height: 130,
        borderRadius: BASE_SIZE/2,         
        // alignItems: 'center',
        justifyContent:'center',
    },
});
export default styles