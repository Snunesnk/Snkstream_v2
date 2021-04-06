<template>
  <div>
    <div id="first-row">
      <Carousel id="new_releases" title="Nouvelles sorties:" />
    </div>

    <hr />

    <Carousel id="popular" title="Populaire:" />

    <hr />

    <Carousel id="new_aded" title="Ajouté récemment:" />
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";

export default {
  components: { Carousel },
  name: "Home",
};
</script>

<style scoped>
#first-row {
  margin-top: 42px;
}
</style>