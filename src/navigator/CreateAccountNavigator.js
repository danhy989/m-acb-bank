import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Metrics from '../common/Metrics';
import SavingScreen from '../component/main/saving/SavingScreen';
import CreateAccount from '../component/main/saving/child/CreateAccount';
import ConfirmCreate from '../component/main/saving/child/ConfirmCreate';
import Detail from '../component/main/saving/child/DetailAccount';

const RootStack = createStackNavigator({  
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
  },
})


const CreateAccountNavigator = createAppContainer(RootStack);

CreateAccountNavigator.navigationOptions=({navigation}) =>{
    let tabBarVisible = true;
    let routeName = navigation.state.routes[navigation.state.index].routeName
    if ( routeName == 'CreateAccount' || routeName == 'ConfirmCreateSaving') {
        tabBarVisible = false
    }
    return {
        tabBarVisible,
    }
}
export default CreateAccountNavigator