<template>
  <div class="container">
    <h1>Home</h1>
    <h2>Conoce las diversas aves de Chile. Descubre su habitat y mucho más.</h2>

    <router-link class="btn btn-primary" :to="{ name: 'aves' }">Explorar aves</router-link>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
  }
}
</script>
