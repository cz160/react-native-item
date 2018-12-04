var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Fetch } from '../util';
import { observable, action, runInAction } from 'mobx';
class List {
    constructor() {
        //定义数据可观察
        this.foodlist = [];
        this.getSomeFoodList = (pageNo = 1, pageSize = 10) => {
            let start = (pageNo - 1) * pageSize;
            let end = start + pageSize;
            return this.foodlist.slice(start, end);
        };
    }
    //改变数据
    getFoodList() {
        Fetch('/mock/cookbook-list.json')
            .then((res) => {
            //异步动作修改数据块
            runInAction(() => {
                this.foodlist = res.data;
            });
        });
    }
}
__decorate([
    observable
], List.prototype, "foodlist", void 0);
__decorate([
    action
], List.prototype, "getFoodList", null);
export default new List();
//# sourceMappingURL=List.js.map