<template>
  <main>
    <div class="enter-card">
      <EnterCard :title="titlesName.js " @open="openModal(titlesName.js,1)" id="a" />
      <EnterCard :title="titlesName.ys" @open="openModal(titlesName.ys,2)" id="b" />
      <EnterCard :title="titlesName.as" @open="openModal(titlesName.as,3)" id="c" />
      <EnterCard :title="titlesName.uy" @open="openModal(titlesName.uy,4)" id="d" />
    </div>
    <BaseModal ref="ModalRef" />
  </main>
</template>

<script>
import EnterCard from "./EnterCards/index.vue";
import animation from "@/Animations/animation.js";
import BaseModal from "@/components/BaseModal/index.vue";

export default {
  data() {
    return {
      titlesName: {
        js: 'Jismoniy Shaxslar uchun',
        ys: 'Yuridik shaxslar uchun',
        as: 'Avto yo`lovchilar uchun',
        uy: 'Uy oldi sotdi uchun'
      }
    }
  },
  components: {
    EnterCard,
    BaseModal
  },
  methods: {
    openModal(title,type) {
      this.$refs.ModalRef.open(title,type);
    },
  },
  mounted() {
    animation("a");
    animation("b");
    animation("c");
    animation("d");
  },
};
</script>

<style>
.enter-card {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 160px;
}

</style>