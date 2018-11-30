import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default class App extends React.Component {
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(Text, { style: styles.title }, "HELLO WORLD!!!!!!")));
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: 'deeppink',
        fontSize: 30
    }
});
//# sourceMappingURL=App.js.map