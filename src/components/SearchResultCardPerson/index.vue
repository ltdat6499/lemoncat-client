<template>
  <div>
    <b-link
      style="text-decoration:none;display:flex;align-items:center;"
      :href="thisUrl"
    >
      <img :src="thisSrc" style="height:100px;width:80px;margin-right:10px" />
      <span style="margin-top:5px;color:black;font-weight:bold;text-align:left"
        >{{ thisName }}
        <p
          style="font-weight:500;margin-top:5px;color:gray;max-width:200px;text-align:justify"
        >
          {{ thisSummary }}
        </p>
      </span>
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
      default: require("../../assets/img/sample-person.jpg")
    },
    name: {
      type: String,
      default: "Emma Watson"
    },
    summary: {
      type: String,
      default: "Emma Watson"
    }
  },
  computed: {
    thisUrl() {
      return "/person/" + this.slug;
    },
    thisSrc() {
      return this.src;
    },
    thisName() {
      return this.name;
    },
    thisSummary() {
      if (this.summary && this.summary.length > 100)
        return (this.summary.substring(0, 100) || "") + "...";
      return this.summary;
    }
  }
};
</script>
