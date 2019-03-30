<template>
  <section class="container">
    <div>All Post listed here!</div>
  </section>
</template>

<script>
export default {
  computed: {
    allPost() {
      return this.$store.state.posts
    }
  }
}
</script>

<style></style>
