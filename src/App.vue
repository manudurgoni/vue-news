<template>
  <div id="news-app" class=" container mx-auto">
    <nav class="menu my-10">
      <router-link class="underline mr-4 text-blue-700" to="/">Home</router-link>
      <router-link class="underline mr-4 text-blue-700" to="/about">About</router-link>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import VLoader from './components/Loader.vue'

Vue.component('v-loader', VLoader)

export default {
  name: 'App',
}
</script>