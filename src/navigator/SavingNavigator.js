import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Metrics from '../common/Metrics';
import SavingScreen from '../component/main/saving/SavingScreen';
import CreateAccount from '../component/main/saving/child/CreateAccount';
import ConfirmCreate from '../component/main/saving/child/ConfirmCreate';
import Detail from '../component/main/saving/child/DetailAccount';

const RootStack = createStackNavigator({
    SavingScreen:{
        screen: SavingScreen,
        // screen: Detail,
        navigationOptions: {
            title:'Danh sách tiền gửi',
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
      
    CreateAccount:{
        screen: CreateAccount,
        navigationOptions:()=>({
        title:'Mở tài khoản tiết kiệm',
        tabBarVisible:false,
        headerTitleStyle:{
            textAlign:"center",
            flex: 1,
            fontSize:Metrics.headerFontSize,
        },
        headerStyle:{
            height:Metrics.navigationBarHeight,
        },
    })
    },

    Detail:{
        screen: Detail,
        navigationOptions:()=>({
        title:'Chi tiết tài khoản',
        tabBarVisible:false,
        headerTitleStyle:{
            textAlign:"center",
            flex: 1,
            fontSize:Metrics.headerFontSize,
        },
        headerStyle:{
            height:Metrics.navigationBarHeight,
        },
    })
    },

    ConfirmCreateSaving:{
        screen: ConfirmCreate,
        navigationOptions:()=>({
            title:'Xác nhận Mở tài khoản',
            tabBarVisible:false,
            headerTitleStyle:{
                textAlign:"center",
                flex: 1,
                fontSize:Metrics.headerFontSize,
            },
            headerStyle:{
                height:Metrics.navigationBarHeight,
            },
        })
    }
    ,
})


const SavingNavigator = createAppContainer(RootStack);

SavingNavigator.navigationOptions=({navigation}) =>{
    let tabBarVisible = true;
    let routeName = navigation.state.routes[navigation.state.index].routeName
    if ( routeName == 'CreateAccount' || routeName == 'ConfirmCreateSaving' || routeName == 'Detail') {
        tabBarVisible = false
    }
    return {
        tabBarVisible,
    }
}
export default SavingNavigator