<template>
  <div class="meret">
    <Nav />

    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block meret" src="../assets/1.jpg" alt="First slide" />
          <div class="carousel-caption">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum adipisci, laudantium dolorem facilis laboriosam culpa deserunt quaerat suscipit libero vel nam corporis quisquam maiores labore dolorum ex consequatur eligendi. Tempora!</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block meret" src="../assets/2.jpg" alt="Second slide" />
          <div class="carousel-caption d-none d-md-block">
            <h5></h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum impedit sunt labore consectetur tenetur quaerat nulla nihil aperiam? Commodi quasi quis ipsum tempora laborum debitis iure earum explicabo? Sint, expedita.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block meret" src="../assets/3.jpg" alt="Third slide" />
          <div class="carousel-caption d-none d-md-block">
            <h5></h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sed, recusandae atque praesentium voluptatem repellat vel reiciendis facilis, beatae laudantium enim delectus! Impedit laboriosam soluta explicabo! Consequatur provident iusto voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, totam veniam obcaecati nulla dolorum vero? A voluptate possimus soluta reiciendis animi non molestiae, quis, provident quae neque veritatis rerum quam! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas nobis porro aut possimus sint labore rerum? Sapiente, animi reiciendis cumque id nesciunt debitis commodi ut aliquid architecto distinctio, voluptatem accusamus.</p>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>
 <style >
.carousel .item img {
  max-height: 768px;
  min-width: auto;
}
.carousel-caption {
  max-height: 768px;
  min-width: auto;
  top: 3%;
}
img {
  max-height: 40%;
  height: 20%;
}
.carousel-inner {
  width: 100% !important;
  max-height: 62rem !important ;
  min-height: 400px;
}
</style>
<script>
import Nav from "../components/Nav";

export default {
  components: {
    Nav,
  },
};
</script>
