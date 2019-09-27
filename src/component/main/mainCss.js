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
    circlesContainer:{
        width: BASE_SIZE,
        height: BASE_SIZE,
        alignItems: 'center',
    },
    circle_header:{     
        width: 50,
        height: 50,
        borderRadius: BASE_SIZE/2, 
        // backgroundColor: '#3b91c5',
        alignItems: 'center',
        justifyContent:'center',
    },
    circle_1:{
        top:0,
        position: 'absolute',
        width:BASE_SIZE,
        height:BASE_SIZE,
        borderRadius: BASE_SIZE/2,
        borderWidth: CIRCLE_BORDER_WIDTH,
        borderStyle: CIRCLE_BORDER_STYLE,
        borderColor:CIRCLE_BORDER_COLOR,
        alignItems:'center',
    },
    circle_2:{
        top:BASE_SIZE*0.075, // The amount remaining
        left:BASE_SIZE*0.075,
        position: 'absolute',
        width:BASE_SIZE*0.85, // 80% of the base size
        height:BASE_SIZE*0.85,
        borderRadius: BASE_SIZE/2,
        borderWidth: CIRCLE_BORDER_WIDTH,
        borderStyle: CIRCLE_BORDER_STYLE,
        borderColor:CIRCLE_BORDER_COLOR,
        
    },
    circle_3:{
        top:BASE_SIZE*0.15,
        left:BASE_SIZE*0.15,
        position: 'absolute',
        width:BASE_SIZE*0.7,
        height:BASE_SIZE*0.7, // 60% of the base size
        borderRadius: BASE_SIZE*0.7/2,
        borderWidth: CIRCLE_BORDER_WIDTH,
        borderStyle: CIRCLE_BORDER_STYLE,
        borderColor:CIRCLE_BORDER_COLOR,
        backgroundColor:'#23439A'
    },
    circle_4:{
        top:BASE_SIZE*0.225,
        left:BASE_SIZE*0.225,
        position: 'absolute',
        width:BASE_SIZE*0.55,
        height:BASE_SIZE*0.55, // 60% of the base size
        borderRadius: BASE_SIZE*0.6/2,
        borderWidth: CIRCLE_BORDER_WIDTH,
        borderStyle: CIRCLE_BORDER_STYLE,
        borderColor:CIRCLE_BORDER_COLOR,
        justifyContent:'center',
        alignItems:'center',
    },
    text_main:{
        color:'#1a75c6',
    },

    swipe:{
        alignSelf: "flex-start",
        marginStart: 10,
        marginTop: 10,
        flexDirection:'row',
    }
});
export default styles