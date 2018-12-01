import React,{Component} from 'react'
import {View,Text,StyleSheet, Alert} from 'react-native'
import {Fetch} from '../../../../util'
interface Props{}
interface State {
    items:Array<any>
}
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
                <Text>{item}</Text>
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