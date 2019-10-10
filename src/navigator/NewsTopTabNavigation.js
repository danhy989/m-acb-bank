import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import React from 'react';
import NotificationScreen from '../component/main/more/child/news-child/NotificationScreen';
import EndowScreen from '../component/main/more/child/news-child/EndowScreen';

const TEXT_AND_INDICATOR_COLOR = '#2177C8'

const TabNavigator = createMaterialTopTabNavigator({

    NotificationScreen: { screen: NotificationScreen, navigationOptions: { title: "Thông báo" } },
    EndowScreen: { screen: EndowScreen, navigationOptions: { title: "Ưu đãi" } },
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

export default NewsTopTabNavigation = createAppContainer(App);
