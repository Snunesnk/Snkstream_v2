<template>
  <div class="card">
    <img
      class="card-img-top"
      :src="img_src"
      alt="Card image cap"
      loaded="lazy"
    />
    <div class="card-body">
      <p class="card-text">{{ content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["title", "img_src", "content"],
};
</script>

<style scoped>
.card-text {
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 142px;
}

.card {
  background-color: inherit;
  color: #bfc0c0;
}
</style>
