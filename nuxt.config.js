import fs from 'fs'
import md from 'markdown-it'
import pkg from './package'

/**
 * Create an array of URLs from a list files
 * @param {*} urlFilepathTable
 */
// const getDynamicPaths = urlFilepathTable => {
//   return [].concat(
//     ...Object.keys(urlFilepathTable).map(url => {
//       const filepathGlob = urlFilepathTable[url]
//       return glob
//         .sync(filepathGlob, { cwd: 'content' })
//         .map(filepath => `${url}/${path.basename(filepath, '.md')}`)
//     })
//   )
// }

// const dynamicRoutes = getDynamicPaths({
//   '/posts': 'posts/*.md'
// })

const files = fs.readdirSync('./content/posts')

const getSlugs = (post, index) => {
  const slug = post.substr(0, post.lastIndexOf('.'))
  console.log('slug: ', slug)
  return `/posts/${slug}`
}

const getDynamicRoutes = () => {
  return files.map(getSlugs)
}

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['tachyons/css/tachyons.css', 'highlight.js/styles/hopscotch.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/moment.js'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios'
    // [
    //   '@nuxtjs/markdownit',
    //   {
    //     breaks: true,
    //     linkify: true,
    //     html: true,
    //     typographer: true,
    //     use: ['markdown-it-highlightjs', 'markdown-it-front-matter']
    //   }
    // ]
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  generate: {
    routes: getDynamicRoutes
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader'
      })
    }
  }
}
