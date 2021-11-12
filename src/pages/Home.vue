<template>
  <div class="home">
    <v-loader ref="loader" :auto-hide="false"></v-loader>

    <div class="home__content">
      <!-- <h1 class="text-3xl">{{ loadedRounded }}%</h1> -->
      <div class="home__grid">
        <router-link
          @mouseenter.native="onMouseEnter"
          @mouseleave.native="onMouseLeave"
          class="item text-lg"
          v-for="post in posts"
          :key="post.id"
          :to="`/news/${post.id}`"
        >
          <img :src="post.image" alt />
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
      limit: 9,
      page: 0,
      total: 0,
      loaded: 0,
      timeline: null
    }
  },

  computed: {
    loadedRounded() {
      return Math.round(this.loaded)
    },

    isLast() {
      const lastPage = Math.round(this.total / this.limit)
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
    await this.getData()

    this.$refs.loader.loaderCompleted()
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
        translateY: [100, 0],
        opacity: [0, 1]
      })

    },

    onMouseEnter(e) {
      const currentItem = e.target
      currentItem.style.zIndex = 1
      anime({
        targets: currentItem,
        scale: 0.95,
        easing: 'easeOutExpo',
      })

      const items = Array.from(this.$el.querySelectorAll('.item'))
      const currentItemIndex = items.indexOf(currentItem)
      items.splice(currentItemIndex, 1)
      anime({
        targets: items,
        scale: [1, 0.8],
        opacity: 0.8,
        // rotate: (item, index, total) => {
        //   const mult = Math.random() > 0.5 ? 1:-1
        //   return Math.random() * 180 * mult
        // },
        easing: 'easeOutExpo',
      })
    },

    onMouseLeave(e) {
      const currentItem = e.target
      currentItem.style.zIndex = 0
      anime({
        targets: currentItem,
        scale: 1,
        zIndex: 0,
        rotate: 0,
        opacity: 1,
      })

      const items = Array.from(this.$el.querySelectorAll('.item'))
      const currentItemIndex = items.indexOf(currentItem)
      items.splice(currentItemIndex, 1)
      anime({
        targets: items,
        scale: 1,
        rotate: 0,
        opacity: 1,
        easing: 'easeOutExpo',
      })
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
  /* flex-wrap: ; */
}

.home__grid .item {
  width: 33.3333%;
  position: relative;
}

.home__grid .item::before {
  display: block;
  content: "";
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