var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Fetch } from '../../../../util';
export default class HotMute extends Component {
    constructor(Props) {
        super(Props);
        this.state = {
            items: []
        };
    }
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield Fetch('/mock/cookbook-category.json');
            let items = Object.keys(res.data.category);
            items.push('更多...');
            this.setState({
                items
            });
        });
    }
    rendItem() {
        let { items } = this.state;
        return items.map((item, i) => (React.createElement(View, { style: styles.hotItem, key: i },
            React.createElement(Text, null, item))));
    }
    render() {
        return (React.createElement(View, { style: styles.hotContainer },
            React.createElement(View, { style: styles.hotTitle },
                React.createElement(Text, { style: styles.hotTitleText }, "\u70ED\u95E8\u5206\u7C7B")),
            React.createElement(View, { style: styles.hotContent }, this.rendItem())));
    }
}
const styles = StyleSheet.create({
    hotContainer: {
        backgroundColor: '#fff',
        paddingBottom: 12
    },
    hotTitle: {
        padding: 12
    },
    hotTitleText: {
        color: '#333'
    },
    hotContent: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'flex-start'
    },
    hotItem: {
        width: '25%',
        padding: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        marginLeft: -1,
        marginTop: -1,
        alignItems: 'center'
    }
});
//# sourceMappingURL=HotMune.js.map