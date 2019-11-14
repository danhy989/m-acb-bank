import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SavingScreen from '../component/main/saving/SavingScreen';
import CreateSaving from '../component/main/saving/child/CreateSaving';

const RootStack = createStackNavigator({
    SavingScreen:{
        screen: CreateSaving,
        navigationOptions: {
            header: null,
        }
    }
})

const SavingNavigator = createAppContainer(RootStack);
export default SavingNavigator