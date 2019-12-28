import axios from 'axios'
import { reject } from 'q'
import { resolve } from 'path'

export function request(config){
    const instance = axios.create({
      baseURL:'http://123.207.32.32:8000',
      timeout: 5000
    })
    // axios拦截  请求成功时的拦截  请求失败时的拦截
    instance.interceptors.request.use(config => {

    },err => {

    })
    return instance(config)
  }