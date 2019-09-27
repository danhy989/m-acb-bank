/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { TabNavigator } from 'react-navigation';
import App from './App';
import {name as appName} from './app.json';
import HomeScreen from './src/component/main/HomeScreen';
import MoreScreen from './src/component/main/MoreScreen';

let routeConfigs = {
    Home: {
        screen: HomeScreen,
    },
    More: {
        screen: MoreScreen,
    },
}

let tabNavigatorConfig = {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
} 
AppRegistry.registerComponent(appName, () => App);
