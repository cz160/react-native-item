var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { inject, observer } from 'mobx-react';
let FoodList = class FoodList extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        //派发action修改数据
        this.props.store.List.getFoodList();
    }
    renderItems() {
        let { foodlist, getSomeFoodList } = this.props.store.List;
        if (!foodlist.length)
            return false;
        let { pageNo = 1, pageSize = 10 } = this.props;
        return getSomeFoodList(pageNo, pageSize).map((item, i) => (React.createElement(View, { key: i, style: styles.listItem },
            React.createElement(Image, { style: styles.listItemImage, source: { uri: item.img } }),
            React.createElement(View, { style: styles.listItemInfo },
                React.createElement(Text, { style: styles.listItemTitle }, item.name),
                React.createElement(Text, { style: styles.listItemDesc },
                    item.all_click,
                    "\u6D4F\u89C8\u00A0",
                    item.favorites,
                    "\u6536\u85CF")))));
    }
    render() {
        return (React.createElement(View, { style: styles.listContainer }, this.renderItems()));
    }
};
FoodList = __decorate([
    inject('store') //注入store
    ,
    observer //监听数据的变化
], FoodList);
const styles = StyleSheet.create({
    listContainer: {
        padding: 12,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    listItem: {
        width: '48%',
        backgroundColor: '#fff'
    },
    listItemImage: {
        width: '100%',
        height: 200
    },
    listItemInfo: {
        padding: 10,
        alignItems: 'center'
    },
    listItemTitle: {
        color: '#333'
    },
    listItemDesc: {
        color: '#666',
        fontSize: 10,
        paddingTop: 5
    }
});
export default FoodList;
//# sourceMappingURL=FoodList.js.map