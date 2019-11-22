<template>
    <header>
        <el-menu theme="dark" mode="horizontal">
            <el-menu-item class="header-navicon" index="1">
                <el-button type="text" @click="openSidebar">
                    <i class="md-icon">menu</i>
                </el-button>
            </el-menu-item>
            <span class="header-title">{{title}}</span>
            <el-submenu v-if="isAuthenticated" class="header-menu" index="3">
                <template slot="title">Workspace</template>
                <el-menu-item index="4-1" @click="popPassword">Password</el-menu-item>
                <el-menu-item index="4-2" @click="Logout">Logout</el-menu-item>
            </el-submenu>
        </el-menu>
    </header>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'Header',
  props: ['openSidebar', 'title'],
    computed: {
        ...mapState({
            isAuthenticated: state => {
                return state.ui.isAuthenticated
            },
        })
    },
  methods: {
    popPassword: function () {
      alert("popPassword");
/*
        this.$apiService.userService.password(
            {password: this.password}
        ).then((response) => {
            this.$store.state.ui.isAuthenticated = true;
        }).catch((err) => {
            console.log(err);
        });
*/
    },
    Logout: function () {
      this.$apiService.userService.access()
      .then((response) => {
        this.$store.state.ui.isAuthenticated = false;
      }).catch((err) => {
        console.log(err);
      });
    },
  }
}
</script>

<style lang="scss">
// You can import all your SCSS variables using webpack alias
@import '~scss_vars';
@import './style.scss';
</style>
