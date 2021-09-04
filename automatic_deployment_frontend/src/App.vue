<template>
  <div id="app">
    <div class="container" style="border: 1px solid black;">
      <form class="row g-3">
        <div class="col-md-6">
          <label for="developerName" class="form-label">Developer Name</label>
          <input
            type="text"
            class="form-control"
            id="developerName"
            v-model="devname"
          />
        </div>
        <div class="col-md-6">
          <label for="developerEmail" class="form-label">Developer Email</label>
          <input
            type="email"
            class="form-control"
            id="developeremail"
            v-model="email"
          />
        </div>
        <div class="col-12">
          <label for="sourceAddress" class="form-label"> Source Address</label>
          <input
            type="text"
            class="form-control"
            id="sourceAddress"
            placeholder=""
            v-model="sourcelink"
          />
        </div>
        <div class="col-12" style="text-align: center;">
          <button
            type="submit"
            class="btn btn-lg btn-dark"
            @click="handleSubmit()"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      devname: "",
      email: "",
      sourcelink: "",
    };
  },
  methods: {
    handleSubmit() {
      var source = {
        devname: this.devname,
        email: this.email,
        sourcelink: this.sourcelink,
      };
      axios
        .post("/v1/postlink", source)
        .then((res) => {
          console.log(res);
          alert("Hogaya/....!");
        })
        .catch((err) => {
          console.log(err);
          alert("Error Posting");
        });
    },
  },
};
</script>

<style scoped>
#app {
  margin: auto;
  padding: 100px;
}
.container {
  margin: auto;
  padding: 10px;
}
.row {
  font-size: 30px;
}
</style>
