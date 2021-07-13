<template>
  <div
    style="padding:10px;display:flex;justify-content:center;flex-direction: column;"
  >
    <div
      style="display:block;margin-bottom:15px;width:100%;margin-right:10%;padding:4px;margin-top:20px"
    >
      <div style="display: flex;align-items:center;">
        <span
          style="border-left: 3px solid #24BA3A;padding-left:5px;text-align: left;font-size:16px;"
        >
          <strong><slot name="header"></slot></strong>
        </span>
        <b-link
          style="text-align: left;margin-left:auto;font-size:13px;color:#398BEB;text-decoration: none;"
        >
          <strong>VIEW ALL</strong>
        </b-link>
      </div>
    </div>
    <div style="margin:0px 20px">
      <b-row cols="4">
        <b-col v-for="item of posts" :key="item.slug">
          <b-link style="text-decoration: none;" :href="'/post/' + item.slug">
            <div
              style="display:flex;flex-direction: column;align-items: center;width:100%"
            >
              <img :src="item.data.previewPoster" alt="Rounded image" />
              <h5 class="b-text ">
                <strong>
                  {{ item.title }}
                </strong>
              </h5>
            </div>
          </b-link>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
import getLatestGuides from "@/apollo/queries/getLatestGuides.gql";

export default {
  data() {
    return {
      posts: []
    };
  },
  apollo: {
    latestGuides: {
      query: getLatestGuides,
      result(result) {
        this.posts = result.data.latestGuides;
      }
    }
  }
};
</script>
<style scoped>
.b-text {
  color: #2a2c3e;
}
img {
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  border-radius: 4px;
  width: 100%;
  height: 150px;
}
</style>
