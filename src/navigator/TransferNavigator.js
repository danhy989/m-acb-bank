import { createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import TransferScreen from '../component/main/transfer/TransferScreen';
import TKNH from '../component/main/transfer/child/TKNH';
import ListBank from '../component/main/transfer/child/ListBank';
import BankCard from '../component/main/transfer/child/BankCard';
import Metrics from '../common/Metrics';
import Confirm from '../common/Confirm';

const RootStack = createStackNavigator({
    TransferScreen:{
        screen: TransferScreen,
        navigationOptions: {
            title:'Chuyển tiền',
            headerTitleStyle:{
                textAlign:"center",
                flex: 1,
                fontSize:17,
            },
            headerStyle:{
                height:Metrics.navigationBarHeight,
            },
        }, 
    },

    TKNH:{
        screen: TKNH,
        navigationOptions: {
            title: `Chuyển tiền`,
            headerTitleStyle: { 
                textAlign:"center", 
                flex:1 ,
                fontSize:Metrics.headerFontSize,
            },
        }
    },

    ListBank:{
        screen: ListBank,
        navigationOptions: {
            title: `Ngân hàng`,
            headerTitleStyle: { 
                textAlign:"center", 
                flex:1 ,
                fontSize:Metrics.headerFontSize,
            },
        }
    },

    BankCard:{
        screen: BankCard,
        navigationOptions: {
            title: `Chuyển tiền`,
            headerTitleStyle: { 
                textAlign:"center", 
                flex:1 ,
                fontSize:Metrics.headerFontSize,
            },
        }
    },

    Confirm:{
        screen:Confirm,
        navigationOptions: {
            title: `Xác nhận`,
            headerTitleStyle: { 
                textAlign:"center", 
                flex:1 ,
                fontSize:Metrics.headerFontSize,
            },
        }
    }

})

const TransferNavigator = createAppContainer(RootStack);
export default TransferNavigator;