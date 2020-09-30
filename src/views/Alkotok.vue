<template>
  <div class>
    <Nav />
    <h1 class="text-center text-monospace">Alkotók</h1>
    <div class="text-center d-flex justify-content-center">
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
<script>
import Nav from "../components/Nav";

export default {
  components: {
    Nav,
  },
  beforeRouteEnter(to, from, next) {
    alert("Beléptem az alkotókba");
    next();
  },
};
</script>
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
  margin: 1% 8% 1% 8%;
}
.row {
  width: 100%;
}
</style>

