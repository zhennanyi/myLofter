<template>
  <div>
    <!-- 使用v-if控制显示不同的页头和页脚 -->
    <artheader v-if="this.$store.state.count==1"></artheader>
    <myheader v-else-if="this.$store.state.count==2"></myheader>
    <!-- 上方为固定导航栏 -->
    <!-- 此处为需要动态切换的view视图 -->
    <router-view></router-view>
    <!-- <router-view /> -->
    <!-- 下方为固定页脚 -->
    <artfooter v-if="this.$store.state.count==1"></artfooter>
    <myfooter v-else></myfooter>
  </div>
</template>

<script>
// vuex可以解决问题
  export default {
    data() {
      return {
      
      };
    },
  };
</script>

<style scoped>
  /* 需要引入min-ui的css */
  @import '../public/css/style.css';
</style>

