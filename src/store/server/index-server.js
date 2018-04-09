
import http from "../axios"
import {toBodyString} from "../../utils"

export const loginApi = (body={})=>{
  return http.post(`user/login`,body)
}

export const userInfo=()=>{
  return http.get("/user/info")
}

export const navApi = ()=>{
  return http.get('admin/common/index')
}


















