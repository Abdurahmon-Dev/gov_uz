<template>
  <div style="background:#E5E5E5; min-height:100vh;">
    <BaseHeader/>
    <div class="enter-card">
      <EnterCard :title="'Jismoniy Shaxslar uchun'" @open="openModal" id="a"/>
      <EnterCard :title="'Yuridik shaxslar uchun'" @open="openModal" id="b"/>
      <EnterCard :title="'Avto yo`lovchilar uchun'" @open="openModal" id="c"/>
      <EnterCard :title="'Yana nimadir uchun'" @open="openModal"  id="d"/>
    </div>

    <modal name="example">
      <div>
        <i class="ri-close-fill close_icon"></i>
      </div>
    </modal>
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
      animation('b');
      animation('c');
      animation('d');

  },
  methods: {
    openModal() {
          this.$modal.show('example');
    }
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
