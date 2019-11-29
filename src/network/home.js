import { Axios } from "./require";
export function getHomeAllData() {
    return Axios({
        url: "/home/multidata"
    })
}

export function getHomeGoods(type,cound) {
    return Axios({
        url: "/home/data",
        params:{
            type,
            page:cound
        }
    })
}