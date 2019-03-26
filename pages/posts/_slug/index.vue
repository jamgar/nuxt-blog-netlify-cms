<template>
  <div :key="$route.params.slug">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{ $route.params.slug }}</h1>
          <h2 class="subtitle">A dynamic markdown file</h2>
        </div>
      </div>
    </section>
    <div class="container">
      <div>{{ attributes.title }}</div>
      <div v-html="content"></div>
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
  async asyncData({ params }) {
    const fileContent = await import(`~/content/posts/${params.slug}.md`)
    console.log(fileContent)
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
