<template>
  <div class="single">
    <pre class="whitespace-pre-wrap">{{ post }}</pre>
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
    this.post = await API.getArticleByID(this.$route.params.id)
  },
}
</script>