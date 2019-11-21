import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../component/main/home/HomeScreen';
import Account from '../component/main/home/child/Account';
import Metrics from '../common/Metrics';
import ATMCard from '../component/main/home/child/ATMCard';
import ATMCardDetail from '../component/main/home/child/ATMCardDetail';
import TransferInfo from '../component/main/home/child/TransferInfo';

const RootStack = createStackNavigator({
    HomeScreen:{
        screen: HomeScreen,
        navigationOptions:  {
            header: null,
        }
    },
    Account:{
        screen: Account,     
        navigationOptions: {
            title:'Tài khoản thanh toán',
            headerTitleStyle: { 
            textAlign:"center", 
            flex:1 ,
            fontSize:Metrics.headerFontSize,
        },
        }
    },
        Detail:{
        screen: TransferInfo,
        navigationOptions: () =>({
            title:'Tài khoản thanh toán',
            headerTitleStyle: { 
            textAlign:"center", 
            flex:1 ,
            fontSize:Metrics.headerFontSize,
        },
        })
    }
    
})

const HomeNavigator = createAppContainer(RootStack);
export default HomeNavigator