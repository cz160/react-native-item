import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    FlatList,
    Text,
    Button,
    Dimensions,
    Image
} from 'react-native';
import {inject} from 'mobx-react'
import uuid from 'uuid'
const { height, width } = Dimensions.get('window');
interface Props{
    store:any
}
interface State{
    lists:Array<any>,
    refreshing:boolean,
}
@inject('store')
class ListContainer extends Component<Props,State>{
    //接受参数
    static navigationOptions = (props:any)=>{
        return {
            title:props.navigation.getParam('title'),
            headerStyle:{
                backgroundColor: 'tomato',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }
    }
    constructor(Props:any) {
        super(Props);
        this.state = {
            lists:[],
            refreshing: false
        };
        this.pageNo= 1,
        this.pageSize= 10
    }
    getList(){
        this.setState({
            refreshing:false
        })
        let {foodlist} = this.props.store.List
        let start = (this.pageNo-1)*(this.pageSize)
        let end = start+(this.pageSize)
        return foodlist.slice(start,end)
    }
    componentDidMount(){
        this.setState({
            lists:this.getList()
        })
    }
    _flatList:any
    pageNo:number
    pageSize:number
    _renderItem = (props:any) => {
        let {item,index} = props
        return (
            <View key={index} style={styles.listItem}>
                <Image style={styles.listItemImage} source={{uri:item.img}}></Image>
                <View style={styles.listItemInfo}>
                    <Text style={styles.listItemTitle}>{item.name}</Text>
                    <Text style={styles.listItemDesc}>{item.all_click}浏览&nbsp;{item.favorites}收藏</Text>
                </View>
            </View>
        )
    } 
    //渲染分割线
    _separator = () => {
        return <View style={{ height: 10, backgroundColor: '#fff' }}/>;
    }
    //下拉刷新
    _onRefresh=()=> {
        this.setState({
            refreshing:true,     
        }) 
        if(!this.state.refreshing){
            let num = Math.ceil(Math.random()*5)
            this.pageNo=num
            this.setState({
                lists:this.getList()
            })
        } 
    }
    //上拉加载
    _onEndReached=()=>{
        this.setState({
            refreshing:true,
        },()=>{
            this.pageNo++
            let list = [...this.state.lists,...this.getList()]
            this.setState({
                lists:list
            })
        })
        
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <FlatList
                        ref={(flatList:any) => this._flatList = flatList}
                        ItemSeparatorComponent={this._separator}
                        renderItem={this._renderItem}
                        //每行几个item
                        numColumns ={2}
                        columnWrapperStyle={styles.listContainer}
                        refreshing={this.state.refreshing}
                        //下拉刷新
                        onRefresh={this._onRefresh}
                        onEndReachedThreshold={0.1}
                        //上拉加载
                        onEndReached={this._onEndReached}
                        keyExtractor={
                            (item: object, index: number)=>{ 
                                return uuid()
                            }
                        }
                        data={this.state.lists}>
                    </FlatList>
                </View>
            </View>
        );
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
        width: "48%",
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
export default ListContainer