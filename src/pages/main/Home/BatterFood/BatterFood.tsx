import React,{Component} from 'react'
import {View,Text,StyleSheet, Image} from 'react-native'
import FoodList from './FoodList'
interface Props{}
interface State {
    items:Array<any>
}
export default class BatterFood extends Component <Props,State>{
    render(){
        return (
            <View style={styles.betterContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>精品好菜</Text>
                </View>
                <FoodList />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    betterContainer:{
        backgroundColor: '#fff'
    },
    titleContainer:{
        padding:12
    },
    title:{
        color:"#333"
    }
})