"use strict";
const merge = require("webpack-merge");
const prodEnv = require("./prod.env");

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  VUE_APP_PREVIEW: true,
  VUE_APP_API_BASE_URL: '"https://cloud-api-test.fynote.com/note-service"',
  VUE_APP_API_NOTE_BASE_URL: '"https://cloud-api-test.fynote.com/note-service/note"',
  VUE_APP_NOTE_BASE_URL: '"https://cloud-test.fynote.com/"',
  VUE_APP_WS_API: '"wss://cloud-api-test.fynote.com"',
  OPEN_PROXY: false // 是否开启代理, 重置后需重启vue-cli
});
