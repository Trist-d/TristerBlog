<template>
  <!-- heg 为解决header_box 脱离文档流外套标签  -->
  <div class="heg">
    <!-- header_box 用于设置header头部fixed布局 -->
    <div class="header_box">
      <!-- header 设置flex布局 -->
      <div class="header box">
        <!-- logo -->
        <div class="logo">
          <span class="logo_text">_Trister`</span>
        </div>
        <!-- nav 导航 -->
        <div class="nav">
          <!-- 导航使用v-for循环渲染 -->
          <span v-for="(nav_item,nav_index) in navList" :key="nav_index">{{nav_item.name}}</span>
        </div>
        <!-- log 登录 -->
        <div class="log">
          <span>登录</span>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        navList: [
          { name: "首页" },
          { name: "Vue" },
          { name: "前端" },
          { name: "文档" },
        ],
      };
    },
    watch: {},
    computed: {},
    methods: {},
    created() {},
    mounted() {},
  };
</script>
<style>
  @import "../common/header.css";
</style>