import React,{Component} from 'react'
import {View,StyleSheet,Image } from 'react-native'
import Swiper from 'react-native-swiper';
import {Fetch} from '../../../../util'
import _ from 'lodash'
interface Props{}
interface State{
    items:Array<any>
}
export default class HomeContain extends Component <Props,State>{
    constructor(Props:any){
        super(Props)
        this.state = {
            items:[
                {id:0,img:'https://s1.cdn.jiaonizuocai.com/caipu/201605/1515/151554197122.jpg/OTAweDYwMA'},
                {id:1,img:'https://s1.cdn.jiaonizuocai.com/caipu/201605/1816/181618262807.jpg/OTAweDYwMA'},
                {id:3,img:'https://s1.cdn.jiaonizuocai.com/caipu/201508/1617/200105387287.jpg/OTAweDYwMA'},
                {id:4,img:'https://s1.cdn.jiaonizuocai.com/caipu/201604/1710/171031541292.jpg/OTAweDYwMA'},
                {id:5,img:'https://s1.cdn.jiaonizuocai.com/caipu/201503/2020/202041142728.jpg/OTAweDYwMA'}
            ]
        }
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
    renderItem(){
        let {items} = this.state 
        return (
            <Swiper autoplay={true}>
                {
                    items.map((item)=>(
                        <View key={item.id}>
                            <Image style = {styles.item} source={{uri:item.img}}></Image>
                        </View>
                    ))
                }
            </Swiper>
        ) 
    }
    render(){
        return (
                <View style={styles.swipercontain}>
                    {this.renderItem()}
                </View>
        )
    }
}
const styles = StyleSheet.create({
    swipercontain:{
        width:'100%',
        height:250
    },
    item:{
        width:'100%',
        height:'100%'
    }
})