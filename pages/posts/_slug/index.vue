<template>
  <div :key="$route.params.slug">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <div v-if="attributes.thumbnail">
            <img :src="attributes.thumbnail" :alt="attributes.title" />
          </div>
          <h1 class="title">{{ attributes.title }}</h1>
          <div v-html="content"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const md = require('markdown-it')({
  breaks: true,
  linkify: true,
  html: true
}).use(require('markdown-it-highlightjs'))

export default {
  async asyncData({ params }) {
    const fileContent = await import(`~/content/posts/${params.slug}.md`)
    return {
      attributes: fileContent.attributes,
      content: md.render(fileContent.body)
    }
  }
}
</script>

<style>
.container {
  margin: 0 60px;
  max-width: 960px;
}
</style>
