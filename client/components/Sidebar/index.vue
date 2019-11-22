<template>
    <div id="sidebar" :class="{'open': active}">
        <el-menu theme="light" router>
            <div class="logo-container">
            </div>
            <el-menu-item index="/">Dashboard</el-menu-item>
            <el-menu-item index="/domains">Domains</el-menu-item>
            <el-menu-item index="/routers">Routers</el-menu-item>
            <el-menu-item index="/about">About</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: ['active'],
  computed: {
      isActive: () => {
          console.log(this);
          return this.active
      }
  }
}
</script>

<style lang="scss">
// You can import all your SCSS variables using webpack alias
@import '~scss_vars';
@import './style.scss';
</style>
