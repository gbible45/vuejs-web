<template>
<div class="dimmer" :class="{active}" @click="closeSidebar">
</div>
</template>

<script>
export default {
  name: 'Dimmer',
  props: ['active', 'closeSidebar']
}
</script>

<style lang="scss">
    // You can import all your SCSS variables using webpack alias
    @import '~scss_vars';
    @import './style.scss';
</style>
