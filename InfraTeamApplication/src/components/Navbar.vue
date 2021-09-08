<template>
  <div class="container">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <router-link to="/request" class="nav-link active">Request</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/deploy" class="nav-link active">Deploye</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'Navbar',
    components: {
    }
}
</script>