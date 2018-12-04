import React, { Component } from 'react';
import { View, Text } from 'react-native';
class ListContainer extends Component {
    render() {
        return (React.createElement(View, null,
            React.createElement(Text, null, "\u8FD9\u662F\u5217\u8868\u9875")));
    }
}
//接受参数
ListContainer.navigationOptions = (props) => {
    return {
        title: props.navigation.getParam('title'),
        headerStyle: {
            backgroundColor: 'tomato',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    };
};
export default ListContainer;
//# sourceMappingURL=ListContainer.js.map