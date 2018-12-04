import React,{Component} from 'react'
import {View,Text} from 'react-native'
class ListContainer extends Component{
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
    render(){
        return (
            <View>
                <Text>这是列表页</Text>
            </View>
        )
    }
}
export default ListContainer