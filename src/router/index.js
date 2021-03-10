import Vue from "vue";
import Router from "vue-router";

//导入页面
import Index from "../views/Index.vue"

Vue.use(Router);
export default new Router({
  routes:[
    {
      path:"/",
      name:"Index",
      component:Index
    }
  ]
})    