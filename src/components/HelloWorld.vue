<template>
  <div style="margin-left: 20px;">
    <span>{{$store.state.counter}}</span>
    <div>
      <view-header></view-header>
    </div>
  </div>
</template>

<script>
  import viewHeader from '@/components/view.vue'
  export default {
    name: 'HelloWorld',
    components: {
      viewHeader
    }
  }
</script>