<template>
    <div class="art_nav">
	      <div class="nav">
        <div>
          <router-link to="/" class="nav_text"><img src="http://127.0.0.1:5000/img/ART/logo.png" alt=""></router-link> |
        </div>
        <div>
          <a class="nav_text">框画</a>
          <a class="nav_text">明信片</a>
        </div>
        <div>
          <router-link to="/cart" class="nav_text">购物车</router-link> |
           <!-- 设置登录状态切换 -->
          <div class="my_art">我的ART
            <ul class="menu">
              <li><a class="">销售记录</a></li>
              <li><a class="">商品管理</a></li>
              <li>
                <router-link to="/details">商品详情</router-link>
              </li>
              <li>
                <router-link to="/entrypage">退出登录</router-link>
              </li>
              <li>
                <router-link to="/myhome">LOFTER</router-link>
              </li>
            </ul>
          </div>
          <!-- <div class="my_art" v-else>
            加入
          </div> -->
        </div>
      </div>
</div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
 /* 引入头部css */
  @import '../assets/css/ART_header.css';
</style>
