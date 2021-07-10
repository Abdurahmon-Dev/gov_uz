<template>
    <main class="main">
      <div class="Contanier-card my-style">
        <div>
          <img src="@/assets/not_image.png" alt="" />
        </div>
        <h3>{{ title }}</h3>
        <button @click="$emit('open')">Boshlash</button>
      </div>
    </main>
</template>

<script>
export default {
  props: ['title']
};
</script>

<style scoped>
.Contanier-card div {
    border-radius: 50%;
    width: 80px;
    height: 80px;
    margin-bottom: 30px;
  }
  .Contanier-card div img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
  .Contanier-card h3 {
    font-size: 20px;
    font-weight: 600;
    font-family: Poppins;
    width: 186px;

  }
  .Contanier-card button {
    width: 100%;
    height: 63px;
    background-color: #f4f4f4;
    border: none;
    outline: none;
    border-radius: 15px;
    margin-top: 40px;
    cursor: pointer;
    color: black !important;
    transition: 0.3s ease;
  }
  
  .Contanier-card button:hover{
    background-color: #0d6efd;
  }
  .my-style {
    width: 226px;
    height: 303px;
  }
</style>
