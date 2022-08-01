import Vue from "vue";
import router from "@/router";
import store from "@/store";
let fileType = require('./fileType.js'); 
/**
 * 获取uuid
 */
export function getUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
    return (c === "x" ? (Math.random() * 16) | 0 : "r&0x3" | "0x8").toString(
      16
    );
  });
}

/**
 * 是否有权限
 * @param {*} key
 */
export function isAuth(key) {
  return (
    JSON.parse(sessionStorage.getItem("permissions") || "[]").indexOf(key) !==
      -1 || false
  );
}

/**
 * 树形数据转换
 * @param {*} data
 * @param {*} id
 * @param {*} pid
 */
export function treeDataTranslate(data, id = "id", pid = "parentId") {
  var res = [];
  var temp = {};
  for (var i = 0; i < data.length; i++) {
    temp[data[i][id]] = data[i];
  }
  for (var k = 0; k < data.length; k++) {
    if (temp[data[k][pid]] && data[k][id] !== data[k][pid]) {
      if (!temp[data[k][pid]]["children"]) {
        temp[data[k][pid]]["children"] = [];
      }
      if (!temp[data[k][pid]]["_level"]) {
        temp[data[k][pid]]["_level"] = 1;
      }
      data[k]["_level"] = temp[data[k][pid]]._level + 1;
      temp[data[k][pid]]["children"].push(data[k]);
    } else {
      res.push(data[k]);
    }
  }
  return res;
}

/**
 * 清除登录信息
 */
export function clearLoginInfo() {
  Vue.cookie.delete("token");
  store.commit("resetStore");
  router.options.isAddDynamicMenuRoutes = false;
}

function formatTen(num) {
  return num > 9 ? num + "" : "0" + num;
}

/**
 * 格式时间
 * @param {*} date
 */
export function formatDate(date) {
  var date = new Date(date);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  return (
    year +
    "-" +
    formatTen(month) +
    "-" +
    formatTen(day) +
    " " +
    formatTen(hour) +
    ":" +
    formatTen(minute) +
    ":" +
    formatTen(second)
  );
}

export function getType(type) {
  let typeName = "";
  fileType.map(item => {
    if (item.id == type) {
      typeName = item.title;
    }
  });
  return typeName;
}

export function splitTime(time, item) {
  if (item && item.expired) {
    return "已失效";
  }
  if (item && item.noteAndDirIsExist == false) {
    return "已删除";
  }
  if (time == "2099-12-30 00:00:00") {
    return "永久有效";
  } else {
    if (time) {
      return time.substr(0, time.length - 3);
    } else {
      return "";
    }
  }
}