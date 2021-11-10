<template>
  <div class="home">
    <router-link class="block my-6 text-lg" v-for="post in posts" :key="post.id" :to="`/news/${post.id}`">{{ post.text}}</router-link>

    <button class="text-white bg-gray-800 p-4 my-10" @click="showMore" v-if="!isLast">Voir plus</button>
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

  computed: {
    isLast() {
      const lastPage = Math.round(this.total / this.limit)
      console.log(lastPage, this.page)
      return this.page >= lastPage
    }
  },

  async created() {
    this.getData()
  },

  methods: {
    showMore() {
      this.page++
      this.getData()
    },

    async getData() {
      const json = await API.getArticles({
        limit: this.limit,
        page: this.page
      })

      this.posts.push(...json.data)
      this.total = json.total
    }
  }
}
</script>