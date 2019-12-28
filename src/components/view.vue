<template>
  <div>
    <h2>{{$store.state.counter}}</h2>
    <i-button @click="add">+</i-button>
    <i-button @click="submit">-</i-button>
    <p>{{this.$store.state.students}}</p>
    <h2>内容</h2>
    <h2>getters 的内容 </h2>
    <i-button @click="addCount(5)">+=5</i-button>
    <i-button @click="addCount(10)">+=10</i-button>
    <h2>{{this.$store.getters.more20stu}}</h2>
    <i-button @click="addStudents">添加学生</i-button>
  </div>
</template>

<script>
  export default {
    name: 'view-header',
    data() {
      return {

      }
    },
    computed: {
      more20stu() {
        return this.$store.state.students.filter(item => item.age >= 20)
      },
    },
    methods: {
      add() {
        this.$store.commit("increment")   // 通过commit提交mutations里面的东西
      },
      submit() {
        this.$store.commit("decrement")
      },
      addCount(count) {
        this.$store.commit("incrementCount", count);
      },
      addStudents() {
        const stu = { id: 114, name: 'Arrl', }
        this.$store.commit("addStudent", stu)
        this.$dispatch("aUpdateInfo",
          '我是携带的参数'
        ).then(res => {
          console.log('这里已经完成了提交');
          console.log(res);
        })
      }
    }, 
  }
</script>