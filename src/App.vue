<template>
  <div id="app">
    <router-view></router-view>  
    <ul class="footer-bar">
      <li class="footer-bar-item">
        <router-link to="/">首页</router-link>
      </li>
      <li class="footer-bar-item">
        <router-link to="/catogory">分类</router-link>
      </li>
      <li class="footer-bar-item">
        <router-link to="/profile">我的</router-link>
      </li>
      <li class="footer-bar-item">
        <router-link to="/cart">购物车</router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.footer-bar{
  display: flex;
  background: #eeeeeeee;
  position: fixed;//固定定位会脱离文档流，如果不设置宽度就会挤在一起
  bottom: 0;
  width: 100%;
  height: 1rem;
  line-height: 1rem;//文字垂直居中
  &-item{
    flex-grow: 1;
    text-align: center
  }
}
</style>
