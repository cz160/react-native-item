import React from 'react';
import { Provider } from 'mobx-react'
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation'
import MainContainer from './pages/main/MainContain'
import ListContainer from './pages/List/ListContainer'
const AppNavigator = createStackNavigator({
  Home:{
    screen:MainContainer
  },
  List:{
    screen:ListContainer
  },
  initialRouteName:"Home"
})
import store from './store'
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
         <AppNavigator></AppNavigator>
      </Provider>
    );
  }
}

