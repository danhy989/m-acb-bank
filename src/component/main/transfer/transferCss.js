import {StyleSheet} from "react-native";
import Metrics from '../../../common/Metrics'

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
        flex: 3,
        backgroundColor: '#f4f6f8',
        borderColor: '#f4f8f6',
    },
    gradient: {
        flex: 1,
    },
    body_endTop:{
        flex: 1,
        backgroundColor: '#f4f6f8',
    },
    body_content:{
        flex: 1,
        width: '80%',
        height: '70%',
        borderRadius: 10,
        margin: '10%',
        marginBottom: 0,
        alignItems: 'center',
        backgroundColor: 'white',
        position: 'absolute'
    },
    bot_header:{
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    body_content_bottom:{
        // flex: 2,
        width: '80%',
        height: 60,
        marginTop: '5%',
        marginLeft: '10%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    body_bottom: {
        flex: 5,
        backgroundColor: 'red',
        flexDirection: 'column',
        backgroundColor: '#f4f6f8',
        borderColor: '#f4f8f6',
    }
})

export default styles