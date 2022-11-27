<template>
  <!-- <div>
    <router-view></router-view>
  </div> -->
  <div id="app">
    <div class="top">
      <h1>xxx科技公司后台管理系统</h1>
    </div>
    <div class="left">
      <Left></Left>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Left from "./left.vue";
export default {
  name: "App",
  components: {
    Left,
  },
  mounted() {
    // 取消开始的loading动画
    const preLoader = document.querySelector("#pre-loader");
    preLoader.style.display = "none";

    // fix: firefox 下 拖拽 会新打卡一个选项卡
    // https://github.com/JakHuang/form-generator/issues/15
    document.body.ondrop = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };
  },
};
</script>

<style scoped lang="scss">
div {
  overflow: hidden;
}
* {
  margin: 0;
  padding: 0;
}
.top {
  width: 100%;
  height: 10vh;
  line-height: 10vh;
  background-color: orange;
}
.left {
  width: 10%;
  height: 90vh;
  background-color: skyblue;
  float: left;
}
.right {
  width: 90%;
  height: 90vh;
  float: right;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}
</style>
