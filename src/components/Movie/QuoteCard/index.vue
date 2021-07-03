<template>
  <div
    style="padding:10px;background-color:#EFEFEF;width:100%;margin-bottom:10px;border-radius: 4px"
  >
    <b-row>
      <b-col
        cols="3"
        style="text-align:right;font-weight:bold;color:black;padding-right:10px"
        ><span>{{ thisName }}:</span></b-col
      >
      <b-col cols="9"
        ><span style="text-align:justify">{{ thisContent }}</span></b-col
      >
    </b-row>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    }
  },
  computed: {
    thisContent() {
      return this.content;
    },
    thisName() {
      return this.name;
    }
  }
};
</script>
