<template>
  <article :key="$route.params.slug">
    <header class="tc-l ph3 ph4-ns pt4 pt5-ns">
      <h1 class="f3 f2-m measure lh-title mt0 center">
        {{ attributes.title }}
      </h1>
      <time class="f5 f4-l db fw1 mb4">
        {{ attributes.date | moment('dddd, MMMM Do YYYY') }}
      </time>
    </header>
    <div class="measure-wide db center f5 f4-ns lh-copy">
      <img
        v-if="attributes.thumbnail"
        class="w-100 dib measure f3"
        :src="attributes.thumbnail"
        :alt="attributes.title"
      />
      <p v-html="content"></p>
    </div>
  </article>
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
