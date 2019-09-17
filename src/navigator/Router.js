import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './../component/LoginScreen';
import MainScreen from './../component/MainScreen';

const RootStack = createStackNavigator({
  Login: {screen: LoginScreen,
    navigationOptions:{
      header:null,
  }
  },

  Main: {screen: MainScreen,
    navigationOptions:{
      header:null,
    }
  }
});

const Router = createAppContainer(RootStack);

export default Router;


