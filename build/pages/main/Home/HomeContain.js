import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
//轮播图
import Swiper from './swiper/swiper';
//热门分类
import HotMute from './HotMune/HotMune';
//精品好菜
import BatterFood from './BatterFood/BatterFood';
export default class HomeContain extends Component {
    render() {
        return (React.createElement(ScrollView, null,
            React.createElement(View, { style: styles.HomeContain },
                React.createElement(Swiper, null),
                React.createElement(HotMute, null),
                React.createElement(BatterFood, null))));
    }
}
const styles = StyleSheet.create({
    HomeContain: {
        flex: 1,
        backgroundColor: '#f9f9f9'
    }
});
//# sourceMappingURL=HomeContain.js.map