<template>
  <div>
    <main class="main">
      <div class="Contanier-card">
        <div>
          <img src="@/assets/not_image.png" alt="" />
        </div>
        <h3>Jismoniy Shaxslar uchun</h3>
        <b-button v-b-modal.modal-1>Boshlash</b-button>
      </div>

      <b-modal id="modal-1" title="Yuridik Shaxs">
          <p>Passport raqami</p>
          <b-form-input v-model="text"> </b-form-input>
          <p>Passport raqami</p>
          <b-form-input type="number" placeholder="helloWorld" v-model="number"> </b-form-input>
        
      </b-modal>
    </main>
  </div>
</template>

<script>
export default {
  mounted() {},
};
</script>

<style>
@import url(./enter_card.css);
</style>
