<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Kezdőlap</router-link>|
      <router-link to="/portfolio">Portfóliók</router-link>
      <div class="jobb">
        <router-link to="/sign">Mutasd meg magad!</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: black;
}
.center {
  text-align: center;
}
#nav {
  padding: 30px;
}

#nav a {
  color: #2c3e50;
  margin: 10px;
}

#nav a.router-link-exact-active {
  color: grey;
}
.jobb {
  float: right;
}
</style>
