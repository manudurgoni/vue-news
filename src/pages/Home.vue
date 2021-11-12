<template>
  <div class="home">

    <img v-if="posts.length < 1" class="loader" src="../assets/loader.gif" alt="">

    <div v-else class="home__content">
      <!-- <h1 class="text-3xl">{{ loadedRounded }}%</h1> -->
      <div class="home__grid">
        <router-link class="item  text-lg" v-for="post in posts" :key="post.id" :to="`/news/${post.id}`">
          <img :src="post.image" alt="">
        </router-link>
      </div>
      <!-- <button class="text-white bg-gray-800 p-4 my-10" @click="showMore" v-if="!isLast">Voir plus</button> -->
    </div>
    
  </div>
</template>

<script>
import anime from 'animejs'

import * as API from '../core/api'
export default {
  name: 'Home',
  data() {
    return {
      posts: [],
      limit: 10,
      page: 0,
      total: 0,
      loaded: 0
    }
  },

  computed: {
    loadedRounded() {
      return Math.round(this.loaded)
    },

    isLast() {
      const lastPage = Math.round(this.total / this.limit)
      console.log(lastPage, this.page)
      return this.page >= lastPage
    }
  },

  watch: {
    posts() {
      this.$nextTick(() => {
        this.enterAnimation()
      })
    }
  },

  async created() {
    this.getData()
  },

  mounted() {
    
  },

  methods: {
    showMore() {
      this.page++
      this.getData()
    },

    enterAnimation() {
      const items = this.$el.querySelectorAll('.item')

      anime({
        targets: items,
        duration: 660,
        delay: anime.stagger(16, {
          start: 1000
        }),
        easing: 'easeOutExpo',
        translateY: [200, 0],
        opacity: [0, 1]
      })

      // anime({
      //   targets: this,
      //   loaded: 100,
      //   duration: 3000,
      //   easing: 'linear'
      // })

      console.log(items)
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

<style scoped>
.home {
  position: relative;
}

.home__grid {
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  /* flex-wrap: ; */
}

.home__grid .item {
  width: 33.3333%;
  position: relative;
}

.home__grid .item::before {
  display: block;
  content: '';
  padding-top: 100%;
}
.home__grid .item img {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>