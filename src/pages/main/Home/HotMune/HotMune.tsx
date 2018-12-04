import React,{Component} from 'react'
import {View,Text,StyleSheet, Alert,TouchableHighlight } from 'react-native'
import {Fetch} from '../../../../util'
import { inject, observer } from 'mobx-react'
interface Props{
    store?:any
}
interface State {
    items:Array<any>
}
@inject('store')
@observer
export default class HotMute extends Component <Props,State>{
    constructor(Props:any){
        super(Props)
        this.state = {
            items:[]
        }
    }
    async componentDidMount(){
        let res:any = await Fetch('/mock/cookbook-category.json')
        let items = Object.keys(res.data.category)
        items.push('更多...')
        this.setState({
            items
        })
        
    }
    rendItem(){
        let {items} = this.state
        return items.map((item,i)=>(
            <View style={styles.hotItem} key={i}>
                <TouchableHighlight
                    //切换页面
                    onPress={()=>{
                        this.props.store.Navigation.navigation.navigate('List',{
                            title:item
                        })
                    }}
                >
                    <Text>{item}</Text>
                </TouchableHighlight>
                
            </View>
        ))
    }
    render(){
        return (
            <View style={styles.hotContainer}>
                <View style={styles.hotTitle}> 
                    <Text style={styles.hotTitleText}>热门分类</Text>
                </View>
                <View style={styles.hotContent}>
                    {this.rendItem()}
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    hotContainer:{
        backgroundColor: '#fff',
        paddingBottom: 12
    },
    hotTitle:{
        padding: 12
    },
    hotTitleText:{
        color: '#333'
    },
    hotContent:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'flex-start'
    },
    hotItem:{
        width: '25%', 
        padding: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        marginLeft: -1,
        marginTop: -1, 
        alignItems: 'center'
    }
})