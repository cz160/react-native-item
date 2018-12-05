import React,{Component} from 'react';
import { StyleSheet, Text, View,Image,StatusBar } from 'react-native';
import TabNavigator from 'react-native-tab-navigator'
//引入图片资源
const cookBook = require('../../../assets/images/cookbook.png')
const cookBookActive = require('../../../assets/images/cookbook-active.png')
const menu = require('../../../assets/images/menu.png')
const menuActive = require('../../../assets/images/menu-active.png')
const location = require('../../../assets/images/location.png')
const locationActive = require('../../../assets/images/location-active.png')
const more = require('../../../assets/images/more.png')
const moreActive = require('../../../assets/images/more-active.png')
//引入每个页面的组件
import HomeContain from './Home/HomeContain'
import MuteContain from './Mute/MuteContainer'
import MapContain from './Map/MapContainer'
import MineContain from './Mine/MineContainer'
import {inject} from 'mobx-react'
import uuid from 'uuid'
interface Props {
    navigation:any,
    store?:any
}
interface State {
    selectedTab:string,
    navs:Array<any>
}
@inject('store')
export default class MainContainer extends Component <Props,State> {
    static navigationOptions:any = {
        title:'小昭制作',
        // header:null
    }
    constructor(Props:any){
        super(Props)
        this.state = {
            selectedTab:'home',
            navs:[
                {id:uuid(),name:'home','title':'菜谱大全',icon:cookBook,iconActive:cookBookActive,component:<HomeContain />},
                {id:uuid(),name:'mune','title':'分类',icon:menu,iconActive:menuActive,component:<MuteContain />},
                {id:uuid(),name:'map','title':'博客分享',icon:location,iconActive:locationActive,component:<MapContain />},
                {id:uuid(),name:'more','title':'个人中心',icon:more,iconActive:moreActive,component:<MineContain />},
            ]
        }
    }
    componentWillMount () {
        this.props.store.Navigation.setNavigation(this.props.navigation)
    }
    renderItem(){
        let {navs} = this.state;
        return navs.map(item=>(
            <TabNavigator.Item
                key={item.id}
                selected={this.state.selectedTab === item.name}
                title={item.title}
                selectedTitleStyle={{color:'black'}}
                renderIcon={() => <Image style={styles.icon} source={item.icon} />}
                renderSelectedIcon={() => <Image style={styles.icon} source={item.iconActive} />}
                onPress={() => this.setState({ selectedTab: item.name })}>
                {item.component}
            </TabNavigator.Item>
        ))
    }
    render() {
      return (
        <View style={styles.container}>
            <StatusBar  
                    animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden  
                    hidden={false}  //是否隐藏状态栏。  
                    backgroundColor={'green'} //状态栏的背景色  
                    translucent={false}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。  
                    barStyle={'default'} // enum('default', 'light-content', 'dark-content')   
            />
            <TabNavigator>
                {this.renderItem()}
            </TabNavigator>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    icon:{
        width:30,
        height:30
    }
  });