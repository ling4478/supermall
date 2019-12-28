<template>
    <div id="app">
      <cpn ref="aaa">
        <template slot-scope="slot">
          <span v-for="(item, index) in slot.data" :key="index">{{item}}-</span>
        </template>
      </cpn>
    </div>
  </template>
  <template id="cpn">
    <div>
      <slot :data="pLanguages">
        <ul>
          <li v-for="item in pLanguages">{{item}}</li>
        </ul>
      </slot>
    </div>
  </template>
  <script>
    // 父组件
  const app = new Vue({
    el: '#app',
    data: {
      message: '你好'
    },
   created() {
     this.pLangages.join("-")
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
  <script src='aaa.js' type="module"></script>