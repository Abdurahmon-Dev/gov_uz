<template>
  <div style="background:#E5E5E5; min-height:100vh;">
    <BaseHeader/>
    <router-view />
  </div>
</template>

<script>
import BaseHeader from './components/Header/index.vue'

export default {
  name: 'App',
  components: {
    BaseHeader,
  },
}
</script>

<style>
  @import url(./styles/index.css);
</style>

