<template>
  <div>
    <div id="first-row">
      <h2>En ce moment</h2>
      <div class="row">
        <div class="col-10 ml-7-6">
          <vueper-slides
            class="no-shadow ex--center-mode"
            :visible-slides="6"
            :gap="3"
            :dragging-distance="70"
            :ratio="1 / 8"
            :arrows-outside="true"
            :bullets="false"
            slide-multiple
          >
            <vueper-slide
              v-for="(trending, i) in trendings"
              :key="i"
              :title="trending.title"
            >
              <template v-slot:content>
                <Card
                  :title="trending.title"
                  :img_src="trending.img_src"
                  :content="trending.title"
                />
              </template>
            </vueper-slide>
          </vueper-slides>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import Card from "../components/Card";
import "vueperslides/dist/vueperslides.css";
import axios from "axios";

export default {
  components: { VueperSlides, VueperSlide, Card },
  name: "Home",
  data() {
    return { trendings: [] };
  },
  created() {
    const poster_base = "https://image.tmdb.org/t/p/w500";

    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=713bca275fe17e1fa35d05a2984618ef&language=fr-FR&page=1"
      )
      .then((response) => {
        for (var res in response.data.results) {
          this.trendings.push({
            title: response.data.results[res].title,
            img_src: poster_base + response.data.results[res].poster_path,
            content: response.data.results[res].overview,
          });
        }
      });
  },
};
</script>

<style scoped>
#first-row {
  margin-top: 42px;
}

h2 {
  margin-left: 3%;
  color: rgb(232, 230, 227);
}

.ml-7-6 {
  margin-left: 7.6%;
  margin-top: -2%;
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
  transition: all 0.1s ease-in;
}

.vueperslide:hover,
.vueperslide--visible:hover {
  transform: scale(1.1);
  cursor: pointer;
}

.vueperslides__bullets,
.vueperslides__bullets--outside {
  color: #950740;
}

.vueperslides--touchable,
.vueperslides__track {
  cursor: default !important;
}

.ex--center-mode {
  width: 90vw;
  max-width: 100%;
  margin: auto;
}
</style>
