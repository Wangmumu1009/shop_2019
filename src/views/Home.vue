<template>
  <div class="container">
    <van-nav-bar title="商城" class="nav-title">
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
      <p class="hot-tittle">热门商品</p>
      <swiper class="hot-swiper" :options="swiperOption">
        <swiper-slide v-for="(item,index) in hotProducts" :key="index">
          <div class="hot-swiper-content">
            <img :src="item.img" alt="">
            <div>{{item.name}}</div>
            <div>￥{{item.price}}</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div>
    </div>

    <!-- 推荐商品  -->
    <div class="variety">
      <p>推荐商品</p>
      <ul>
        <li class="variety-item" v-for="(item,index) in varietyItem" :key="index">
          <p>{{item.name}}</p>
          <img :src="item.img" alt="">
          <p>￥{{item.price}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import axios from 'axios'
export default {
  data() {
    return {
      //轮播图的
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
      ],
      //热门商品
      hotProducts:[
        {
          name:"qysdggj",
          img:"http",
          price:"3260",
          company:"yxx",
          city:"qf"
        },
        {
          name:"qysdggj",
          img:"http",
          price:"3260",
          company:"yxx",
          city:"qf"
        },
        {
          name:"qysdggj",
          img:"http",
          price:"3260",
          company:"yxx",
          city:"qf"
        },
        {
          name:"qysdggj",
          img:"http",
          price:"3260",
          company:"yxx",
          city:"qf"
        },
        {
          name:"qysdggj",
          img:"http",
          price:"3260",
          company:"yxx",
          city:"qf"
        },
        {
          name:"qysdggj",
          img:"http",
          price:"3260",
          company:"yxx",
          city:"qf"
        }
      ],
      swiperOption:{
        slidesPerView:3,
      },
      //推荐商品
      varietyItem:[
         {
          name:"qysdggj",
          img:"http",
          price:"3260",
          company:"yxx",
          city:"qf"
        },
        {
          name:"qysdggj",
          img:"http",
          price:"3260",
          company:"yxx",
          city:"qf"
        },
        {
          name:"qysdggj",
          img:"http",
          price:"3260",
          company:"yxx",
          city:"qf"
        },
        {
          name:"qysdggj",
          img:"http",
          price:"3260",
          company:"yxx",
          city:"qf"
        },
        {
          name:"qysdggj",
          img:"http",
          price:"3260",
          company:"yxx",
          city:"qf"
        },
        {
          name:"qysdggj",
          img:"http",
          price:"3260",
          company:"yxx",
          city:"qf"
        }
      ]
    };
  },
  components:{
    swiper,
    swiperSlide
  },
  created(){
    let url = 'http://www.weichuang.com/getVarietyItem';
    axios.get(url).then(res =>{
      console.log(res);
      this.varietyItem = res.data;
    })
  }
};
</script>

<style lang="scss">
.container{
  background: #eee;
}
body{
  height: 2000px;
}
.nav-title{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 999!important;
}
.carousel {
  height: 3rem;
  margin-top: 1rem;
  &-item {
    img {
      width: 100rem;
      height: 3rem;
    }
  }
}
.hot{
  margin-top:0.2rem;
  background-color: #fff; 
  &-tittle{
    width: 100%;
    height: 0.5rem;
    padding-left: 0.2rem;
    line-height: 0.5rem;
    // text-align: center;
    box-sizing: border-box;//把标准盒模型转化为怪异盒模型
  }
  &-swiper{
    &-content{
      img{
        width: 100rem;
        height: 3rem;
      }
    }
  }
}
//热门商品
.variety{
  margin-top: 0.2rem;
  background: #fff;
  text-align: center;
  margin-bottom: 1rem;
  ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  &-item{
    flex-basis: 45%;
  }
  img{
    width:2rem;
    height: 2rem;
  }
} 
</style>