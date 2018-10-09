// 引入或设置全局所需要的模块和组件
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 使用axios进行ajax请求
import axios from 'axios'
// 引入qs模块并注册为Vue的原型对象方法
import qs from 'qs';
Vue.prototype.$qs = qs;
import Mint from 'mint-ui';

Vue.use(Mint);
//引入自己写的头尾部组件
import artheader from "@/components/artheader.vue";
import artfooter from "@/components/artfooter.vue";
import myheader from "@/components/header.vue";
import myfooter from "@/components/footer.vue";
Vue.component('artheader', artheader);
Vue.component('artfooter', artfooter);
Vue.component('myheader', myheader);
Vue.component('myfooter', myfooter);

//引入数据总线
Vue.prototype.bus = new Vue();
// 引入提示框，此功能不需要注册
import {Toast} from 'mint-ui';

// import VueAxios from 'vue-axios'
axios.defaults.withCredentials = true

Vue.config.productionTip = false
//Vue-resouce $http
Vue.prototype.$http = axios;
//$http.get()=>axios.get()

// 设置全局过滤器，所有组件都可用
Vue.filter("title", function (val, len) {
  if (val.length <= len) {
    return val
  } else {
    return val.slice(0, len) + "...";
  }
})
// 使用vue自带ajax请求，目前已不推荐
// import VueResource from "vue-resource"
// Vue.use(VueResource)


// 设置ajax请求默认请求地址前缀
// Vue.http.options.root = "http://127.0.0.1:5000/";
new Vue({
  data:{
    online:true,
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')