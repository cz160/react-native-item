import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
//引入图片资源
const cookBook = require('../../../assets/images/cookbook.png');
const cookBookActive = require('../../../assets/images/cookbook-active.png');
const menu = require('../../../assets/images/menu.png');
const menuActive = require('../../../assets/images/menu-active.png');
const location = require('../../../assets/images/location.png');
const locationActive = require('../../../assets/images/location-active.png');
const more = require('../../../assets/images/more.png');
const moreActive = require('../../../assets/images/more-active.png');
//引入每个页面的组件
import HomeContain from './Home/HomeContain';
import uuid from 'uuid';
export default class MainContainer extends Component {
    constructor(Props) {
        super(Props);
        this.state = {
            selectedTab: 'home',
            navs: [
                { id: uuid(), name: 'home', 'title': '菜谱大全', icon: cookBook, iconActive: cookBookActive, component: React.createElement(HomeContain, null) },
                { id: uuid(), name: 'mune', 'title': '分类', icon: menu, iconActive: menuActive, component: React.createElement(Text, null, "\u5206\u7C7B") },
                { id: uuid(), name: 'map', 'title': '地图', icon: location, iconActive: locationActive, component: React.createElement(Text, null, "\u5730\u56FE") },
                { id: uuid(), name: 'more', 'title': '个人中心', icon: more, iconActive: moreActive, component: React.createElement(Text, null, "\u4E2A\u4EBA\u4E2D\u5FC3") },
            ]
        };
    }
    renderItem() {
        let { navs } = this.state;
        return navs.map(item => (React.createElement(TabNavigator.Item, { key: item.id, selected: this.state.selectedTab === item.name, title: item.title, selectedTitleStyle: { color: 'black' }, renderIcon: () => React.createElement(Image, { style: styles.icon, source: item.icon }), renderSelectedIcon: () => React.createElement(Image, { style: styles.icon, source: item.iconActive }), onPress: () => this.setState({ selectedTab: item.name }) }, item.component)));
    }
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(TabNavigator, null, this.renderItem())));
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 28
    },
    icon: {
        width: 30,
        height: 30
    }
});
//# sourceMappingURL=MainContain.js.map