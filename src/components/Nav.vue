<template>
  <div>
    <div id="nav">
      <router-link to="/">Kezdőlap</router-link>|
      <router-link to="/portfolio">Alkotók</router-link>|
      <router-link to="/portfolio">Művek</router-link>|
      <router-link to="/portfolio">Kedvencek</router-link>

      <div class="jobb">
        <router-link to="/sign">Regisztráció</router-link>|
        <router-link to="/sign">Bejelentkezés</router-link>|
        <router-link to="/sign">Mutasd meg magad!</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>