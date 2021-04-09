<template>
  <div>
    <div id="first-row">
      <vueper-slides
        class="no-shadow ex--center-mode"
        :visible-slides="7"
        :gap="3"
        :dragging-distance="70"
        :arrows-outside="true"
        slide-multiple
      >
        <vueper-slide
          v-for="(slide, i) in slides"
          :key="i"
          :title="slide.title"
        >
          <template v-slot:content>
            <div class="card">
              <img
                class="card-img-top"
                src="https://image.tmdb.org/t/p/original/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg"
                alt="Card image cap"
                loaded="lazy"
              />
              <div class="card-body">
                <p class="card-text">{{ slide.content }}</p>
              </div>
            </div>
          </template>
        </vueper-slide>
      </vueper-slides>
    </div>

    <hr />

    <Carousel id="popular" title="Populaire:" />

    <hr />

    <Carousel id="new_aded" title="Ajouté récemment:" />
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import axios from "../plugins/axios";

export default {
  components: { Carousel, VueperSlides, VueperSlide },
  name: "Home",
  computed: {
    slides() {
      var test = [];

      for (var i = 0; i < 10; i++) {
        test.push({ title: i.toString(), content: i });
      }

      return test;
    },
  },
  mounted() {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (console.log(response)));
  }
};
</script>

<style scoped>
#first-row {
  margin-top: 42px;
}

.ex--center-mode {
  width: 90vw;
  max-width: 100%;
  margin: auto;
}

.card-img-top {
  margin-top: 42%;
}
</style>

<style>
.vueperslides__arrow,
.vueperslides__arrow svg {
  color: #bfc0c0;
}

.vueperslide,
.vueperslide--visible {
  display: flex;
  align-items: center;
}

.card {
  background-color: inherit;
  color: #bfc0c0;
}

.vueperslides__bullets,
.vueperslides__bullets--outside {
  color: #950740;
}
</style>
