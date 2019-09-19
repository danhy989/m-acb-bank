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
    body:{
        flex:9,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
       // backgroundColor:'#000000'
    },
    footer:{
        flex:2,
        backgroundColor:'#000000'
    },
    image: {
        flex: 1,
        width:'100%',
        height:'100%',
        borderRadius: 50
    },
    circlesContainer:{
        width: BASE_SIZE,
        height: BASE_SIZE,
        alignItems: 'center',
    },
    circle_1:{
        top:0,
        position: 'absolute',
        width:BASE_SIZE,
        height:BASE_SIZE,
        borderRadius: BASE_SIZE/2,
        borderWidth: CIRCLE_BORDER_WIDTH,
        borderStyle: CIRCLE_BORDER_STYLE,
        borderColor:CIRCLE_BORDER_COLOR
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
});
export default styles