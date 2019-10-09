import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Metrics from "../common/Metrics";
import MoreScreen from "../component/main/more/MoreScreen";
import UserInfoScreen from "../component/main/more/child/UserInfoScreen"
import ShareInfoScreen from "../component/main/more/child/ShareInfoScreen"
import AllSettingScreen from "../component/main/more/child/AllSettingScreen"
import NewsScreen from "../component/main/more/child/NewsScreen"
import ExchangeRateScreen from "../component/main/more/child/ExchangeRateScreen"
import LocationScreen from "../component/main/more/child/LocationScreen"
import TermScreen from "../component/main/more/child/TermScreen"
import QuestionScreen from "../component/main/more/child/QuestionScreen"
import ContactScreen from "../component/main/more/child/ContactScreen"
import React from 'react';
import { View, Text, Image, TouchableNativeFeedback } from 'react-native'
import { blue } from 'ansi-colors';
import { Icon } from 'react-native-elements'

const HEADER_HEIGHT = Metrics.screenHeight / 4;


class UserInfoTitle extends React.Component {
    render() {
        const COLOR_LINK = "#00aced"
        return (
            <View style={{ left: Metrics.screenWidth / 4 }}>
                <View style={{ flex: 1, marginVertical: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ flex: 2 }} source={require("../assets/img/src_assets_ic_welcome_user_ic_welcome_user.png")} resizeMode="contain"></Image>
                    <View style={{ flex: 1 }}>
                        <Text style={{ textAlign: 'center', marginBottom: 5 }}>VU NGOC DUY ANH</Text>
                        <TouchableNativeFeedback style={{ borderBottomColor: blue }} onPress={()=>alert('On Clicked')}>
                            <View style={{flexDirection:'row'}}>
                                <Icon
                                    name='camera'
                                    color={COLOR_LINK} />
                                <Text style={{  paddingHorizontal:5,color: COLOR_LINK, borderBottomWidth: 1, borderBottomColor: COLOR_LINK }}>Đổi ảnh đại diện</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </View>
            </View>
        );
    }
}

const RootStack = createStackNavigator({
    MoreScreen: {
        screen: MoreScreen,
        navigationOptions: {
            header: null,
        }
    },

    UserInfoScreen: {
        screen: UserInfoScreen,
        navigationOptions: {
            headerTitle: <UserInfoTitle />,
            headerStyle: { height: HEADER_HEIGHT },
        }
    },

    AllSettingScreen: {
        screen: AllSettingScreen,
        navigationOptions: () => ({
            title: `Cài đặt chung`,
            headerTitleStyle: {
                textAlign: "center",
                flex: 1,
                fontSize: Metrics.headerFontSize,
            },
        }),
    },

    ShareInfoScreen: {
        screen: ShareInfoScreen,
        navigationOptions: () => ({
            title: `Chia sẻ thông tin`,
            headerTitleStyle: {
                textAlign: "center",
                flex: 1,
                fontSize: Metrics.headerFontSize,
            },
        }),
    },

    NewsScreen: {
        screen: NewsScreen,
        navigationOptions: () => ({
            title: `Tin tức`,
            headerTitleStyle: {
                textAlign: "center",
                flex: 1,
                fontSize: Metrics.headerFontSize,
            },
        }),
    },
    ExchangeRateScreen: {
        screen: ExchangeRateScreen,
        navigationOptions: () => ({
            title: `Tỷ giá đối hoái`,
            headerTitleStyle: {
                textAlign: "center",
                flex: 1,
                fontSize: Metrics.headerFontSize,
            },
        }),
    },
    LocationScreen: {
        screen: LocationScreen,
        navigationOptions: () => ({
            title: `Địa điểm`,
            headerTitleStyle: {
                textAlign: "center",
                flex: 1,
                fontSize: Metrics.headerFontSize,
            },
        }),
    },
    TermScreen: {
        screen: TermScreen,
        navigationOptions: () => ({
            title: `Điều kiện & Điều khoản`,
            headerTitleStyle: {
                textAlign: "center",
                flex: 1,
                fontSize: Metrics.headerFontSize,
            },
        }),
    },
    QuestionScreen: {
        screen: QuestionScreen,
        navigationOptions: () => ({
            title: `Câu hỏi thường gặp`,
            headerTitleStyle: {
                textAlign: "center",
                flex: 1,
                fontSize: Metrics.headerFontSize,
            },
        }),
    },
    ContactScreen: {
        screen: ContactScreen,
        navigationOptions: () => ({
            title: `Thông tin liên hệ`,
            headerTitleStyle: {
                textAlign: "center",
                flex: 1,
                fontSize: Metrics.headerFontSize,
            },
        }),
    },

});

const MoreNavigator = createAppContainer(RootStack);

export default MoreNavigator;