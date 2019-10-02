<template>
  <div>
    <van-nav-bar title="商城">
      <van-icon name="search" slot="left" />
      <van-icon name="cart" slot="right" />
    </van-nav-bar>
    <!-- 轮播图 -->
    <div>
      <van-swipe :autoplay="3000">
        <van-swipe-item class="carousel-item" v-for="(item,index) in carouselItem" :key="index">
          <img v-lazy="item.imgSrc" alt />
          <!-- 是：src的时候全加载出来，性能会不好 -->
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 热门商品 -->
    <div class="hot">
      <p>热门商品</p>

    </div>
    <div>

    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data() {
    return {
      carouselItem: [
        {
          name: "img1",
          imgSrc: "cd"
        },
        {
          name: "img2",
          imgSrc: "cd"
        },
        {
          name: "img2",
          imgSrc: "cd"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.carousel {
  height: 3rem;
  &-item {
    img {
      width: 100rem;
      height: 3rem;
    }
  }
}
</style>