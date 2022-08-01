/*
 * @Author: your name
 * @Date: 2021-03-22 17:15:45
 * @LastEditTime: 2021-09-08 21:17:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /note_web/src/utils/request.js
 */
import axios from "axios";
import { Message } from "element-ui";
// import { getToken } from './utils'
import merge from 'lodash/merge'
import { VueAxios } from './axios' 
// create an axios instance
const request = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL,
    // baseURL: 'http://120.24.35.249:9000/note-request',
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 20000 // request timeout
});

// request interceptor
request.interceptors.request.use(
    config => {
        let token = ''
        if(process.browser){
          token = localStorage.getItem('token');
        }        
        // do something before request is sent
        config.headers["token"] = token;
        return config;
    },
    error => {
        // do something with request error
        console.log(error); // for debug
        return Promise.reject(error);
    }
);
request.adornParams = (params = {}, openDefultParams = true) => {
  var defaults = {
    t: new Date().getTime(),
  }
  return openDefultParams ? merge(defaults, params) : params
}
// response interceptor
request.interceptors.response.use(

    response => {
        const res = response.data;
        if (res.code == 401) {

            // localStorage.removeItem('token')
            return res
        } else {
            return res;
        }
    },
    error => {
        Message({
            message: error.message,
            type: "error",
            duration: 5 * 1000
        });
        return Promise.reject(error);
    }
);

export default request;

