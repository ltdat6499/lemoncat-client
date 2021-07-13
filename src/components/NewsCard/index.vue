<template>
  <div style="margin-bottom:5px">
    <b-link
      style="text-decoration:none;display:flex;justify-content:center;align-items: center;flex-direction: column"
      :href="thisUrl"
    >
      <img :src="thisSrc" style="height:135px;width:260px" />
      <h5 style="margin-top:5px;color:black;font-weight:bold;font-size:17px">
        {{ thisName }}
      </h5>
      <span style="color:gray;float:left;font-size:15px">{{ thisDate }}</span>
    </b-link>
  </div>
</template>
<script>
import moment from "moment";
export default {
  props: {
    slug: {
      type: String,
      default: "#"
    },
    src: {
      type: String,
      default: require("../../assets/img/sample-poster.png")
    },
    name: {
      type: String,
      default: "Harry Potter and The Sorcerer's Stone"
    },
    date: {
      type: String,
      default: "June 9, 2021"
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
    },
    thisDate() {
      return moment(this.date).format("ll");
    }
  }
};
</script>
