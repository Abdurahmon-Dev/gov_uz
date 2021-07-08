<template>
  <div style="background:#E5E5E5; min-height:100vh;">
    <BaseHeader/>
    <div class="enter-card">
      <EnterCard id="a"/>
      <EnterCard id="a"/>
      <EnterCard id="a"/>
      <EnterCard id="a"/>
    </div>
  </div>
</template>

<script>
import BaseHeader from './components/Header/index.vue'
import EnterCard from './components/EnterCards/index.vue'
import animation from '@/Animations/animation.js'

export default {
  name: 'App',
  components: {
    BaseHeader,
    EnterCard
  },
  mounted() {
      animation('a');
  }
}
</script>

<style>
  @import url(./styles/reset.css);
  @import url(./styles/BaseCard.css);
</style>
<style>
  .enter-card {
    /* height: 100vh; */
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    margin-top: 160px;
    
  }
</style>
