import React from 'react';
import { Provider } from 'mobx-react';
import { createStackNavigator } from 'react-navigation';
import MainContainer from './pages/main/MainContain';
import ListContainer from './pages/List/ListContainer';
const AppNavigator = createStackNavigator({
    Home: {
        screen: MainContainer
    },
    List: {
        screen: ListContainer
    },
    initialRouteName: "Home"
});
import store from './store';
export default class App extends React.Component {
    render() {
        return (React.createElement(Provider, { store: store },
            React.createElement(AppNavigator, null)));
    }
}
//# sourceMappingURL=App.js.map