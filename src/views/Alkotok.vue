<template>
  <div class>
    <div id="nav">
      <router-link to="/">Kezdőlap</router-link>|
      <router-link to="/alkotok">Alkotók</router-link>|
      <router-link to="/alkotok">Művek</router-link>|
      <router-link to="/alkotok">Kedvencek</router-link>

      <div class="jobb">
        <router-link to="/sign">Regisztráció</router-link>|
        <router-link to="/sign">Bejelentkezés</router-link>|
        <router-link to="/sign">Mutasd meg magad!</router-link>
      </div>
    </div>
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <div class="card" style>
            <img src="../assets/l1.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Tihanyi Lajos</h5>
              <p class="card-text">Ő valami festő vagy ilyesmi</p>
              <a href="#" class="btn btn-dark">Portfólió</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style>
            <img src="../assets/l2.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Lakner László</h5>
              <p class="card-text">Ő is egy festő amúgy.</p>
              <a href="#" class="btn btn-dark">Portfólió</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style>
            <img src="../assets/r1.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Rippl-Rónai József</h5>
              <p class="card-text">A harmadik festő.</p>
              <a href="#" class="btn btn-dark">Portfólió</a>
            </div>
          </div>
        </div>
      </div>
      <h1></h1>
    </div>
  </div>
</template>
<style>
img {
  height: 50%;
}
.card-img-top {
  height: 350px;
}
.card {
  box-shadow: 6px 6px 3px grey;
  width: 350px;
  padding: 5%;
}
.container {
  width: 100%;
}
.col {
  margin: 0%;
}
</style>

