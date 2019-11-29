import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        cartList:[],
        nums:111
    },
    getters: {
        getState(state){
            return state.cartList
        }
    },
    mutations: {
        addshop(state,info){
            // if(state.getState){
            //
            // }
            console.log(info);

            state.cartList.push(info)
        }
    },
    actions: {

    },
    modules: {

    }



})

export default store