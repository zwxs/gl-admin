<template>
  <div class="entering">
    <div class="left">
      <div class="form1">
        <el-form
          :model="dataForm"
          :rules="dataRule"
          :inline="true"
          ref="dataForm"
          @keyup.enter.native="dataFormSubmit()"
          label-width="120px"
        >
          <el-row>
            <el-col :span="8">
              <el-form-item label="关检关联号">
                <el-input
                  v-model="dataForm.qiniuDomain"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="关检关联密码">
                <el-input
                  v-model="dataForm.qiniuPrefix"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="预录入单位编码">
                <el-input
                  v-model="dataForm.qiniuAccessKey"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="统一编号">
                <el-input
                  v-model="dataForm.qiniuDomain"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="进口口岸">
                <el-select v-model="dataForm.noteType" clearable placeholder="">
                  <el-option
                    v-for="item in fileType"
                    :key="item.id"
                    :label="item.title"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="备案号">
                <el-input
                  v-model="dataForm.qiniuDomain"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="合同协议号">
                <el-input
                  v-model="dataForm.qiniuPrefix"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="申报地海关">
                <el-select v-model="dataForm.noteType" clearable placeholder="">
                  <el-option
                    v-for="item in fileType"
                    :key="item.id"
                    :label="item.title"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="进口日期">
                <el-input
                  v-model="dataForm.qiniuPrefix"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="申报日期">
                <el-input
                  v-model="dataForm.qiniuPrefix"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="经营单位">
                <el-col :span="12">
                  <el-select
                    v-model="dataForm.noteType"
                    clearable
                    placeholder=""
                  >
                    <el-option
                      v-for="item in fileType"
                      :key="item.id"
                      :label="item.title"
                      :value="item.id"
                    >
                    </el-option>
                  </el-select>
                </el-col>
                <el-col :span="12">
                  <el-select
                    v-model="dataForm.noteType"
                    clearable
                    placeholder=""
                  >
                    <el-option
                      v-for="item in fileType"
                      :key="item.id"
                      :label="item.title"
                      :value="item.id"
                    >
                    </el-option>
                  </el-select>
                </el-col>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="运输方式">
                <el-select v-model="dataForm.noteType" clearable placeholder="">
                  <el-option
                    v-for="item in fileType"
                    :key="item.id"
                    :label="item.title"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="收货单位">
                <el-col :span="12">
                  <el-select
                    v-model="dataForm.noteType"
                    clearable
                    placeholder=""
                  >
                    <el-option
                      v-for="item in fileType"
                      :key="item.id"
                      :label="item.title"
                      :value="item.id"
                    >
                    </el-option>
                  </el-select>
                </el-col>
                <el-col :span="12">
                  <el-select
                    v-model="dataForm.noteType"
                    clearable
                    placeholder=""
                  >
                    <el-option
                      v-for="item in fileType"
                      :key="item.id"
                      :label="item.title"
                      :value="item.id"
                    >
                    </el-option>
                  </el-select>
                </el-col>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="运输工具名称">
                <el-select v-model="dataForm.noteType" clearable placeholder="">
                  <el-option
                    v-for="item in fileType"
                    :key="item.id"
                    :label="item.title"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="申报单位">
                <el-input
                  v-model="dataForm.qiniuDomain"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="航次号">
                <el-input
                  v-model="dataForm.qiniuPrefix"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="提运单号">
                <el-input
                  v-model="dataForm.qiniuDomain"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="征免性质">
                <el-input
                  v-model="dataForm.qiniuPrefix"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="征税比例">
                <el-input
                  v-model="dataForm.qiniuPrefix"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-form-item label="纳税单位">
                <el-input
                  v-model="dataForm.qiniuPrefix"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="监管方式">
                <el-input
                  v-model="dataForm.qiniuPrefix"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="许可证号">
                <el-input
                  v-model="dataForm.qiniuPrefix"
                  placeholder="不设置默认为空"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-form-item label="启运国(地区)">
                <el-input
                  v-model="dataForm.qiniuPrefix"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="装货港">
                <el-input
                  v-model="dataForm.qiniuPrefix"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="境内目的地">
                <el-input
                  v-model="dataForm.qiniuPrefix"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-form-item label="件数">
                <el-input
                  v-model="dataForm.qiniuPrefix"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="包装种类">
                <el-input
                  v-model="dataForm.qiniuPrefix"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="运费">
                <el-input
                  v-model="dataForm.qiniuPrefix"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-form-item label="毛重(kg)">
                <el-input
                  v-model="dataForm.qiniuPrefix"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="净重(kg)">
                <el-input
                  v-model="dataForm.qiniuPrefix"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="保费">
                <el-input
                  v-model="dataForm.qiniuPrefix"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-form-item label="报关类型">
                <el-input
                  v-model="dataForm.qiniuPrefix"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="成交方式">
                <el-input
                  v-model="dataForm.qiniuPrefix"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="杂费">
                <el-input
                  v-model="dataForm.qiniuPrefix"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="批准文号">
                <el-input
                  v-model="dataForm.qiniuPrefix"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="备注">
                <el-input
                  v-model="dataForm.qiniuPrefix"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="table1">
        <el-table
          :data="dataList"
          border
          v-loading="dataListLoading"
          @selection-change="selectionChangeHandle"
          style="width: 100%"
        >
          <el-table-column
            prop="uid"
            header-align="center"
            align="center"
            width="150"
            label="商品序号"
          >
          </el-table-column>
          <el-table-column
            prop="uname"
            header-align="center"
            align="center"
            label="合同商品序目号"
          >
          </el-table-column>
          <el-table-column
            prop="umail"
            header-align="center"
            align="center"
            label="商品编号"
          >
          </el-table-column>
          <el-table-column
            prop="umail"
            header-align="center"
            align="center"
            label="商品名称"
          >
          </el-table-column>
          <el-table-column
            prop="umail"
            header-align="center"
            align="center"
            label="规格型号"
          >
          </el-table-column>
          <el-table-column
            prop="umail"
            header-align="center"
            align="center"
            label="申报数量"
          >
          </el-table-column>
          <el-table-column
            prop="umail"
            header-align="center"
            align="center"
            label="申报计量单位"
          >
          </el-table-column>
          <el-table-column
            prop="umail"
            header-align="center"
            align="center"
            label="操作"
          >
          </el-table-column>
        </el-table>
      </div>
      <div class="form2">
        <el-form
          :model="dataForm"
          :rules="dataRule"
          :inline="true"
          ref="dataForm"
          @keyup.enter.native="dataFormSubmit()"
          label-width="120px"
        >
          <el-row class="title">
            <el-col :span="24">
              <div>商品信息</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-form-item label="商品序号">
                <el-input
                  v-model="dataForm.qiniuDomain"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="合作商品序号">
                <el-input
                  v-model="dataForm.qiniuPrefix"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="商品编号">
                <el-input
                  v-model="dataForm.qiniuAccessKey"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="商品名称">
                <el-input
                  v-model="dataForm.qiniuDomain"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="规格型号">
                <el-select v-model="dataForm.noteType" clearable placeholder="">
                  <el-option
                    v-for="item in fileType"
                    :key="item.id"
                    :label="item.title"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-form-item label="申报数量">
                <el-input
                  v-model="dataForm.qiniuPrefix"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="申报计量单位">
                <el-input
                  v-model="dataForm.qiniuPrefix"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4" class="sm">
              <el-form-item label="总价">
                <el-input
                  v-model="dataForm.qiniuPrefix"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4" class="sm">
              <el-form-item label="单价">
                <el-input
                  v-model="dataForm.qiniuPrefix"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4" class="sm">
              <el-form-item label="币制">
                <el-input
                  v-model="dataForm.qiniuPrefix"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
           <el-row>
            <el-col :span="6">
              <el-form-item label="第一数量">
                <el-input
                  v-model="dataForm.qiniuPrefix"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="第一计量单位">
                <el-input
                  v-model="dataForm.qiniuPrefix"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4" class="sm">
              <el-form-item label="原产国">
                <el-input
                  v-model="dataForm.qiniuPrefix"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4" class="sm">
              <el-form-item label="征免">
                <el-input
                  v-model="dataForm.qiniuPrefix"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4" class="sm">
              <el-form-item label="用途">
                <el-input
                  v-model="dataForm.qiniuPrefix"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
           <el-row>
            <el-col :span="6">
              <el-form-item label="第二数量">
                <el-input
                  v-model="dataForm.qiniuPrefix"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="第二计量单位">
                <el-input
                  v-model="dataForm.qiniuPrefix"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4" class="sm">
              <el-form-item label="版本号">
                <el-input
                  v-model="dataForm.qiniuPrefix"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8" class="sm">
              <el-form-item label="货号">
                <el-input
                  v-model="dataForm.qiniuPrefix"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          
        </el-form>
      </div>
    </div>
    <div class="right">
      <div class="table1">
        <el-table
          :data="dataList"
          border
          v-loading="dataListLoading"
          @selection-change="selectionChangeHandle"
          style="width: 100%"
        >
          <el-table-column
            prop="uid"
            header-align="center"
            align="center"
            width="100"
            label="集装箱号"
          >
          </el-table-column>
          <el-table-column
            prop="uname"
            header-align="center"
            align="center"
            label="集装箱规格"
          >
          </el-table-column>
          <el-table-column
            prop="umail"
            header-align="center"
            align="center"
            label="自重"
          >
          </el-table-column>
          <el-table-column
            prop="umail"
            header-align="center"
            align="center"
            label="操作"
          >
          </el-table-column>
        </el-table>
      </div>
      <div class="form1">
        <el-form
          :model="dataForm"
          :rules="dataRule"
          :inline="true"
          ref="dataForm"
          @keyup.enter.native="dataFormSubmit()"
          label-width="120px"
        >
          <el-row class="title">
            <el-col :span="24">
              <div>集装箱信息</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="集装箱号">
                <el-input
                  v-model="dataForm.qiniuDomain"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="集装箱规格">
                <el-select v-model="dataForm.noteType" clearable placeholder="">
                  <el-option
                    v-for="item in fileType"
                    :key="item.id"
                    :label="item.title"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="自重(KG)">
                <el-input
                  v-model="dataForm.qiniuDomain"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="table2">
        <el-table
          :data="dataList"
          border
          v-loading="dataListLoading"
          @selection-change="selectionChangeHandle"
          style="width: 100%"
        >
          <el-table-column
            prop="uid"
            header-align="center"
            align="center"
            width="150"
            label="随附单证代码"
          >
          </el-table-column>
          <el-table-column
            prop="uname"
            header-align="center"
            align="center"
            label="单证编号"
          >
          </el-table-column>
          <el-table-column
            prop="umail"
            header-align="center"
            align="center"
            label="操作"
          >
          </el-table-column>
        </el-table>
      </div>
      <div class="form2">
        <el-form
          :model="dataForm"
          :rules="dataRule"
          :inline="true"
          ref="dataForm"
          @keyup.enter.native="dataFormSubmit()"
          label-width="120px"
        >
          <el-row class="title">
            <el-col :span="24">
              <div>随附单证信息</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="单证代码">
                <el-input
                  v-model="dataForm.qiniuDomain"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="单证编号">
                <el-select v-model="dataForm.noteType" clearable placeholder="">
                  <el-option
                    v-for="item in fileType"
                    :key="item.id"
                    :label="item.title"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="form3">
        <el-form
          :model="dataForm"
          :rules="dataRule"
          :inline="true"
          ref="dataForm"
          @keyup.enter.native="dataFormSubmit()"
          label-width="120px"
        >
          <el-row>
            <el-col :span="24">
              <el-form-item label="关联报单单号">
                <el-input
                  v-model="dataForm.qiniuDomain"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="关联备案号">
                <el-select v-model="dataForm.noteType" clearable placeholder="">
                  <el-option
                    v-for="item in fileType"
                    :key="item.id"
                    :label="item.title"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="监管仓库号">
                <el-select v-model="dataForm.noteType" clearable placeholder="">
                  <el-option
                    v-for="item in fileType"
                    :key="item.id"
                    :label="item.title"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="货场代码">
                <el-select v-model="dataForm.noteType" clearable placeholder="">
                  <el-option
                    v-for="item in fileType"
                    :key="item.id"
                    :label="item.title"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="转关提前报关">
                <el-select v-model="dataForm.noteType" clearable placeholder="">
                  <el-option
                    v-for="item in fileType"
                    :key="item.id"
                    :label="item.title"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="form4">
        <el-form
          :model="dataForm"
          :rules="dataRule"
          :inline="true"
          ref="dataForm"
          @keyup.enter.native="dataFormSubmit()"
          label-width="120px"
        >
          <el-row>
            <el-col :span="24">
              <el-form-item label="报关员">
                <el-input
                  v-model="dataForm.qiniuDomain"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="联系方式">
                <el-select v-model="dataForm.noteType" clearable placeholder="">
                  <el-option
                    v-for="item in fileType"
                    :key="item.id"
                    :label="item.title"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import AddOrUpdate from "./user-add-or-update";
