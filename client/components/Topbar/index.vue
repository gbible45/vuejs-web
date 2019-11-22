<template>
    <div id="topbar">
        <span class="topbar-title">{{title}}</span>
    </div>
</template>

<script>
export default {
  name: 'Topbar',
  props: ['openSidebar', 'title']
}
</script>

<style lang="scss">
// You can import all your SCSS variables using webpack alias
@import '~scss_vars';
@import './style.scss';
</style>
