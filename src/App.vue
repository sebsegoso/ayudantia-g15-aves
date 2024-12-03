<template>
  <AppNavbar />
  <router-view />
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';

export default {
  components: { AppNavbar },
  async mounted() {
    await this.$store.dispatch("fetchTodasLasAves")
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
