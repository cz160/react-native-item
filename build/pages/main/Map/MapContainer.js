import React, { Component } from 'react';
import { View, WebView } from 'react-native';
//创建一个原生的 WebView，可以用于访问一个网页。
export default class MapContainer extends Component {
    render() {
        return (React.createElement(View, { style: { flex: 1 } },
            React.createElement(WebView, { style: { flex: 1 }, source: { uri: 'http://www.czhuangjia.top/blog' } })));
    }
}
//# sourceMappingURL=MapContainer.js.map