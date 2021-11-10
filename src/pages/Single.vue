<template>
  <div class="single">
    <transition name="fade">
      <img v-if="!post" class="loader" src="../assets/loader.gif" alt="">

      <div v-else class="single__content">
        <img :src="post.image" class="custom-img" alt="">
      </div>
    </transition>
  </div>
</template>

<script>
import * as API from '../core/api'
export default {
  name: 'Single',
  data() {
    return {
      post: null
    }
  },
  async created() {
    const data = await API.getArticleByID(this.$route.params.id)
    

    setTimeout(() => {
      this.post = { ...data }
    }, 1000)
  },
}
</script>
