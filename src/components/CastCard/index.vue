<template>
  <div>
    <b-link
      style="text-decoration:none;max-width:135px;display:flex;justify-content:center;
align-items: center;flex-direction: column"
      :href="thisUrl"
    >
      <img
        src="../../assets/img/sample-cast.jpg"
        style="height:120px;width:100px"
      />
      <div style="margin-top:5px">
        <span class="name">Vera Farmiga</span>
      </div>
      <span style="color:#989898">Lorraine Warren</span>
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
    name: {
      type: String,
      default: "Harry Potter and The Sorcerer's Stone"
    }
  },
  computed: {
    thisUrl() {
      return this.url;
    },
    thisName() {
      return this.name;
    }
  }
};
</script>
<style scoped>
.name:hover {
  color: #398fec !important;
}
.name {
  color: black !important;
}
</style>
