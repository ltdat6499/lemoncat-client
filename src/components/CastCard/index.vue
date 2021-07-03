<template>
  <div>
    <b-link
      style="text-decoration:none;max-width:135px;display:flex;justify-content:center;
align-items: center;flex-direction: column"
      :href="'/person/' + thisSlug"
    >
      <img :src="thisImage" style="height:120px;width:100px" />
      <div style="margin-top:5px">
        <span class="name">{{ thisName }}</span>
      </div>
      <span style="color:#989898">{{ thisRole }}</span>
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
    image: {
      type: String,
      default:
        "https://cdn.icon-icons.com/icons2/1674/PNG/512/person_110935.png"
    },
    name: {
      type: String,
      default: "Ly Thanh Dat"
    },
    role: {
      type: String,
      default: "Harry Potter"
    }
  },
  computed: {
    thisSlug() {
      return this.slug;
    },
    thisName() {
      return this.name;
    },
    thisRole() {
      return this.role;
    },
    thisImage() {
      return this.image;
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
