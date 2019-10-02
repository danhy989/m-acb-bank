import DDTTScreen from "../component/main/payment/child/DDTTScreen";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PaymentScreen from "../component/main/payment/PaymentScreen";
import Metrics from "../common/Metrics";
import PaymentScreen2 from "../component/main/payment/child/PaymentScreen2";
import PaymentScreen3 from "../component/main/payment/child/PaymentScreen3";


const RootStack = createStackNavigator({
    PaymentScreen:{
        screen:PaymentScreen,
        navigationOptions: {
            header: null,
        }
    },

    DDTT: {
      screen: DDTTScreen,
      navigationOptions: () => ({
        title: `Di động trả trước`,
        headerTitleStyle: { 
            textAlign:"center", 
            flex:1 ,
            fontSize:Metrics.headerFontSize,
        },
      }),
    },

    PaymentScreen2: {
        screen: PaymentScreen2,
        navigationOptions: () => ({
          title: `Thanh toán`,
          headerTitleStyle: { 
              textAlign:"center", 
              flex:1 ,
              fontSize:Metrics.headerFontSize,
          },
        }),
      },

      PaymentScreen3: {
        screen: PaymentScreen3,
        navigationOptions: () => ({
          title: `Thanh toán vé`,
          headerTitleStyle: { 
              textAlign:"center", 
              flex:1 ,
              fontSize:Metrics.headerFontSize,
          },
        }),
      },

  });
  
  const PaymentNavigator = createAppContainer(RootStack);
  
  export default PaymentNavigator;