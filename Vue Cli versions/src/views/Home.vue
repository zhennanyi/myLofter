<template>
  <div>
       <!-- 引入用户动态主页 -->
       <userflow></userflow>
  </div>
</template>

<script>
// @ is an alias to /src
import userflow from '@/components/home/userflow.vue'

export default {
  name: 'header',
  components: {
    userflow
  }
}
</script>
<style scoped>
@import '../assets/css/home.css';

</style>

