<template>
  <div class="art_nav">
    <div class="nav">
      <div>
        <span @click="go(1)" class="nav_text"><img src="http://127.0.0.1:5000/img/ART/logo.png" alt=""></span> |
      </div>
      <div>
        <router-link to="/ArtDraw" class="nav_text">框画</router-link> |
        <router-link to="/ArtCard" class="nav_text">明信片</router-link> |
      </div>
      <div>
        <router-link to="/cart" class="nav_text">购物车</router-link> |
        <!-- 设置登录状态切换 -->
        <div class="my_art">我的ART
          <ul class="menu">
             <li v-for="item in list"><router-link :to="item.url">{{item.title}}</router-link></li>
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
      return {
              list:[
        {
          url:"",
          title:"销售记录"
        },
                {
          url:"",
          title:"商品管理"
        },
                {
          url:"",
          title:"商品详情"
        },
                {
             url:"/entrypage",
          title:"退出登录"
        },
                {
          url:"/myhome",
          title:"LOFTER"
        },
      ]
      };
    },
    methods: {
      go(i) {
        if (i == 8) {
          this.$router.push("/entrypage");
        }else if(i==1){
          console.log("home")
          this.$router.push("/");
        }else if(i==2){
           this.$router.push("/myHome");
        }
      }
    }
  };
</script>

<style scoped>
  /* 引入头部css */
  @import '../assets/css/ART_header.css';
</style>
