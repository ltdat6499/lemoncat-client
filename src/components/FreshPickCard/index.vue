<template>
  <div>
    <b-link
      style="text-decoration:none;max-width:135px;display:flex;justify-content:center;
align-items: center;flex-direction: column"
      :href="thisUrl"
    >
      <img
        src="../../assets/img/sample-poster.png"
        style="height:200px;width:135px"
      />
      <div style="margin-top:5px">
        <img
          src="../../icons/certified-fresh.svg"
          style="height:20px;width:20px"
        />
        <span style="color:black">{{ thisScore }}%</span>
      </div>
      <span style="margin-top:5px;color:black">{{ thisName }}</span>
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
    icon: {
      type: String,
      default: "../../icons/certified-fresh.svg"
    },
    src: {
      type: String,
      default: "../../assets/img/sample-poster.png"
    },
    name: {
      type: String,
      default: "Harry Potter and The Sorcerer's Stone"
    },
    score: {
      type: Number,
      default: 92
    }
  },
  computed: {
    thisUrl() {
      return this.url;
    },
    thisIcon() {
      return this.icon;
    },
    thisSrc() {
      return this.src;
    },
    thisScore() {
      return this.score;
    },
    thisName() {
      return this.name;
    }
  }
};
</script>
