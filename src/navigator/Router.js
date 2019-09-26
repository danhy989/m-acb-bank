import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './../component/login/LoginScreen';
import MainScreen from './../component/main/MainScreen';
import SignInScreen from '../component/signIn/SignInScreen';

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
  },

  SignIn: {screen: SignInScreen,
    navigationOptions:{
      header:null,
    }
  }
});

const Router = createAppContainer(RootStack);

export default Router;


