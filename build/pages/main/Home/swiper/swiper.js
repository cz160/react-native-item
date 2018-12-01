import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';
export default class HomeContain extends Component {
    constructor(Props) {
        super(Props);
        this.state = {
            items: [
                { id: 0, img: 'https://s1.cdn.jiaonizuocai.com/caipu/201605/1515/151554197122.jpg/OTAweDYwMA' },
                { id: 1, img: 'https://s1.cdn.jiaonizuocai.com/caipu/201605/1816/181618262807.jpg/OTAweDYwMA' },
                { id: 3, img: 'https://s1.cdn.jiaonizuocai.com/caipu/201508/1617/200105387287.jpg/OTAweDYwMA' },
                { id: 4, img: 'https://s1.cdn.jiaonizuocai.com/caipu/201604/1710/171031541292.jpg/OTAweDYwMA' },
                { id: 5, img: 'https://s1.cdn.jiaonizuocai.com/caipu/201503/2020/202041142728.jpg/OTAweDYwMA' }
            ]
        };
    }
    // async getDate(){
    //     let res:any= await Fetch('/mock/cookbook-list.json')
    //     this.setState({
    //         items:_.sampleSize(res.data,5)
    //     })
    // }
    // componentDidMount(){
    //    this.getDate()
    // }
    renderItem() {
        let { items } = this.state;
        return (React.createElement(Swiper, { autoplay: true }, items.map((item) => (React.createElement(View, { key: item.id },
            React.createElement(Image, { style: styles.item, source: { uri: item.img } }))))));
    }
    render() {
        return (React.createElement(View, { style: styles.swipercontain }, this.renderItem()));
    }
}
const styles = StyleSheet.create({
    swipercontain: {
        width: '100%',
        height: 250
    },
    item: {
        width: '100%',
        height: '100%'
    }
});
//# sourceMappingURL=swiper.js.map