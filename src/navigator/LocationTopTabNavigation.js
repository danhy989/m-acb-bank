import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import ExchangeRateScreen from '../component/main/more/child/exchangeRate-child/ExchangeRateScreen';
import GoldPriceScreen from '../component/main/more/child/exchangeRate-child/GoldPriceScreen';
import ATMScreen from '../component/main/more/child/location-child/ATMScreen';
import CDMScreen from '../component/main/more/child/location-child/CDMScreen';
import BranchScreen from '../component/main/more/child/location-child/BranchScreen';
import WUScreen from '../component/main/more/child/location-child/WUScreen';

const TEXT_AND_INDICATOR_COLOR = '#2177C8'

const TabNavigator = createMaterialTopTabNavigator({

    ATMScreen: { screen: ATMScreen, navigationOptions: { title: "ATM" } },
    CDMScreen: { screen: CDMScreen, navigationOptions: { title: "CDM" } },
    BranchScreen: { screen: BranchScreen, navigationOptions: { title: "Chi nhánh" } },
    WUScreen: { screen: WUScreen, navigationOptions: { title: "WU" } },
},
    {
        tabBarPosition: 'top',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: TEXT_AND_INDICATOR_COLOR,
            inactiveTintColor: "#000000",
            style: {
                backgroundColor: '#ffffff',
            },
            labelStyle: {
                textAlign: 'center',
            },
            indicatorStyle: {
                borderBottomColor: TEXT_AND_INDICATOR_COLOR,
                borderBottomWidth: 2,
            },
        },
    }
);

const App = createStackNavigator({
    TabScreen: {
        screen: TabNavigator,
        navigationOptions: {
            header: null
        },
    },
});

export default LocationTopTabNavigation = createAppContainer(App);
