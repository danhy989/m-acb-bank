import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './../component/login/LoginScreen';
import HomeScreen from '../component/main/HomeScreen';

const RootStack = createStackNavigator({
  Login: {screen: LoginScreen,
    navigationOptions:{
      header:null,
  }
  },

  Main: {screen: HomeScreen,
    navigationOptions:{
      header:null,
    }
  }
});

const Router = createAppContainer(RootStack);

export default Router;


