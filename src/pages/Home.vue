<template>
  <div class="home">
    <h1>Home page</h1>
  </div>
</template>

<script>
import * as API from '../core/api'
export default {
  name: 'Home',
  created() {
    API.getArticles()
  }
}
</script>