import React, { Component } from 'react';
import FoodList from '../Home/BatterFood/FoodList';
import { ScrollView } from 'react-native';
export default class MuteContainer extends Component {
    render() {
        return (React.createElement(ScrollView, null,
            React.createElement(FoodList, { pageNo: 2, pageSize: 30 })));
    }
}
//# sourceMappingURL=MuteContainer.js.map