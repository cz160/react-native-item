import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FoodList from './FoodList';
export default class BatterFood extends Component {
    render() {
        return (React.createElement(View, { style: styles.betterContainer },
            React.createElement(View, { style: styles.titleContainer },
                React.createElement(Text, { style: styles.title }, "\u7CBE\u54C1\u597D\u83DC")),
            React.createElement(FoodList, null)));
    }
}
const styles = StyleSheet.create({
    betterContainer: {
        backgroundColor: '#fff'
    },
    titleContainer: {
        padding: 12
    },
    title: {
        color: "#333"
    }
});
//# sourceMappingURL=BatterFood.js.map