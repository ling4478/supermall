<template>
  <div></div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      userName: this.userName,
      password: this.password
    }
  },
  methods: {
    handleSumbit () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$emit("on-success-valid",{
            userName: this.userName,
            password: this.password
          })
        }
      })
    },
    handleLogin ({userName,password}) {
      this.$Loading.start()
      axios.get("http://localhost:8888/user/login",{
        params: {
          userName: userName,
          password
        }
      }).then(res => {
        this.$Loading.finish()
        if (res.data.success) {
          iView.Message.success('登录成功')
          setTimeout(() => {
            this.$router.push("/")
          },300)
        } else {
          iView.Message.error("用户名或密码错误");
        }
      })
    }
  }
}
</script>