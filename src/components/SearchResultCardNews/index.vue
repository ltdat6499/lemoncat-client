<template>
  <div>
    <b-link
      style="text-decoration:none;display:flex;align-items:center;"
      :href="thisUrl"
    >
      <img
        src="../../assets/img/sample-news.jpg"
        style="height:100px;width:200px;margin-right:10px"
      />
      <div style="display: flex;flex-direction: column;align-items: flex-start;">
        <span style="margin-top:5px;color:black;font-weight:bold"
          >{{ thisName }}
        </span>
        <span style="margin-top:5px;color:gray;font-weight:bold"
          >February 20, 2019
        </span>
        <span style="margin-top:5px;color:gray;max-width:300px;text-align: justify;text-justify: inter-word;"
          > thamet, consectetur adipiscing elit, sed do eiusmod tempor incididunt incididunt labordad...
        </span>
      </div>
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
      default: "../../assets/img/sample-person.jpg"
    },
    name: {
      type: String,
      default: "Everything We Know About Marvel’s Eternals"
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
