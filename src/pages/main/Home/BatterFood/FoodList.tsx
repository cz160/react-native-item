import React,{Component} from 'react'
import {View,Text,StyleSheet, Image,Alert} from 'react-native'
import {inject,observer} from 'mobx-react'
interface Props{
    store?:any,
    pageNo?:number,
    pageSize?:number
}
interface State {}
@inject('store')  //注入store
@observer  //监听数据的变化
 class FoodList extends Component <Props,State>{
    constructor(props:any){
        super(props)
    }
    componentDidMount(){
        //派发action修改数据
        this.props.store.List.getFoodList()
    }
    renderItems(){
        let { foodlist,getSomeFoodList } = this.props.store.List
        if(!foodlist.length)return false
        let {pageNo=1,pageSize=10} = this.props
        return getSomeFoodList(pageNo,pageSize).map((item:any,i:number)=>(
            <View  key={i} style={styles.listItem}>
                <Image style={styles.listItemImage} source={{uri:item.img}}></Image>
                <View style={styles.listItemInfo}>
                    <Text style={styles.listItemTitle}>{item.name}</Text>
                    <Text style={styles.listItemDesc}>{item.all_click}浏览&nbsp;{item.favorites}收藏</Text>
                </View>
            </View>
        ))
    }
    render(){
        return (
            <View style={styles.listContainer}>
                {this.renderItems()}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    listContainer:{
        padding:12,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    listItem:{
        width: '48%',
        backgroundColor: '#fff'
    },
    listItemImage:{
        width: '100%',
        height: 200
    },
    listItemInfo:{
        padding: 10,
        alignItems: 'center'
    },
    listItemTitle:{
        color: '#333'
    },
    listItemDesc:{
        color: '#666',
        fontSize: 10,
        paddingTop: 5
    }
})
export default FoodList