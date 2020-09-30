<template>
  <div>
    <Nav />
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row">
        <div class="col-md-4">
          <img src="../assets/2.jpg" class="card-img" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text"></p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav";

export default {
  components: {
    Nav,
  },
};
</script>

<style lang="scss" scoped>
</style>