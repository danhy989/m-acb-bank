import { createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import TransferScreen from '../component/main/transfer/TransferScreen';
import ListBank from '../component/main/transfer/child/ListBank';
import TKNH from '../component/main/transfer/child/TKNH';
import BankCard from '../component/main/transfer/child/BankCard';
import TKNHNavigator from './TKNHNavigator';

const RootStack = createStackNavigator({
    TransferScreen:{
        screen: TransferScreen,
        navigationOptions: {
            header: null,
        }
    },

    TKNH:{
        screen: TKNHNavigator,
    }

})

const TransferNavigator = createAppContainer(RootStack);
export default TransferNavigator;