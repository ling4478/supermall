<template>
  <div id="cart">
    <nav-bar class="cart-nav">
      <div slot="center">
        购物街
      </div>
    </nav-bar>
    <swiper :banners="banners"></swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control :titles="titles"></tab-control>
    <ul v-for="item in list">
      <li>{{item}}</li>
      <li>{{item}}</li>
      <li>{{item}}</li>
      <li>{{item}}</li>
      <li>{{item}}</li>
      <li>{{item}}</li>
      <li>{{item}}</li>
    </ul>
  </div>
</template>
<script>
  import { getHomeMultidata } from '@/network/cart.js';
  import swiper from './childComps/HomeSwiper';
  import RecommendView from './childComps/RecommendView';
  import featureView from './childComps/featureView';
  import navBar from '@/components/common/navbar/NavBar';
  import tabControl from '@/components/content/tabControl/tabControl';

  export default {
    name: "Cart",
    components: {
      navBar,
      swiper,
      RecommendView,
      featureView,
      tabControl
    },
    data() {
      return {
        banners: [],
        recommends: [],
        titles:['流行','精选','内部'],
        list: ['111','1111','1111','111']
      }
    },
    created() {
      // 1。请求多个数据 
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    }
  }
</script>

<style scoped>
  #cart {
    /*position: relative;*/
    height: 100vh;
    padding-top: 44px;
  }

  .cart-nav {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    z-index: 999;
  }

  .cart-list {
    position: absolute;
    top: 44px;
    bottom: 49px;
    width: 100%;
  }
</style>