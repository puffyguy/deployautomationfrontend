<template>
  <div class="container">
    <h1>
      Welcome IT Infrastructure Team
    </h1>
    <br />
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <router-link to="/request" class="nav-link active">Request</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/deploy" class="nav-link active"
          >Deployed List</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  components: {},
};
</script>

<style scoped>
.container {
  margin: 20px;
  padding: 20px;
}
</style>
