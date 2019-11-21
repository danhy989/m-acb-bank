import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import Account from '../component/main/home/child/Account';
import Metrics from '../common/Metrics';
import TransferInfo from '../component/main/home/child/TransferInfo'

const RootStack = createStackNavigator({
    AccountScreen:{
        screen: Account,
        navigationOptions:{
           header: null,
        } 
    },

    Detail:{
        screen: TransferInfo,
        // navigationOptions: () =>({
        //     title: 'Tài khoản thanh toán',
        //     headerTitleStyle:{
        //         flex: 1,
        //         textAlign: "center",
        //         fontSize: Metrics.headerFontSize,
        //     },
        //     headerStyle:{
        //         height: 35,
        //     }
        // })
        navigationOptions:{
            header:null,
        }
    }
})

const AccountPayment = createAppContainer(RootStack);
export default AccountPayment