<template>
  <div class="home">
    <router-link class="block my-6 text-lg" v-for="post in posts" :key="post.id" :to="`/news/${post.id}`">{{ post.text}}</router-link>

    <button class="">Voir plus</button>
  </div>
</template>

<script>
import * as API from '../core/api'
export default {
  name: 'Home',
  data() {
    return {
      posts: [],
      limit: 10,
      page: 0,
      total: 0,
    }
  },
  async created() {
    const json = await API.getArticles({
      limit: this.limit,
      page: this.page
    })

    this.posts = json.data
    this.total = json.total
  }
}
</script>