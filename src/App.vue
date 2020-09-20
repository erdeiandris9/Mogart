<template>
  <div id="app">
    <div class="banner text-center font">MOGART</div>

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
.font {
  font-size: 100px;
}
</style>
