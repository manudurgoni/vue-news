<template>
  <div id="news-app">
    <nav class="menu m-8">
      <router-link class="underline text-xl ml-4" to="/">Home</router-link>
      <router-link class="underline text-xl ml-4" to="/about">About</router-link>
    </nav>
  
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>