<template>
  <div class="ph5">
    <PostCard v-for="(post, idx) in Posts" :key="idx" :post="post" />
  </div>
</template>

<script>
import PostCard from '@/components/PostCard.vue'

export default {
  components: {
    PostCard
  },
  computed: {
    Posts() {
      return this.$store.state.posts
    }
  }
}
</script>

<style scoped></style>
