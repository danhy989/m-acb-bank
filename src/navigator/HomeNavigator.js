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
        headerStyle:{
            height:Metrics.navigationBarHeight,
        }
        }
    },
    Detail:{
        screen: TransferInfo,
        navigationOptions: () =>({
            title:'Tài khoản thanh toán',
            headerTitleStyle: { 
            textAlign:"center", 
            flex:1,
            fontSize:Metrics.headerFontSize,
        },
        headerStyle:{
            height:Metrics.navigationBarHeight,
        }
        })
    },

    ATMCard:{
        screen: ATMCard,
        navigationOptions:()=>({
            title:'Danh sách thẻ',
            headerTitleStyle:{
                textAlign:"center",
                flex: 1,
                fontSize:Metrics.headerFontSize,
            },
            headerStyle:{
                height:Metrics.navigationBarHeight,
            }
        })
    },

    ATMCardDetail:{
        screen: ATMCardDetail,
        navigationOptions:()=>({
            title:'Chi tiết thẻ',
            headerTitleStyle:{
                textAlign:"center",
                flex: 1,
                fontSize:Metrics.headerFontSize,
            },
            headerStyle:{
                height:Metrics.navigationBarHeight,
            }
        })
    },
    
})

const HomeNavigator = createAppContainer(RootStack);
HomeNavigator.navigationOptions=({navigation}) =>{
    let tabBarVisible = true;
    let routeName = navigation.state.routes[navigation.state.index].routeName
    if ( routeName == 'Detail' || routeName=='ATMCard' || routeName == 'ATMCardDetail') {
        tabBarVisible = false
    }
    return {
        tabBarVisible,
    }
}
export default HomeNavigator