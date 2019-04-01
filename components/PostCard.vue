<template>
  <div class="f5 f3-m lh-copy">
    <div class="cf dt-l w-100 pv4">
      <div class="dtc-l v-mid mw6 pr3-l">
        <img
          v-if="post.attributes.thumbnail"
          class="w-100"
          :src="post.attributes.thumbnail"
          :alt="post.attributes.title"
        />
      </div>
      <div class="dtc-l v-mid f6 f5-m f4-l measure-l">
        <p class="measure pv2-l center" v-html="getFormattedPost.content"></p>
        <p class="f6 lh-copy gray mv0">
          By
          <span class="ttu">James Garcia</span>
        </p>
        <time class="f6 db gray">{{
          post.attributes.date | moment('dddd, MMMM Do YYYY')
        }}</time>
      </div>
    </div>
  </div>
</template>

<script>
const md = require('markdown-it')({
  breaks: true,
  linkify: true,
  html: true
}).use(require('markdown-it-highlightjs'))

export default {
  props: {
    post: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  computed: {
    getFormattedPost() {
      return {
        content: md.render(this.truncate())
      }
    }
  },
  methods: {
    truncate() {
      const body = this.post.body
      return (
        body
          .split(' ')
          .slice(0, 62)
          .join(' ') + '...'
      )
    }
  }
}
</script>

<style scoped></style>
