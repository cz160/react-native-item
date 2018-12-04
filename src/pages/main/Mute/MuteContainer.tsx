import React,{Component} from 'react'
import FoodList from '../Home/BatterFood/FoodList'
import {ScrollView} from 'react-native'
export default class MuteContainer extends Component{
    render(){
        return (
            <ScrollView>
                <FoodList pageNo={2} pageSize={30}></FoodList>
            </ScrollView>
        )
    }
}