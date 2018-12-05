var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React, { Component } from 'react';
import { StyleSheet, View, Image, StatusBar } from 'react-native';
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
import MuteContain from './Mute/MuteContainer';
import MapContain from './Map/MapContainer';
import MineContain from './Mine/MineContainer';
import { inject } from 'mobx-react';
import uuid from 'uuid';
let MainContainer = class MainContainer extends Component {
    constructor(Props) {
        super(Props);
        this.state = {
            selectedTab: 'home',
            navs: [
                { id: uuid(), name: 'home', 'title': '菜谱大全', icon: cookBook, iconActive: cookBookActive, component: React.createElement(HomeContain, null) },
                { id: uuid(), name: 'mune', 'title': '分类', icon: menu, iconActive: menuActive, component: React.createElement(MuteContain, null) },
                { id: uuid(), name: 'map', 'title': '博客分享', icon: location, iconActive: locationActive, component: React.createElement(MapContain, null) },
                { id: uuid(), name: 'more', 'title': '个人中心', icon: more, iconActive: moreActive, component: React.createElement(MineContain, null) },
            ]
        };
    }
    componentWillMount() {
        this.props.store.Navigation.setNavigation(this.props.navigation);
    }
    renderItem() {
        let { navs } = this.state;
        return navs.map(item => (React.createElement(TabNavigator.Item, { key: item.id, selected: this.state.selectedTab === item.name, title: item.title, selectedTitleStyle: { color: 'black' }, renderIcon: () => React.createElement(Image, { style: styles.icon, source: item.icon }), renderSelectedIcon: () => React.createElement(Image, { style: styles.icon, source: item.iconActive }), onPress: () => this.setState({ selectedTab: item.name }) }, item.component)));
    }
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(StatusBar, { animated: true, hidden: false, backgroundColor: 'green', translucent: false, barStyle: 'default' }),
            React.createElement(TabNavigator, null, this.renderItem())));
    }
};
MainContainer.navigationOptions = {
    title: '小昭制作',
};
MainContainer = __decorate([
    inject('store')
], MainContainer);
export default MainContainer;
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    icon: {
        width: 30,
        height: 30
    }
});
//# sourceMappingURL=MainContain.js.map