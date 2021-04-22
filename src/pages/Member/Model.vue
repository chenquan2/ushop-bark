<template>
  <el-dialog
    @close="reset"
    :title="info.isAdd ? '新增' : '编辑'"
    :visible.sync="info.isShow"
  >
    <el-form :model="form" :rules="rules" ref="formRef">
      <el-form-item label="会员编号" label-width="80px" prop="id">
       <el-input v-model="form.id" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="昵称" label-width="80px" prop="nickname">
        <el-input v-model="form.nickname" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="手机号" label-width="80px" prop="phone">
        <el-input v-model="form.phone" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" label-width="80px" >
        <el-input v-model="form.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="状态" label-width="80px" prop="status">
        <el-radio-group v-model="form.status">
          <el-radio :label="1">正常</el-radio>
          <el-radio :label="2">禁用</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="info.isShow = false">取 消</el-button>
      <el-button type="primary" @click="submit">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { addMember, editMember } from "../../request/member";
export default {
  props: ["info", "params"],
  data() {
    return {
      form: {
        id: "",
        nickname: "",
        phone: "",
        password: "",
        status: 1,
      },
      rules: {
        id: [{ required: true, message: "请输入会员编号", trigger: "blur" }],
        nickname: [{ required: true, message: "请输入昵称", trigger: "blur" }],
        phone: [{ required: true, message: "请输入手机号", trigger: "blur" }],
        // password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        status: [{ required: true, message: "请选择状态", trigger: "blur" }],
      },
    };
  },
  computed: {
    ...mapState({ roleList: (state) => state.role.roleList }),
  },
  created() {
    this.getRoleListAction();
  },
  methods: {
    ...mapActions("role", ["getRoleListAction"]),
    ...mapActions("member", ["getMemberListAction"]),
    reset() {
      this.form = {
        uid: "",
        nickname: "",
        phone: "",
        password: "",
        status: 1,
      };
    },
    submit() {
      this.$refs.formRef.validate((valid) => {
        if (valid) {
          if (this.info.isAdd) {
            addMember(this.form).then((res) => {
              if (res.code === 200) {
                this.$message({
                  message: res.msg,
                  type: "success",
                });
                this.info.isShow = false;
                this.getMemberListAction(this.params);
              } else {
                this.$message({
                  message: res.msg,
                  type: "error",
                });
              }
            });
          } else {
            editMember(this.form).then((res) => {
              if (res.code === 200) {
                this.$message({
                  message: res.msg,
                  type: "success",
                });
                this.info.isShow = false;
                this.getMemberListAction(this.params);
              } else {
                this.$message({
                  message: res.msg,
                  type: "error",
                });
              }
            });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    sendData(obj) {
      this.form = { ...obj };
      this.form.password = "";
    },
  },
  components: {},
};
</script>
<style scoped>
</style>