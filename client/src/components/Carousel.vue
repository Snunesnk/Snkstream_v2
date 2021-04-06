<template>
  <div>
    <div class="row" id="first-row">
      <h3>{{ title }}</h3>
    </div>
    <div id="new" class="d-flex justify-content-center">
      <!--Carousel Wrapper-->
      <div
        :id="id"
        class="carousel slide carousel-multi-item col-md-11"
        data-ride="carousel"
      >
        <!--Controls-->
        <div class="controls-top">
          <a
            class="carousel-control-prev"
            :href="'#' + id"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            :href="'#' + id"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <!--/.Controls-->

        <!--Indicators-->
        <ol class="carousel-indicators">
          <li
            :data-target="'#' + id"
            data-slide-to="0"
            class="active"
          ></li>
          <li :data-target="'#' + id" data-slide-to="1"></li>
        </ol>
        <!--/.Indicators-->

        <!--Slides-->
        <div class="carousel-inner" role="listbox">
          <!--First slide-->
          <div class="carousel-item active">
            <div class="col-md-2">
              <div class="card mb-2">
                <img
                  class="card-img-top"
                  src="https://image.tmdb.org/t/p/original/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg"
                  alt="Card image cap"
                />
              </div>
            </div>

            <div class="col-md-2">
              <div class="card mb-2">
                <img
                  class="card-img-top"
                  src="https://image.tmdb.org/t/p/original/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a class="btn btn-primary">Button</a>
                </div>
              </div>
            </div>

            <div class="col-md-2">
              <div class="card mb-2">
                <img
                  class="card-img-top"
                  src="https://image.tmdb.org/t/p/original/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a class="btn btn-primary">Button</a>
                </div>
              </div>
            </div>

            <div class="col-md-2">
              <div class="card mb-2">
                <img
                  class="card-img-top"
                  src="https://image.tmdb.org/t/p/original/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a class="btn btn-primary">Button</a>
                </div>
              </div>
            </div>

            <div class="col-md-2">
              <div class="card mb-2">
                <img
                  class="card-img-top"
                  src="https://image.tmdb.org/t/p/original/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a class="btn btn-primary">Button</a>
                </div>
              </div>
            </div>
          </div>
          <!--/.First slide-->

          <!--Second slide-->
          <!-- <div class="carousel-item">
            <div class="col-md-3">
              <div class="card mb-2">
                <img
                  class="card-img-top"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a class="btn btn-primary">Button</a>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="card mb-2">
                <img
                  class="card-img-top"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(48).jpg"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a class="btn btn-primary">Button</a>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="card mb-2">
                <img
                  class="card-img-top"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a class="btn btn-primary">Button</a>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="card mb-2">
                <img
                  class="card-img-top"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a class="btn btn-primary">Button</a>
                </div>
              </div>
            </div>
          </div> -->
          <!--/.Second slide-->
        </div>
        <!--/.Slides-->
      </div>
      <!--/.Carousel Wrapper-->
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: ["id", "title"],
};
</script>

<style scoped>
.carousel-item > div {
  float: left;
}

h3 {
  color: #bfc0c0;
  margin-left: 30px;
}

.card-body {
  padding: 0.65rem;
  font-family: 'Source Sans Pro', Arial, sans-serif;
}
</style>