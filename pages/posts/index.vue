<template>
  <div>
    <div v-for="(post, idx) in Posts" :key="idx" class="ph5">
      <PostCard :post="post" />
    </div>
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
