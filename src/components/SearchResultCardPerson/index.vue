<template>
  <div>
    <b-link
      style="text-decoration:none;display:flex;align-items:center;"
      :href="thisUrl"
    >
      <img
        src="../../assets/img/sample-person.jpg"
        style="height:100px;width:67px;margin-right:10px"
      />
      <span style="margin-top:5px;color:black;font-weight:bold"
        >{{ thisName }}
      </span>
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
      default: "Emma Watson"
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
