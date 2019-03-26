<template>
  <section class="container">
    <div>{{ allPost }}</div>
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
