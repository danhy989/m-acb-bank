import { createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import TransferScreen from '../component/main/transfer/TransferScreen';
import ListBank from '../component/main/transfer/child/ListBank';
import TKNH from '../component/main/transfer/child/TKNH';
import BankCard from '../component/main/transfer/child/BankCard';

const RootStack = createStackNavigator({
    TKNH:{
        screen: TKNH,
        navigationOptions: {
            header: null,
        }
    }


})

const TKNHNavigator = createAppContainer(RootStack);
export default TKNHNavigator;