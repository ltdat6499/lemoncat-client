<template>
  <div>
    <b-link :href="thisUrl" style="text-decoration: none;">
      <div
        style="max-width: 200px;display:flex;align-items: center;flex-direction: column;justify-content: center"
      >
        <img :src="thisSrc" />
        <span class="b-text "> {{ thisName }}</span>
      </div>
    </b-link>
  </div>
</template>
<script>
export default {
  props: {
    slug: {
      type: String,
      default: "#"
    },
    src: {
      type: String,
      default: require("../../../assets/img/sample-news.jpg")
    },
    name: {
      type: String,
      default: "Harry Potter and The Sorcerer's Stone"
    }
  },
  computed: {
    thisUrl() {
      return "/post/" + this.slug;
    },
    thisSrc() {
      return this.src;
    },
    thisName() {
      return this.name;
    }
  }
};
</script>

<style scoped>
.b-text {
  color: #2a2c3e;
}
img {
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  border-radius: 4px;
  height: 110px;
  width: 100%;
}
</style>
