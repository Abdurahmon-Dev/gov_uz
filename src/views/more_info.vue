<template>
  <div class="more-info-cont">
      <div class="Contanier-card">
        <img src="@/assets/not_image.png" alt="">
        <button>Umumiy ma’lumot</button>
        <p>Mening arizalarim</p>
        <p>Xabarnoma</p>
        <p>To’lovlar tarixi</p>
      </div>
      
      <div class="Contanier-card">

      </div>
      <div class="d-block">
        <div class="Contanier-card">

        </div>
        <div class="Contanier-card">

        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .more-info-cont {
    margin-top: 40px;
    padding: 0 200px;
    display: flex;
  }
  .Contanier-card {
    width: 262px;
  }
  .Contanier-card img {
    width: 99px;
    height: 99px;
    border-radius: 10px;
    margin-bottom: 27px;
  }
  .Contanier-card button {
    width: 100%;
    height: 63px;
    color: #1B66F3;
    font-size: 17px;
    font-weight: 600;
    border-radius: 10px;
    border: none;
    background-color: rgb(198, 227, 238);
    margin-bottom: 20px;
  }
  .Contanier-card p {
    cursor: pointer;
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 40px;
  }
  .Contanier-card p:hover {
    color: #1B66F3;
  }
</style>