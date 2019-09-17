import { Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');

const Metrics = {
    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
    navBarHeight: Platform.OS === 'ios' ? 54 : 66
};

export default Metrics;