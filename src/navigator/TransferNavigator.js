import { createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import TransferScreen from '../component/main/transfer/TransferScreen';
import CreateTransfer from '../component/main/transfer/child/CreateTransfer';
import ConfirmTransfer from '../component/main/transfer/child/ConfirmTransfer';
import ListBank from '../component/main/transfer/child/ListBank';
import BankCard from '../component/main/transfer/child/BankCard';
import Metrics from '../common/Metrics';

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

    CreateTransfer:{
        screen: CreateTransfer,
        navigationOptions: {
            title: `Chuyển tiền`,
            headerTitleStyle: { 
                textAlign:"center", 
                flex:1 ,
                fontSize:Metrics.headerFontSize,
            },
            headerStyle:{
                height:Metrics.navigationBarHeight,
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
            headerStyle:{
                height:Metrics.navigationBarHeight,
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
            headerStyle:{
                height:Metrics.navigationBarHeight,
            },
        }
    },

    ConfirmTransfer:{
        screen:ConfirmTransfer,
        navigationOptions: {
            title: `Xác nhận`,
            headerTitleStyle: { 
                textAlign:"center", 
                flex:1 ,
                fontSize:Metrics.headerFontSize,
            },
            headerStyle:{
                height:Metrics.navigationBarHeight,
            },
        }
    }

})

const TransferNavigator = createAppContainer(RootStack);

TransferNavigator.navigationOptions=({navigation}) =>{
    let tabBarVisible = true;
    let routeName = navigation.state.routes[navigation.state.index].routeName
    if ( routeName == 'CreateTransfer' || routeName == 'ConfirmTransfer' || routeName == 'Detail') {
        tabBarVisible = false
    }
    return {
        tabBarVisible,
    }
}
export default TransferNavigator;