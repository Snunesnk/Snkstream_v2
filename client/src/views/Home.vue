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
                :src="slide.img_src"
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
import axios from "axios";

export default {
  components: { Carousel, VueperSlides, VueperSlide },
  name: "Home",
  data() {
    return { slides: [] };
  },
  created() {
    const poster_base = "https://image.tmdb.org/t/p/w500";

    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=713bca275fe17e1fa35d05a2984618ef&language=fr-FR&page=1"
      )
      .then((response) => {
        for (var res in response.data.results) {
          this.slides.push({
            title: response.data.results[res].title,
            img_src: poster_base + response.data.results[res].poster_path,
            content: response.data.results[res].overview,
          });
          console.log(response.data.results[res]);
        }
      });
  },
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
.card-text {
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 142px;
}
</style>
