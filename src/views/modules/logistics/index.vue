<template>
  <div class="mod-user">
    <el-form
      :inline="true"
      :model="dataForm"
      @keyup.enter.native="getDataList()"
    >
      <el-form-item>
        <el-input
          v-model="dataForm.uphone"
          placeholder="入库时间"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="dataForm.uphone"
          placeholder="订单编号"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="dataForm.uphone"
          placeholder="数量"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="dataForm.uphone"
          placeholder="关键字"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="getDataList()">查询</el-button>
        <el-button type="primary" @click="addOrUpdateHandle()">清空</el-button>
      </el-form-item>
    </el-form>
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
        label="序号"
      >
      </el-table-column>
      <el-table-column
        prop="uname"
        header-align="center"
        align="center"
        label="订单编号"
      >
      </el-table-column>
      <el-table-column
        prop="umail"
        header-align="center"
        align="center"
        label="品名"
      >
      </el-table-column>
      <el-table-column
        prop="uphone"
        header-align="center"
        align="center"
        label="批次"
      >
      </el-table-column>
      <el-table-column
        prop="uphone"
        header-align="center"
        align="center"
        label="入库数量"
      >
      </el-table-column>
      <el-table-column
        prop="uphone"
        header-align="center"
        align="center"
        label="库位"
      >
      </el-table-column>
      <el-table-column
        prop="uphone"
        header-align="center"
        align="center"
        label="库位名"
      >
      </el-table-column>
      <el-table-column
        prop="uphone"
        header-align="center"
        align="center"
        label="操作时间"
      >
      </el-table-column>
      <el-table-column
        prop="uphone"
        header-align="center"
        align="center"
        label="入库员"
      >
      </el-table-column>
      
      
    </el-table>
    <el-pagination
      @size-change="sizeChangeHandle"
      @current-change="currentChangeHandle"
      :current-page="pageIndex"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pageSize"
      :total="totalPage"
      layout="total, sizes, prev, pager, next, jumper"
    >
    </el-pagination>
    <!-- 弹窗, 新增 / 修改 -->
    <add-or-update
      v-if="addOrUpdateVisible"
      ref="addOrUpdate"
      @refreshDataList="getDataList"
    ></add-or-update>
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
