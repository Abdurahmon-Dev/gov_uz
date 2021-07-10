<template>
  <main>
    <div class="enter-card">
      <EnterCard :title="'Jismoniy Shaxslar uchun'" @open="openModal" id="a" />
      <EnterCard :title="'Yuridik shaxslar uchun'" @open="openModal" id="b" />
      <EnterCard :title="'Avto yo`lovchilar uchun'" @open="openModal" id="c" />
      <EnterCard :title="'Uy oldi sotdi uchun'" @open="openModal" id="d" />
    </div>

    <modal name="example" :width="402" :height="455">
      <div class="modal-box">
        <h3 class="text-primary fw-bold fs-4 mb-5">Yuridik shaxs</h3>

        <p class="fw-normal">Passport raqami</p>
        <input class="form-control" type="text" />
        <br />
        <p class="fw-normal">Passport raqami</p>
        <input class="form-control mb-4" type="text" />
        <button
          class="w-100 btn btn-primary mt-5 rounded"
          style="height: 63px"
          @click="MorePage('/MoreInfo')"
        >
          Yuklash
        </button>
      </div>
    </modal>
  </main>
</template>

<script>
import EnterCard from "./EnterCards/index.vue";
import animation from "@/Animations/animation.js";

export default {
  components: {
    EnterCard,
  },
  methods: {
    openModal() {
      this.$modal.show("example");
    },
    MorePage(value) {
      this.$router.push(value)
    }
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
.modal-box {
  padding: 40px;
}
.myModal {
  border-radius: 70px;
}
</style>