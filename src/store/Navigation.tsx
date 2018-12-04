import {
    observable,
    action,
    runInAction
} from 'mobx'

class Navition {
    @observable navigation:Object
    @action setNavigation(navigation:any){
        this.navigation=navigation
    }
}
export default new Navition()