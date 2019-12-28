import Vue from 'vue'
import Vuex from 'vuex'
import { Content } from 'iview'
import { reject } from 'q'
// 安装插件
Vue.use(Vuex)

// 创建对象
const store = new Vuex.Store({
  state: {
    counter: 1000,
    students: [{ id: 1, name: 'lilei', age: 20 }],
    info: {
      name: 'kobe',
      age: 40,
      height: 1.98
    }
  },
  // 修改state里面的东西要通过mutations修改
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    incrementCount(state, count) {
      console.log(count)
      state.counter += count
    },
    addStudent(state, stu) {
      state.students.push(stu)
    },
    updatedInfo(state) {
      Vue.set(state.info, 'address', '洛杉矶')  //Vue.set()方法用于后面添加的属性，可以到做响应式；
      Vue.delete(state.info, 'age')
    },
  },
  // 1、有异步操作通过actions  例如请求api  2、或是想修改mutations里面的东西
  actions: {
    // context: 上下文  固定参数
    aUpdateInfo(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit("updatedInfo");
          console.log(payload);
          resolve("111");
        }, 1000)
      })
    }
  },
  getters: {
    // powerCounter(state){
    //   return state.counter * state.counter
    // },
    // more20stu(state){
    //   return state.students.filter(item => item.age > 20)
    // },
    // more20stuLength(state,getters) {
    //   return getters.more20stu.length
    // }
  },
  modules: {

  }
})
// 导出store独享
export default store
