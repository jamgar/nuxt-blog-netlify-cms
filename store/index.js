export const state = () => ({
  posts: [],
  post: {}
})

export const mutations = {
  SET_POSTS(state, data) {
    state.posts = data
  }
}

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('getAllPosts')
  },
  async getAllPosts({ state, commit }) {
    // The require.context is from Webpack
    const context = await require.context('~/content/posts/', false, /\.md$/)

    const searchPosts = await context.keys().map(key => ({
      ...context(key),
      _path: `/posts/${key.replace('.md', '').replace('./', '')}`
    }))
    commit('SET_POSTS', searchPosts)
  }
}
