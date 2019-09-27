import React, { Component } from 'react';
import FlipToggle from 'react-native-flip-toggle-button';
import {Text, View, StyleSheet} from 'react-native';
export default class Swipe extends Component {
    constructor() {
        super();
        this.state = {
         isActive: false,
        };
      }

      ToggleFunction = () => {
        this.setState(state => ({
          isActive: !state.isActive
        }));
      };
    render(){
        return(
            <View style={swipeStyle.swipe}>
                <FlipToggle
                    value={this.state.isActive} 
                    buttonWidth={40}
                    buttonHeight={20}
                    buttonRadius={30}
                    sliderWidth={20}
                    sliderHeight={20}
                    sliderRadius={50}
                    sliderOnColor='#8a9ab5'
                    sliderOffColor= '#8a9ab5'
                    labelStyle={{ color: 'gray' }}
                    buttonOnColor='#dbe0eb'
                    buttonOffColor='#dbe0eb'
                    onToggle={(newstate) => {
                        this.ToggleFunction()
                    }}
                />
                <Text style={{marginStart: 5}}> Hiển thị số tiền </Text>
            </View>
        );
    }
}

const swipeStyle = StyleSheet.create({
    swipe:{
        alignSelf: "flex-start",
        marginStart: 10,
        marginTop: 10,
        flexDirection:'row',
    }
})