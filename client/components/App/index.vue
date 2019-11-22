<template>
    <div id="app">
        <div class="page-layout">
            <header-component :openSidebar="openSidebar" :title="title" />
            <sidebar-component :active="sidebarOpened" />
            <topbar-component :openSidebar="openSidebar" :title="title" />
            <div class="page-layout-inner">
                <main>
                    <div class="main-content">
                        <el-row class="container">
                            <router-view v-if="isAuthenticated"></router-view>
                            <login-component v-if="!isAuthenticated" />
                        </el-row>
                    </div>
                </main>
            </div>
            <dimmer-component :active="obfuscatorActive" :closeSidebar="closeSidebar" />
        </div>
    </div>
</template>

<script>
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import Topbar from 'components/Topbar'
import Dimmer from 'components/Dimmer'
import Login from 'components/Login'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'App',
  methods: {
    ...mapActions(['handleResize', 'openSidebar', 'closeSidebar'])
  },
  computed: {
    ...mapState({
        sidebarOpened: state => {
            return state.ui.sidebarOpened
        },
        obfuscatorActive: state => {
            return state.ui.obfuscatorActive
        },
        title: state => {
          return state.route.meta.title
        },
        isAuthenticated: state => {
            return state.ui.isAuthenticated
        },
    })
  },
  components: {
    'header-component': Header,
    'sidebar-component': Sidebar,
    'topbar-component': Topbar,
    'dimmer-component': Dimmer,
    'login-component':  Login
  },
  created: function () {
    window.addEventListener('resize', this.handleResize)
    this.$apiService.userService.access()
    .then((response) => {
        if (response && response.data && response.data.result) {
            this.$store.state.ui.isAuthenticated = true;
        } else {
            this.$store.state.ui.isAuthenticated = false;
        }
    }).catch((err) => {
        this.$store.state.ui.isAuthenticated = false;
    });
  }
}
</script>

<style lang="scss">
// You can import all your SCSS variables using webpack alias
@import '~scss_vars';
@import './style.scss';</style>
