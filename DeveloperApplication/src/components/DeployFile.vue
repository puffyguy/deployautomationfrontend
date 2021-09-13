<template>
  <div class="container">
    <form @submit.prevent="handleSubmit()" autocomplete="off">
      <div class="container1">
        <h1 style="text-align: center;">Deploy File</h1>
        <hr />
        <div class="col-md-12">
          <label for="developerName" class="form-label">Developer Name</label>
          <input
            type="text"
            class="form-control"
            id="developerName"
            v-model="devname"
          />
        </div>
        <div class="col-md-12">
          <label for="developerEmail" class="form-label">Developer Email</label>
          <input
            type="email"
            class="form-control"
            id="developeremail"
            v-model="email"
          />
        </div>
        <div class="col-md-12">
          <label for="sourceAddress" class="form-label"> Source Link</label>
          <input
            type="text"
            class="form-control"
            id="sourceAddress"
            placeholder=""
            v-model="sourcelink"
          />
        </div>
        <div class="col-md-12">
          <label for="ticket" class="form-label">Ticket ID</label>
          <input
            type="text"
            class="form-control"
            id="ticket"
            placeholder=""
            v-model="ticket"
          />
        </div>
        <div class="col-12" style="text-align: center;">
          <button
            type="submit"
            class="btn btn-lg btn-dark"
            style="margin-top: 1em;"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "DeployFile",
  data() {
    return {
      devname: "",
      email: "",
      sourcelink: "",
      ticket: "",
    };
  },
  methods: {
    handleSubmit() {
      var source = {
        devname: this.devname,
        email: this.email,
        sourcelink: this.sourcelink,
        ticket: this.ticket,
      };
      axios
        .post("/v1/postlink", source)
        .then((res) => {
          console.log(res);
          alert("Source sent to IT infra team for Deployment");
        })
        .catch((err) => {
          var msg = err.response.data.status;
          console.log(msg);
          alert(msg);
        });
      (this.devname = ""),
        (this.email = ""),
        (this.sourcelink = ""),
        (this.ticket = "");
    },
  },
};
</script>

<style scoped>
.container {
  margin: 2% 0 0 11%;
  border: 3px solid #98ccdd;
  box-shadow: 4px 5px 10px;
}
form {
  padding: 20px;
}
.container1 {
  padding: 0px;
}
.btn {
  width: 20%;
  height: 3em;
}
input[type="text"],
input[type="email"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}
.form-label {
  outline: none;
  font-weight: 600;
  font-size: x-large;
}
hr {
  border: 1px solid #0f0e0e;
  margin-bottom: 25px;
}
</style>
