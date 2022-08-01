const getRepoInfo  = require('git-repo-info')
const repoInfo = getRepoInfo(); // 调用获取git信息
const branch = repoInfo.branch;
let obj = {
  'msb_test':{
    'VUE_APP_PREVIEW': true,
    'VUE_APP_API_BASE_URL':'https://cloud-api-test.fynote.com/note-service',
    'VUE_APP_API_NOTE_BASE_URL':'https://cloud-api-test.fynote.com/note-service/note',
    'VUE_APP_WS_API':'wss://cloud-api-test.fynote.com',
    'VUE_APP_SHARE_URL':'https://www-test-fynote.mashibing.cn/getShare',
    'prod':'https://cloud-api.fynote.com/note-service',
    'test':'https://cloud-api-test.fynote.com/note-service'
  },
  'msb_beta':{
    'VUE_APP_PREVIEW': true,
    'VUE_APP_API_BASE_URL':'https://note-api-beta.mashibing.cn/note-service',
    'VUE_APP_API_NOTE_BASE_URL':'https://note-api-beta.mashibing.cn/note-service/note',
    'VUE_APP_WS_API':'wss://note-api-beta.mashibing.cn',
    'VUE_APP_SHARE_URL':'https://www-beta-fynote.mashibing.cn/getShare',
    'prod':'https://cloud-api.fynote.com/note-service',
    'test':'https://cloud-api-test.fynote.com/note-service'
  },
  'msb_prod':{
    'VUE_APP_PREVIEW': true,
    'VUE_APP_API_BASE_URL':'https://cloud-api.fynote.com/note-service',
    'VUE_APP_API_NOTE_BASE_URL':'https://cloud-api.fynote.com/note-service/note',
    'VUE_APP_WS_API':'wss://cloud-api.fynote.com',
    'VUE_APP_SHARE_URL':'http://www.fynote.com/getShare',
    'prod':'https://cloud-api.fynote.com/note-service',
    'test':'https://cloud-api-test.fynote.com/note-service'
  }
}
let ment = obj[branch];
if(process.env.COMMIT_ID){
  ment=obj[process.env.COMMIT_ID]
  if(!ment){
    ment = obj['msb_prod']
  }
}
module.exports = ment