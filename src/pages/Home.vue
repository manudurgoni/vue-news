<template>
  <div class="home">
    <router-link class="block my-6 text-lg" v-for="post in posts" :key="post.id" :to="`/news/${post.id}`">{{ post.title }}</router-link>
  </div>
</template>

<script>
import * as API from '../core/api'
export default {
  name: 'Home',
  data() {
    return {
      posts: []
    }
  },
  async created() {
    this.posts = await API.getArticles()
  }
}
</script>