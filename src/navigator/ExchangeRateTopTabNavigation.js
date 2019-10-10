import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import ExchangeRateScreen from '../component/main/more/child/exchangeRate-child/ExchangeRateScreen';
import GoldPriceScreen from '../component/main/more/child/exchangeRate-child/GoldPriceScreen';

const TEXT_AND_INDICATOR_COLOR = '#2177C8'

const TabNavigator = createMaterialTopTabNavigator({

    ExchangeRateScreen: { screen: ExchangeRateScreen, navigationOptions: { title: "Tỷ giá" } },
    GoldPriceScreen: { screen: GoldPriceScreen, navigationOptions: { title: "Giá vàng" } },
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

export default ExchangeRateTopTabNavigation = createAppContainer(App);
