<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
//引入组件
import Header from "./components/Header"
import Footer from "./components/Footer"
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
@import "./common/reset.css";
@import "./common/common.css";
#app{
  background-color: #f8f8f8;
}
</style>
