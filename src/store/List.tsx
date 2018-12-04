import {Fetch} from '../util'
import {
    observable,
    action,
    runInAction
} from 'mobx'
import _ from 'lodash'
class List{
    //定义数据可观察
    @observable foodlist:Array<any> = []
    //改变数据
    @action getFoodList (){
        Fetch('/mock/cookbook-list.json')
            .then((res:any)=>{
                //异步动作修改数据块
                runInAction(()=>{
                    this.foodlist = res.data
                })
            })
    }
    getSomeFoodList = (pageNo:number=1,pageSize=10)=>{
        let start = (pageNo-1)*pageSize
        let end = start + pageSize
        return this.foodlist.slice(start,end)
    } 
}
export default new List()