import Vue from "vue";
import App from "@/App";
import router from "@/router"; // api: https://github.com/vuejs/vue-router
import store from "@/store"; // api: https://github.com/vuejs/vuex
import VueCookie from "vue-cookie"; // api: https://github.com/alfhen/vue-cookie
import "@/element-ui"; // api: https://github.com/ElemeFE/element
import "@/icons"; // api: http://www.iconfont.cn/
import "@/element-ui-theme";
import "@/assets/scss/index.less";
import httpRequest from "@/utils/httpRequest"; // api: https://github.com/axios/axios
import { isAuth } from "@/utils";
import cloneDeep from "lodash/cloneDeep";
Vue.use(VueCookie);
Vue.config.productionTip = false;

// 非生产环境, 适配mockjs模拟数据                 // api: https://github.com/nuysoft/Mock
if (process.env.NODE_ENV !== "production") {
  require("@/mock");
}

// 挂载全局
Vue.prototype.$http = httpRequest; // ajax请求方法
Vue.prototype.isAuth = isAuth; // 权限方法

import { Message } from "element-ui";
let messageInstance = null;
const resetMessage = (options) => {
    if(messageInstance) {
        messageInstance.close()
    }
    messageInstance = Message(options)
}
;['error','success','info','warning'].forEach(type => {
    resetMessage[type] = options => {
        if(typeof options === 'string') {
            options = {
                message:options
            }
        }
        options.type = type
        return resetMessage(options)
    }
})
Vue.prototype.Message = resetMessage;

// 点击防止重复事件指令
Vue.directive("preventReClick", {
  inserted(el, binding) {
    el.addEventListener("click", () => {
      if (el.style.pointerEvents !== "none") {
        el.style.pointerEvents = "none";
        setTimeout(() => {
          el.style.pointerEvents = "";
        }, 2000);
      }
    });
  }
});

// 保存整站vuex本地储存初始状态
window.SITE_CONFIG["storeState"] = cloneDeep(store.state);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  template: "<App/>",
  components: { App }
});
