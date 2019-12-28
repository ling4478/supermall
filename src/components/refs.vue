<template>
  <div id="app">
    <cpn ref="aaa"></cpn>
  </div>
</template>

<script>
  // 父组件
const app = new Vue({
  el: '#app',
  data: {
    message: '你好'
  },
  methods: {
    btnClick(){
      this.$refs.aaa.showMessage();  //拿到子组件的方法
      this.$refs.aaa.name;  // 拿到子组件的属性
    }
  },
  components:{
    cpn: {
      template: '#cpn',
      data () {
        return {
          name: '我是子组件的name'
        }
      },
      methods: {
        showMessage(){
          console.log('showMessage');
        }
      },
    
    }
  }
})
</script>