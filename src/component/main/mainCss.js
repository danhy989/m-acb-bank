import {StyleSheet, Dimensions} from "react-native";
import Metrics from '../../common/Metrics'

const BASE_SIZE = Metrics.screenWidth+50;
const RADIUS = Dimensions.get('window').height;
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
        flexDirection:'column'
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

    circle_header:{     
        width: 0.9*RADIUS/5,
        height: 0.9*RADIUS/5,
        borderRadius: BASE_SIZE/2, 
        backgroundColor: '#eef0f5',
        alignItems: 'center',
        justifyContent:'center',
    },
    circle_header_middle:{
        width: RADIUS/8,
        height: RADIUS/8,
        borderRadius: BASE_SIZE/2, 
        backgroundColor: '#f5f6f8',
        alignItems: 'center',
        justifyContent:'center',
    },
    circle_header_in: {
        width: RADIUS/11,
        height: RADIUS/11,
        borderRadius: BASE_SIZE/2, 
        backgroundColor: '#3b91c5',
        alignItems: 'center',
        justifyContent:'center',
    },
    text_main:{
        color:'#1a75c6',
    },

    swipe:{
        alignSelf: "flex-start",
        marginStart: '3%',
        marginTop: '5%',
        flexDirection:'row',
    },
    linearGradient_payment: {
        marginTop: '20%',
        marginStart: '8%',
        width: 0.95*RADIUS/4,
        height: 0.95*RADIUS/4,
        borderRadius: BASE_SIZE/2,         
        alignItems: 'center',
        // justifyContent:'center',
    },
    linearGradient_saving: {
        marginTop: '22%',
        marginStart: '2%',
        width: 0.9*RADIUS/4,
        height: 0.9*RADIUS/4,
        borderRadius: BASE_SIZE/2,         
        alignItems: 'center',
    },
    linearGradient_loan: {
        marginTop: '5%',
        marginStart: '15%',
        width: 0.9*RADIUS/5,
        height: 0.9*RADIUS/5,
        borderRadius: BASE_SIZE/2,         
        alignItems: 'center',
        justifyContent:'center',
    },
    linearGradient_card: {
        marginTop: '4%',
        marginStart: '2%',
        width: 0.8*RADIUS/4,
        height: 0.8*RADIUS/4,
        borderRadius: BASE_SIZE/2,         
        alignItems: 'center',
    },
});
export default styles