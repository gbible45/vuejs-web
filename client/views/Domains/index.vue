<template>
<div>
    <h1>Post page with id: {{postId}}</h1>
    <h3>
        Maybe you want to improve your Progressive Web App with more Webpack tools?
    </h3>
</div>
</template>

<script>
export default {
  name: 'Domains',
  data () {
    return {}
  },
  computed: {
    postId () {
      return this.$route.params.id
    }
  },
  components: {}
}
</script>
