<template>
  <div id="home">
    <nav-bar>
      <div slot="center">
        
      </div>
    </nav-bar>
  </div>
</template>

<script>
import navBar from '@/components/common/navbar/NavBar'
  export default {
		name: "Home",
    components: {
      navBar
    },
    data() {
		  return {
		   
      }
    }
}

</script>

<style scoped>
  #home {
    /*position: relative;*/
    height: 100vh;
  }

  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }

  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  .fixed {
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
  }

  .back-top {
    position: fixed;
    right: 10px;
    bottom: 60px;
  }
</style>
