<template>
  <div>
       <!-- 引入用户动态主页 -->
       <userflow></userflow>
  </div>
</template>

<script>
// @ is an alias to /src
import userflow from '@/components/home/userflow.vue'
import state from '@/components/home/state.vue'

export default {
  name: 'header',
  components: {
    userflow,
    state
  },
  created(){
      this.$store.commit('change',2)
    console.log(12)
  }
}
</script>
<style scoped>
@import '../assets/css/home.css';

</style>

