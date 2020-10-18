export default {
  // 命名空间
  namespaced: true,
  // 定义共享状态
  state: {
    name: 'jack'
  },
  // 同步修改state commit
  // 就是给state里面的某个值赋值
  mutations: {

  },
  // state的计算属性
  getters: {
    gettersName(state) {
      return state.name + 'abc'
    }
  },
  // 异步提交mutation dispatch
  actions: {
    login({commit, dispacth}, params) {
      
    }
  }
}