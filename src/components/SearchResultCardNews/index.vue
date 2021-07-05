<template>
  <div style="max-width:500px">
    <b-link
      style="text-decoration:none;display:flex;align-items:center;"
      :href="thisUrl"
    >
      <img
        :src="thisPoster"
        style="height:100px;width:200px;margin-right:10px"
      />
      <div
        style="display: flex;flex-direction: column;align-items: flex-start;"
      >
        <span style="margin-top:5px;color:black;font-weight:bold"
          >{{ thisTitle }}
        </span>
        <span
          style="margin-top:5px;color:gray;max-width:300px;text-align: justify;text-justify: inter-word;"
        >
          {{ thisContent }}
        </span>
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
    poster: {
      type: String,
      default: require("../../assets/img/sample-person.jpg")
    },
    title: {
      type: String,
      default: "Everything We Know About Marvel’s Eternals"
    },
    content: {
      type: String,
      default: "Everything We Know About Marvel’s Eternals"
    }
  },
  computed: {
    thisUrl() {
      return "/post/" + this.slug;
    },
    thisTitle() {
      return this.title;
    },
    thisContent() {
      return this.content.substring(1000, 1100);
    },
    thisPoster() {
      return this.poster;
    }
  }
};
</script>
