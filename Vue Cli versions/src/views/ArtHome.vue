<template>
  <div>
    <!-- <test></test> -->
    <!-- 使用上方轮播图组件 -->
    <banner></banner>
    <!--注意组件间使用的层级，避免css样式失效-->
    <section>
      <!-- 使用方形商品组件 -->
      <drawing></drawing>
      <!-- 使用长形商品组件 -->
      <postcard></postcard>
    </section>
  </div>
</template>
<script>
  //引入头部
  import artheader from "@/components/artheader.vue";
  // 引入轮播图
  import banner from "@/components/arthome/banner.vue";
  // 引入商品
  import drawing from "@/components/arthome/drawing.vue";
  import postcard from "@/components/arthome/postcard.vue";
  export default {
    name: "Arthome",
    components: {
      // 挂载三个子组件
      banner,
      drawing,
      postcard,
      artheader
    },
    mounted() {
    }
  };
</script>
<!--在当前view视图主页，引入当前页面需要的css-->
<style scoped>
  @import "../assets/css/ART-home.css";
</style>