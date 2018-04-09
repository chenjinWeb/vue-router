
import {
  loginApi,
  navApi, userInfo
} from "../server/index-server"

const state={

}

const getters = {

}

const actions = {

  async loginApi_({commit,state},body){
    return await loginApi(body)
  },

  async userInfo_({commit,state}){
    return await userInfo()
  },

  async navApi_({commit,state}){
    return await navApi();
  }
}

const mutations = {

}

export default {
  state,
  getters,
  actions,
  mutations
}


