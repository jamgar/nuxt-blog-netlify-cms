<template>
  <div id="home">
    <header class="vh-75 bg-light-silver tc dt w-100">
      <div id="jumbotron" class="dtc v-mid cover ph3 ph4 ph5-l v-top">
        <h1 class="f1 fl-m f-headline-l">Write more</h1>
      </div>
    </header>
    <section id="featured-post">
      <h1 class="f2 tc">Featured Posts</h1>
      <div class="ph5">
        <PostCard v-for="(post, idx) in Posts" :key="idx" :post="post" />
      </div>
    </section>
  </div>
</template>

<script>
import PostCard from '@/components/PostCard'

export default {
  components: {
    PostCard
  },
  computed: {
    Posts() {
      return this.$store.state.posts.slice(0, 3)
    }
  }
}
</script>

<style>
#jumbotron {
  background-image: url('~assets/images/home-background.jpg');
}
</style>