import { formatDate } from "@/utils/index";
export default {
  data() {
    return {
      dataForm: {
        uname: "",
        uphone: "",
        umail: "",
        time: ["", ""],
      },
      dataRule: {},
      dataList: [],
      fileType: [
        {
          title: "选项1",
          key: "10",
          slots: {
            icon: "project",
          },
          id: "10",
          templateId: "",
        },
        {
          title: "选项2",
          key: "10",
          slots: {
            icon: "project",
          },
          id: "10",
          templateId: "",
        },
      ],
      pageIndex: 0,
      pageSize: 10,
      totalPage: 0,
      dataListLoading: false,
      dataListSelections: [],
      addOrUpdateVisible: false,
    };
  },
  components: {
    AddOrUpdate,
  },
  activated() {
    this.getDataList();
  },
  methods: {
    // 获取数据列表
    getDataList() {
      this.dataListLoading = true;
      if (!this.dataForm.time) {
        this.dataForm.time = ["", ""];
      }
      let beginTime = "";
      if (this.dataForm.time[0]) {
        beginTime = formatDate(this.dataForm.time[0]);
        beginTime = beginTime.split(" ")[0];
      }
      let endTime = "";
      if (this.dataForm.time[1]) {
        endTime = formatDate(this.dataForm.time[1]);
        endTime = endTime.split(" ")[0];
      }
      let params;
      params = Object.assign({}, this.dataForm);
      params.currentPage = this.pageIndex.toString();
      params.pageSize = this.pageSize.toString();
      params.startTime = beginTime;
      params.endTime = endTime;
      let qs = "?";
      for (let key in params) {
        if (!!params[key] && key !== "time") {
          qs += key + "=" + params[key] + "&";
        }
      }
      qs = qs.substr(0, qs.length - 1);
      this.$http({
        url: this.$http.adornUrl("/user/queryUsers") + qs,
        method: "post",
      }).then(({ data }) => {
        if (data && data.resultCode === "000000") {
          this.dataList = data.result.users;
          if (data.result.totalPage > 1) {
            data.result.totalPage = data.result.totalPage - 1;
          }
          this.totalPage = data.result.totalPage * data.result.pageSize;
        } else {
          this.dataList = [];
          this.totalPage = 0;
        }
        this.dataListLoading = false;
      });
    },
    // 每页数
    sizeChangeHandle(val) {
      this.pageSize = val;
      this.pageIndex = 1;
      this.getDataList();
    },
    // 当前页
    currentChangeHandle(val) {
      this.pageIndex = val;
      this.getDataList();
    },
    // 多选
    selectionChangeHandle(val) {
      this.dataListSelections = val;
    },
    // 新增 / 修改
    addOrUpdateHandle(user) {
      this.addOrUpdateVisible = true;
      this.$nextTick(() => {
        this.$refs.addOrUpdate.init(user);
      });
    },
    // 删除
    deleteHandle(id) {
      var userIds = id
        ? [id]
        : this.dataListSelections.map((item) => {
            return item.uid;
          });
      let uid = "";
      if (userIds.length > 1) {
        uid = userIds.join(",");
      } else {
        uid = id;
      }

      this.$confirm(
        `确定对[id=${userIds.join(",")}]进行[${id ? "删除" : "批量删除"}]操作?`,
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      )
        .then(() => {
          this.$http({
            url: this.$http.adornUrl("/user/delUser") + "?uid=" + uid,
            method: "post",
          }).then(({ data }) => {
            if (data && data.code === 0) {
              this.$message({
                message: "操作成功",
                type: "success",
                duration: 1500,
                onClose: () => {
                  this.getDataList();
                },
              });
            } else {
              this.$message.error(data.msg);
            }
          });
        })
        .catch(() => {});
    },
    getTime(time) {
      if (time) {
        return time.replace("T", " ").split(".")[0];
      }
    },
  },
};
</script>
<style lang="less">
.entering {
  display: flex;
  .el-row {
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-top: 1px solid #ccc;
    &:last-of-type {
      border-bottom: 1px solid #ccc;
    }
    .el-col {
      display: flex;
      align-items: center;
      padding: 5px;
    }
  }
  .left {
    width: 70%;
    .table1 {
      margin-top: 10px;
      height: 221px;
      overflow: auto;
    }
    .form2 {
      margin-top: 10px;
      .title {
        height: 30px;
        line-height: 18px;
        padding-left: 10px;
        background-color: #80bcee;
        color: #fff;
        width: 100%;
      }
    }
    .el-form-item {
      display: flex;
      width: 100%;
      margin-bottom: 0;
      .el-form-item__content {
        flex: 1;
      }
      .el-form-item__label {
        color: #3d92dd;
      }
      .el-select {
        width: 100%;
      }
    }
    .sm{
      .el-form-item__label{
        width: 60px !important;
      }
    }
  }
  .right {
    width: 30%;
    padding-left: 10px;
    .table1 {
      height: 265px;
      overflow: auto;
    }
    .table2 {
      height: 221px;
      overflow: auto;
      margin-top: 10px;
    }
    .form1,
    .form2,
    .form3,
    .form4 {
      margin-top: 15px;
      .title {
        height: 30px;
        line-height: 18px;
        padding-left: 10px;
        background-color: #80bcee;
        color: #fff;
        width: 100%;
      }
    }
    .el-form-item {
      display: flex;
      width: 100%;
      margin-bottom: 0;
      .el-form-item__content {
        flex: 1;
      }
      .el-form-item__label {
        color: #3d92dd;
      }
      .el-select {
        width: 100%;
      }
    }
  }
  .el-table__header th{
    background-color: #80bcee;
    color:#fff;
    font-weight: 500;
    font-size: 14px;
  }
}
</style>