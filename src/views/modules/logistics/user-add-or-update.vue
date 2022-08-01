<template>
  <el-dialog
    :title="!dataForm.uid ? '新增' : '修改'"
    :close-on-click-modal="false"
    :visible.sync="visible">
    <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()" label-width="80px">
      <el-form-item label="用户名" prop="uname">
        <el-input v-model="dataForm.uname" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item label="登录帐号" prop="uaccount">
        <el-input v-model="dataForm.uaccount" placeholder="登录帐号"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" :class="{ 'is-required': !dataForm.id }">
        <el-input v-model="dataForm.upass" type="password" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="comfirmPassword" :class="{ 'is-required': !dataForm.id }">
        <el-input v-model="dataForm.comfirmPassword" type="password" placeholder="确认密码"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="umail">
        <el-input v-model="dataForm.umail" placeholder="邮箱"></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="uphone">
        <el-input v-model="dataForm.uphone" placeholder="手机号"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="visible = false">取消</el-button>
      <el-button type="primary" @click="dataFormSubmit()">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
  import { isEmail, isMobile } from '@/utils/validate'
  export default {
    data () {
      var validatePassword = (rule, value, callback) => {
        if (!this.dataForm.id && !/\S/.test(value)) {
          callback(new Error('密码不能为空'))
        } else {
          callback()
        }
      }
      var validateComfirmPassword = (rule, value, callback) => {
        if (!this.dataForm.id && !/\S/.test(value)) {
          callback(new Error('确认密码不能为空'))
        } else if (this.dataForm.upass !== value) {
          callback(new Error('确认密码与密码输入不一致'))
        } else {
          callback()
        }
      }
      var validateEmail = (rule, value, callback) => {
        if (!isEmail(value)) {
          callback(new Error('邮箱格式错误'))
        } else {
          callback()
        }
      }
      var validateMobile = (rule, value, callback) => {
        if (!isMobile(value)) {
          callback(new Error('手机号格式错误'))
        } else {
          callback()
        }
      }
      return {
        visible: false,
        roleList: [],
        dataForm: {
          id: 0,
          uname: 'jack',
          uaccount: 'jack1321231',
          upass: '123456',
          comfirmPassword: '123456',
          umail: '1@qq.com',
          uphone: '13333333333',
        },
        dataRule: {
          uname: [
            { required: true, message: '用户名不能为空', trigger: 'blur' }
          ],
          uaccount: [
            { required: true, message: '登录帐号不能为空', trigger: 'blur' }
          ],
          password: [
            { validator: validatePassword, trigger: 'blur' }
          ],
          comfirmPassword: [
            { validator: validateComfirmPassword, trigger: 'blur' }
          ],
          umail: [
            // { required: true, message: '邮箱不能为空', trigger: 'blur' },
            // { validator: validateEmail, trigger: 'blur' }
          ],
          uphone: [
            // { required: true, message: '手机号不能为空', trigger: 'blur' },
            // { validator: validateMobile, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      init (user) {
        if(user){          
          Object.assign(this.dataForm , user)          
        }       
        this.visible = true;
       
      },
      // 表单提交
      dataFormSubmit () {
        this.$refs['dataForm'].validate((valid) => {
          let params = {
            'uid': this.dataForm.uid || undefined,
            'uname': this.dataForm.uname,
            'uaccount': this.dataForm.uaccount,
            'upass': this.dataForm.upass,
            'umail': this.dataForm.umail,
            'uphone': this.dataForm.uphone,
          };
          let qs = '?'
          for(let key in params){
            if(!!params[key]){
              qs += ( key + '=' + params[key]) + '&';
            }            
          }
          qs = qs.substr(0,qs.length-1);
          if (valid) {
            this.$http({
              url: this.$http.adornUrl(`/user/${!this.dataForm.uid ? 'addUser' : 'updUser'}`) + qs ,
              method: 'post',
              // data: {
              //   'uid': this.dataForm.id || undefined,
              //   'uname': this.dataForm.uname,
              //   'uaccount': this.dataForm.uaccount,
              //   'password': this.dataForm.upass,
              //   'email': this.dataForm.umail,
              //   'mobile': this.dataForm.uphone,
              // }
            }).then(({data}) => {
              if (data && data.resultCode === '000000') {
                this.$message({
                  message: '操作成功',
                  type: 'success',
                  duration: 1500,
                  onClose: () => {
                    this.visible = false
                    this.$emit('refreshDataList')
                  }
                })
              } else {
                this.$message.error(data.msg)
              }
            })
          }
        })
      }
    }
  }
</script>
