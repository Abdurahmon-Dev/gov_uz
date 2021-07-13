<template>
  <modal name="example" :width="402" :height="455">
    <div class="modal-box" v-if="type == 1">
      <h3 class="text-primary fw-bold fs-4 mb-5">{{ title }}</h3>

      <p class="fw-normal">Passport raqami</p>
      <input class="form-control" type="text" />
      <br />
      <p class="fw-normal">SHJIR</p>
      <input class="form-control mb-4" type="text" />
      <button
        class="w-100 btn btn-primary mt-5 rounded"
        style="height: 63px"
        @click="MorePage('/MoreInfo')">
        Yuklash
      </button>

    </div><div class="modal-box" v-if="type == 2">
      <h3 class="text-primary fw-bold fs-4 mb-5">{{ title }}</h3>

      <p class="fw-normal">STIR</p>
      <input class="form-control" type="text" />
      <br />
      <button
        class="w-100 btn btn-primary mt-5 rounded"
        style="height: 63px"
        @click="MorePage('/MoreInfo')">
        Yuklash
      </button>
    </div>

    <div class="modal-box" v-if="type == 3">
      <h3 class="text-primary fw-bold fs-4 mb-5">{{ title }}</h3>

      <p class="fw-normal">Tex passport</p>
      <input class="form-control" type="text" />
      <br/>
      <p class="fw-normal">Mashina raqami</p>
      <input class="form-control mb-4" type="text" />
      <button
        class="w-100 btn btn-primary mt-5 rounded"
        style="height: 63px"
        @click="MorePage('/MoreInfo')">
        Yuklash
      </button>
    </div>

    <div class="modal-box" v-if="type == 4">
      <h3 class="text-primary fw-bold fs-4 mb-5">{{ title }}</h3>

      <p class="fw-normal">Kadastr nomeri</p>
      <input class="form-control" type="text" />
      <br />
      <button
        class="w-100 btn btn-primary mt-5 rounded"
        style="height: 63px"
        @click="MorePage('/MoreInfo')">
        Yuklash
      </button>
    </div>
  </modal>
</template>

<script>
export default {
    data() {
        return {
            title: 'asd',
            type: null
        }
    },
  methods: {
    MorePage(value) {
      this.$router.push(value);
    },
    open(title,type) {
        this.title = title;
        this.type = type
        console.log(type)
        this.$modal.show("example");
    },
  },
};
</script>

<style>
.modal-box {
  padding: 40px;
}
.myModal {
  border-radius: 70px;
}
</style>