<template>
  <div class="card" @click="alert_test()">
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
  methods: {
    alert_test() {
      alert("this is a test");
    }
  }
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
  padding: 0.9rem;
  border: none;
}

.card-body {
  padding: 0;
  margin-top: 1rem;
}
</style>
