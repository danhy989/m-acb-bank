import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../component/main/home/HomeScreen';
import Account from '../component/main/home/child/Account';
import Metrics from '../common/Metrics';
import AccountPayment from './AccountPayment';
import ATMCard from '../component/main/home/child/ATMCard';
import ATMCardDetail from '../component/main/home/child/ATMCardDetail';

const RootStack = createStackNavigator({
    HomeScreen:{
        screen: HomeScreen,
        navigationOptions:  {
            header: null,
        }
    },

    Account:{
        screen: AccountPayment,     
        navigationOptions: () =>({
            title: 'Tài khoản thanh toán',
            headerTitleStyle:{
                flex: 1,
                textAlign: "center",
                fontSize: Metrics.headerFontSize,
            },
            headerStyle:{
                height: 35,
            }
        })  
    }
})

const HomeNavigator = createAppContainer(RootStack);
export default HomeNavigator