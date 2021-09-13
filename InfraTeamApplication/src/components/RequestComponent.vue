<template>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Sl.No</th>
          <th scope="col">Source Link</th>
          <th scope="col">Ticket ID</th>
          <th scope="col">Request</th>
          <th scope="col">Deploy</th>
          <th scope="col">One Time Password</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(source, index) in sources" :key="index">
          <td>{{ index }}</td>
          <td>{{ source.sourcelink }}</td>
          <td>{{ source.ticket }}</td>
          <td><button class="btn btn-dark btn-sm">Request Approval</button></td>
          <td>
            <button
              class="btn btn-dark btn-sm"
              @click.prevent="deploy(source.sourcelink)"
            >
              Deploy
            </button>
          </td>
          <td><input type="text" name="otp" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "RequestComponent",
  data() {
    return {
      sources: null,
    };
  },
  methods: {
    getSource() {
      axios
        .get("/v1/getSources")
        .then((res) => {
          console.log(res.data);
          this.sources = res.data.sources;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deploy(sourcelink) {
      var deployment = {
        sourcelink: sourcelink,
        destinationlink: "/api",
      };
      console.log(deployment);
      axios.post("/v1/deployFiles", deployment).then((res) => {
        alert("Deployment Success");
        console.log(res);
      });
    },
  },
  created() {
    this.getSource();
  },
};
</script>

<style scoped></style>
