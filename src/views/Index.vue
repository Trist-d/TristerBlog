<template>
  <div class="content_index box">
    <!-- 列表左侧内容 -->
    <div class="content_l">
      <!-- 文章盒子 -->
      <div class="article_box" v-for="(art_item,art_index) in artList" :key="art_index">
        <!-- 标题 -->
        <div class="title">{{art_item.title}}</div>
        <!-- 描述 四个标签 -->
        <div class="describe">
          <div class="autor des_mr">
            <i class="iconfont icon-ren"></i>
            <span>{{art_item.autor}}</span>
          </div>
          <div class="time des_mr">
            <i class="iconfont icon-fenlei"></i>
            <span>{{art_item.time}}</span>
          </div>
          <div class="type des_mr">
            <i class="iconfont icon-rili"></i>
            <span>{{art_item.type}}</span>
          </div>
          <div class="label des_mr">
            <i class="iconfont icon-biaoqian"></i>
            <span>{{art_item.label}}</span>
          </div>
        </div>
        <!-- 内容 -->
        <div class="con">
          <div class="con_main">
            <img :src="art_item.img" alt="">
            <p>{{art_item.p}}</p>
          </div>
          <!-- 按钮 -->
          <div class="btn">{{art_item.btn}}</div>
        </div>
      </div>
      <div class="pagination">
        <el-pagination background layout="prev, pager, next" :total="100">
        </el-pagination>
      </div>
    </div>
    <!-- 列表右侧内容 -->
    <div class="content_r">
      <!-- 搜索 -->
      <div class="search">
        <input type="text" class="inp">
        <!-- <input type="submit" class="sub"> -->
        <p class="sub">搜索</p>
      </div>
      <!-- 热门标签 -->
      <div class="hotLabel">
        <div class="title">热门标签</div>
        <div class="labels">
          <p v-for="(lab_item,lab_index) in labsList" :key="lab_index">{{lab_item.name}}</p>
        </div>
      </div>
      <!-- 置顶推荐 -->
      <div class="recommend">
        <div class="title">置顶推荐</div>
        <div class="rec">
          <i class="iconfont icon-liebiao"></i>
          <span> OAuth 系列(一)序言</span>
        </div>
      </div>
      <!-- 友情链接 -->
      <div class="link">
        <div class="title">友情链接</div>
        <div class="lin">
          <i class="iconfont icon-youqinglianjie"></i>
          <span>博客</span>
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
        artList: [
          {
            title: "一份经过时间检验的 Laravel PHPUnit 测试经验分享",
            autor: "姓名",
            time: "日期",
            type: "类别",
            label: "标签",
            img: require("../assets/5eca7f20460fc.png"),
            p:
              "一份经过时间检验的 Laravel PHPUnit 测试经验分享 介绍作为开发者我们可能都有过这样的经历： Laravel v7 都已经发布了，而自己维护的项目仍然是公司祖传的 v5.3，迟迟不敢升级。 修复了一个注册功能的 bug，结果把登录功能搞崩了，直到用户反馈才知道。 新增功能或者修改代码都束手束脚，生怕对项目造成破坏性影响。而这些困境很大部分的原",
            btn: "阅读全文",
          },
          {
            title: "一份经过时间检验的 Laravel PHPUnit 测试经验分享",
            autor: "姓名",
            time: "日期",
            type: "类别",
            label: "标签",
            img: require("../assets/5eca7f20460fc.png"),
            p:
              "一份经过时间检验的 Laravel PHPUnit 测试经验分享 介绍作为开发者我们可能都有过这样的经历： Laravel v7 都已经发布了，而自己维护的项目仍然是公司祖传的 v5.3，迟迟不敢升级。 修复了一个注册功能的 bug，结果把登录功能搞崩了，直到用户反馈才知道。 新增功能或者修改代码都束手束脚，生怕对项目造成破坏性影响。而这些困境很大部分的原",
            btn: "阅读全文",
          },
          {
            title: "一份经过时间检验的 Laravel PHPUnit 测试经验分享",
            autor: "姓名",
            time: "日期",
            type: "类别",
            label: "标签",
            img: require("../assets/5eca7f20460fc.png"),
            p:
              "一份经过时间检验的 Laravel PHPUnit 测试经验分享 介绍作为开发者我们可能都有过这样的经历： Laravel v7 都已经发布了，而自己维护的项目仍然是公司祖传的 v5.3，迟迟不敢升级。 修复了一个注册功能的 bug，结果把登录功能搞崩了，直到用户反馈才知道。 新增功能或者修改代码都束手束脚，生怕对项目造成破坏性影响。而这些困境很大部分的原",
            btn: "阅读全文",
          },
        ],
        labsList: [{ name: "Vue" }, { name: "前端" }, { name: "文档" }],
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
  @import "../common/index.css";
</style>