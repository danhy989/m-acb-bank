import {StyleSheet} from "react-native";
import Metrics from '../../common/Metrics'

const BASE_SIZE = Metrics.screenWidth+50;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        // backgroundColor: '#f5f6f8'
    },
    header: {
        flex: 1,
        alignItems: 'center',
        width:'100%',
        height:'100%',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    body_top: {
        flex: 2,
        backgroundColor: 'blue',
    },
    gradient: {
        flex: 1,
    },
    body_endTop:{
        flex: 1,
        backgroundColor: 'white',
    },
    body_content:{
        width: '80%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    body_bottom: {
        flex: 12,
        backgroundColor: '#f4f6f8',
        flexDirection: 'row',
    }
})

export default styles