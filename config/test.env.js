'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  VUE_APP_PREVIEW: true,
  VUE_APP_API_BASE_URL: '"https://cloud-api-test.fynote.com/note-service"',
  VUE_APP_API_NOTE_BASE_URL: '"https://cloud-api-test.fynote.com/note-service/note"',
  VUE_APP_NOTE_BASE_URL: '"https://cloud-test.fynote.com/"',
  VUE_APP_WS_API: '"wss://cloud-api-test.fynote.com"',
})
