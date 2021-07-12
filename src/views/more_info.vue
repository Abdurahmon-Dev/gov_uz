<template>
  <div class="more-info-cont">
      <div class="Contanier-card me-3 ava" style="width:262px; margin:0 !important;">
        <img src="@/assets/not_image.png" alt="">
        <button>Umumiy ma’lumot</button>
        <p>Mening arizalarim</p>
        <p>Xabarnoma</p>
        <p>To’lovlar tarixi</p>
      </div>

      <div class="Contanier-card" style="width:332px">
        <h2>Umumiy ma’lumot</h2>
        <small class="d-block">Familiya, ism va sharifi</small>
        <b>Turaqulov Tumirjon Tulqinjon o’g’li</b>

        <small class="d-block">Tug’ilgan sanasi</small>
        <b>16.06.1991</b>

        <small class="d-block">Stir</small>
        <strong>505934497</strong>

        <small class="d-block">Telefon raqami</small>
        <b>97 900-36-599</b>
 
        <small class="d-block">Tug’ilgan sanasi</small>
        <b>16.06.1991</b>
   
        <small class="d-block">Stir</small>
        <strong>505934497</strong>
    
        <small class="d-block">Telefon raqami</small>
        <b>97 900-36-599</b>
        
        
      </div>
      <div class="d-block">
        <div class="Contanier-card" style="width: 317px">
          <h2>Ma’lumoti</h2>
          <small class="d-block">Oli ta’lim muassasi</small>
          <b>O’zmu</b>
  
          <small class="d-block">Mutaxassisligi</small>
          <b>Milliy g’oya, ma’naviyat asoslari</b>
    
          <small class="d-block">Berilgan yili</small>
          <strong>22.06.2021</strong>
      
          <small class="d-block">Diplom seriya raqami</small>
          <b>22.06.2021</b>
        </div>


        <div class="Contanier-card mt-3" style="width:317px">
          <h2>Hozirgi ish joyi</h2>
          <small class="d-block">Tashkilot nomi</small>
          <strong class="w-50">Elektron hukumat loyihalarini boshqarish markazi</strong>
      
          <small class="d-block">Ish boshlagan sana</small>
          <b>01ю04ю2024</b>
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
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
  .ava img {
    width: 99px;
    height: 99px;
    border-radius: 10px;
    margin-bottom: 27px;
  }
  .ava button {
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
  .ava p {
    cursor: pointer;
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 40px;
  }
  .ava p:hover {
    color: #1B66F3;
  }
  .Contanier-card h2 {
    font-weight: 700;
    color: #1B66F3;
    font-size: 20px;
    width: 65%;
    margin-bottom: 20px;
  }
  .Contanier-card small {
    font-weight: 400;
    font-size: 15px;
    margin-top: 20px;
    margin-bottom: 5px;
    width: 70%;
  }
  .Contanier-card b, strong {
    font-weight: 600;
    font-size: 17px;
    margin-bottom: 20px !important;
  }
  strong {
    width: 50% !important;
  }
  b {
    width: 50%;
  }
</style>