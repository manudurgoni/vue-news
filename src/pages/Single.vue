<template>
  <div class="single">
    <h1>Single page {{ $route.params.id }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Single',
  mounted() {
    console.log(this.$route)
  }
}
</script>