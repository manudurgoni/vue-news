<template>
  <div class="single">
    <h1>Single page {{ $route.params.id }}</h1>
  </div>
</template>

<script>
import * as API from '../core/api'
export default {
  name: 'Single',
  created() {
    API.getArticleByID(this.$route.params.id)
  },
  mounted() {
    //console.log(this.$route)
  }
}
</script>