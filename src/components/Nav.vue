<template>
  <div>
    <div id="nav">
      <router-link to="/">Kezdőlap</router-link>|
      <router-link :to="{ name: 'Alkotok' }">Alkotók</router-link>|
      <router-link to="/portfolio">Művek</router-link>|
      <router-link to="/portfolio">Kedvencek</router-link>|
      <router-link to="/kuratorok">Szakmai zsűri</router-link>

      <div class="jobb">
        <router-link to="/register">Regisztráció</router-link>|
        <router-link to="/login">Bejelentkezés</router-link>|
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