<template>
    <main class="main">
      <div class="Contanier-card">
        <div>
          <img src="@/assets/not_image.png" alt="" />
        </div>
        <h3>{{ title }}</h3>
        <button @click="$emit('open')" class="btn_start">Boshlash</button>
      </div>
    </main>
</template>

<script>
export default {
  props: ['title']
};
</script>

<style>
@import url(./enter_card.css);
</style>
