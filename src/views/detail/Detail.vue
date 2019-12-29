<template>
  <div id="detail">
   个人
  </div>
</template>

<script>
 
  export default {
		name: "Detail",
    components: {
    },
    data() {
		  return {
		   
      }
    }
  }
</script>

<style scoped>
  #detail {
    height: 100vh;
    position: relative;
    z-index: 1;
    background-color: #fff;
  }

  .content {
    position: absolute;
    top: 44px;
    bottom: 60px;
  }

  .back-top {
    position: fixed;
    right: 10px;
    bottom: 65px;
  }
</style>
