<template>
<div id="loginbox">
    <div>
        <h2>Login</h2>
    </div>
    <div>
        <div>
            <div style="height: 25px;">ID</div>
            <div style="height: 50px;"><el-input v-model="userId"></el-input></div>
        </div>
        <div>
            <div style="height: 25px;">PASSWORD</div>
            <div style="height: 50px;"><el-input type="password" v-model="password"></el-input></div>
        </div>
        <div>
            <div class="login_btn_div">
                <el-button type="primary" @click="loginAction">Login</el-button>
            </div>
        </div>
    </div>
</div>
</template>

<script>

export default {
  name: 'Login',
  data: function () {
    return {
      userId: null,
      password: null
    }
  },
  methods: {
    loginAction: function () {
      if (!this.userId) {
        alert("Please enter your ID.");
        return;
      }
      if (!this.password) {
        alert("Please enter your PASSWORD.");
        return;
      }
      this.$store.state.ui.isAuthenticated = true;
/*
      this.$apiService.userService.login(
        {userId: this.userId, password: this.password}
      ).then((response) => {
        this.$store.state.ui.isAuthenticated = true;
      }).catch((err) => {
          console.log(err);
          alert(err.message)
      });
*/
    }
  }
}
</script>
<style lang="scss">
    // You can import all your SCSS variables using webpack alias
    @import '~scss_vars';
    @import './style.scss';
</style>
