<template>
  <div>
    <b-link
      style="text-decoration:none;display:flex;justify-content:center;align-items: center;flex-direction: column"
      :href="thisUrl"
    >
      <img
        src="../../assets/img/sample-news.jpg"
        style="height:135px;width:260px"
      />
      <h5 style="margin-top:5px;color:black;font-weight:bold;font-size:17px">{{ thisName }}</h5>
      <span style="color:gray;float:left">June 9, 2021</span>

    </b-link>
  </div>
</template>
<script>
export default {
  props: {
    url: {
      type: String,
      default: "#"
    },
    src: {
      type: String,
      default: "../../assets/img/sample-poster.png"
    },
    name: {
      type: String,
      default: "Harry Potter and The Sorcerer's Stone"
    }
  },
  computed: {
    thisUrl() {
      return this.url;
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
