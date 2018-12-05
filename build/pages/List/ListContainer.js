var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Text, Dimensions, Image } from 'react-native';
import { inject } from 'mobx-react';
import uuid from 'uuid';
const { height, width } = Dimensions.get('window');
let ListContainer = class ListContainer extends Component {
    constructor(Props) {
        super(Props);
        this._renderItem = (props) => {
            let { item, index } = props;
            return (React.createElement(View, { key: index, style: styles.listItem },
                React.createElement(Image, { style: styles.listItemImage, source: { uri: item.img } }),
                React.createElement(View, { style: styles.listItemInfo },
                    React.createElement(Text, { style: styles.listItemTitle }, item.name),
                    React.createElement(Text, { style: styles.listItemDesc },
                        item.all_click,
                        "\u6D4F\u89C8\u00A0",
                        item.favorites,
                        "\u6536\u85CF"))));
        };
        //渲染分割线
        this._separator = () => {
            return React.createElement(View, { style: { height: 10, backgroundColor: '#fff' } });
        };
        //下拉刷新
        this._onRefresh = () => {
            this.setState({
                refreshing: true,
            });
            if (!this.state.refreshing) {
                let num = Math.ceil(Math.random() * 5);
                this.pageNo = num;
                this.setState({
                    lists: this.getList()
                });
            }
        };
        //上拉加载
        this._onEndReached = () => {
            this.setState({
                refreshing: true,
            }, () => {
                this.pageNo++;
                let list = [...this.state.lists, ...this.getList()];
                this.setState({
                    lists: list
                });
            });
        };
        this.state = {
            lists: [],
            refreshing: false
        };
        this.pageNo = 1,
            this.pageSize = 10;
    }
    getList() {
        this.setState({
            refreshing: false
        });
        let { foodlist } = this.props.store.List;
        let start = (this.pageNo - 1) * (this.pageSize);
        let end = start + (this.pageSize);
        return foodlist.slice(start, end);
    }
    componentDidMount() {
        this.setState({
            lists: this.getList()
        });
    }
    render() {
        return (React.createElement(View, { style: { flex: 1 } },
            React.createElement(View, { style: { flex: 1 } },
                React.createElement(FlatList, { ref: (flatList) => this._flatList = flatList, ItemSeparatorComponent: this._separator, renderItem: this._renderItem, 
                    //每行几个item
                    numColumns: 2, columnWrapperStyle: styles.listContainer, refreshing: this.state.refreshing, 
                    //下拉刷新
                    onRefresh: this._onRefresh, onEndReachedThreshold: 0.1, 
                    //上拉加载
                    onEndReached: this._onEndReached, keyExtractor: (item, index) => {
                        return uuid();
                    }, data: this.state.lists }))));
    }
};
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
ListContainer = __decorate([
    inject('store')
], ListContainer);
const styles = StyleSheet.create({
    listContainer: {
        padding: 12,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    listItem: {
        width: "48%",
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
export default ListContainer;
//# sourceMappingURL=ListContainer.js.map