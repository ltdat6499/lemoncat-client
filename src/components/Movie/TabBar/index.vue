<template>
  <div>
    <b-tabs
      active-nav-item-class="font-weight-bold text-uppercase text-body"
      content-class="mt-3"
      align="center"
    >
      <b-tab title="IN THEATERS" :title-link-class="titleColor" active
        ><p>I'm the first tab</p>
        <p>I'm the first tab</p>
        <p>I'm the first tab</p>
        <p>I'm the first tab</p>
        <p>I'm the first tab</p>
        <p>I'm the first tab</p>
        <p>I'm the first tab</p>
        <p>I'm the first tab</p></b-tab
      >
      <b-tab title="STREAMING MOVIES" :title-link-class="titleColor"
        ><p>I'm the second tab</p></b-tab
      >
      <b-tab title="TV SHOWS" :title-link-class="titleColor"></b-tab>
    </b-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      titleColor: ["font-weight-bold", "text-secondary"]
    };
  }
};
</script>
<style scoped></style>
