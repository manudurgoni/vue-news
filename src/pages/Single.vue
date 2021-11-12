<template>
  <div class="single">
    <v-loader ref="loader" :auto-hide="false"></v-loader>

    <div v-if="post" class="single__content">
      <img :src="post.image" class="custom-img" alt="">
    </div>
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

      this.$refs.loader.loaderCompleted()
    }, 500)
  },
}
</script>
