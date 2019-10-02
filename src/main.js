import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import '@/assets/css/reset.css'//@指的是src文件
import '@/assets/js/rem.js'

//按需引入vant组件 推荐
import { Button, Icon, NavBar, Tabbar, TabbarItem, Swipe, SwipeItem, Lazyload   } from 'vant';
Vue.use(Button).use(Icon).use(NavBar).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload);

//vant的完全引入，也就是引入所有的组件，缺点是体积大
// import Vant from 'vant';
// import 'vant/lib/index.css';

// Vue.use(Vant);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
