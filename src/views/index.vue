<template>

</template>

<script>
export default {
  name: 'index',
  components: {

  },
  data () {
    return {
      index: ''
    }
  },
  methods () {
    this.$emit("handleDeleClick",this.index())
  }
}
</script>