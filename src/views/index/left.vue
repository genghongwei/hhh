<template>
    <div>
        <ul>
            <li><router-link active-class="color"  to="/minemanage">首页</router-link></li>
            <li><router-link active-class="color" to="/home">动态表单</router-link></li>
        </ul>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style lang="scss" scoped>
  ul{
      padding: 0px;
      margin: 0px;
      list-style: none;
      display: block;
  }
  li{
      height: 40px;
      line-height: 40px;
      /* border:1px solid red; */
  }
  a{
      text-decoration: none;
      display: block;
  }
  .color{
      background-color: blue;
      color: white;
  }
  </style>