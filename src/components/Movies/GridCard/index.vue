<template>
  <div>
    <b-link
      style="text-decoration:none;display:flex;justify-content:center;align-items: center;flex-direction: column;flex-wrap: wrap;max-width:170px"
      :href="thisUrl"
    >
      <img
        src="../../../assets/img/sample-poster.png"
        style="height:190px;width:130px;border-radius:4px"
      />
      <h5 style="margin-top:5px;color:black;">
        <strong>{{ thisName }}</strong>
      </h5>
      <span style="color:black"
        ><img
          src="../../../icons/certified-fresh.svg"
          style="height:20px;width:20px"
        />
        100%</span
      >
      <span style="color:gray">Available Feb 20</span>
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
