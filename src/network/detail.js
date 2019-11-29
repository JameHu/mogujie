import { Axios } from "./require";
export function getData(iid) {
  return Axios({
    url:'detail',
    params:{
      iid
    }
  })
}

export class Goods{
  constructor (itemInfo,columns){
    this.title = itemInfo.title;
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discountDesc = itemInfo.discountDesc;
    this.columns = columns;
  }
}

export class ShopInfo{
  constructor(info){
    this.score = info.score
  }
}