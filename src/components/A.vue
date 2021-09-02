<template>
  <div>
    <div>Component A</div>
    <br />
    <el-button @click="addRoute">添加路由</el-button>
    <br /><br />
    <router-link to="/b">链接到 B </router-link>
  </div>
</template>
<script>
import B from "./B";
export default {
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  Create() {
    console.log("Create");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  methods: {
    addRoute() {
      this.$router.addRoutes([{ path: "/b", component: B }]);
      console.log("按钮已经被点击了");
    },
  },
};
</script>
