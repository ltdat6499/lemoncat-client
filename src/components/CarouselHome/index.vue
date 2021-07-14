<template>
  <v-carousel
    :dark="false"
    cycle
    interval="2000"
    height="300"
    hide-delimiter-background
  >
    <v-carousel-item v-for="item in posts" :key="item.id">
      <b-link :href="'/post/' + item.slug">
        <v-sheet
          style="display:flex;justify-content:center;align-items: center;"
          height="100%"
          tile
        >
          <v-row
            style="z-index:999;position: absolute;display:flex;align-items: flex-end;width:100%"
            class="fill-height"
          >
            <div
              style="overflow: hidden;display:block;border-left: 5px solid #24BA3A;margin-bottom:45px;background-color:black;width:100%;height:30%;margin-left:10%;margin-right:10%;background-color: rgba(0,0,0,.5);color:white;padding:10px"
            >
              <div
                style="display: flex;justify-content:flex-start;align-items: flex-start;flex-direction:column;"
              >
                <h5 style="text-align: left;">
                  <strong>{{ item.title }}</strong>
                </h5>
                <p>
                  {{ item.sideTitle.substring(0, 50) + "..." }}
                </p>
              </div>
            </div>
          </v-row>
          <v-img
            :src="item.data.previewPoster"
            height="100%"
            width="100%"
            style="max-height:300px"
          ></v-img>
        </v-sheet>
      </b-link>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
import getNews from "@/apollo/queries/getPosts.gql";
export default {
  data() {
    return {
      posts: []
    };
  },
  apollo: {
    posts: {
      query: getNews,
      variables() {
        return {
          page: 1,
          size: 5,
          type: "news",
          section: "Weekly Ketchup"
        };
      },
      result(result) {
        this.posts = result.data.posts.results;
      }
    }
  }
};
</script>
<style>
.v-carousel__controls {
  opacity: 1 !important;
  background: transparent !important;
  background-color: transparent !important;
}
</style>
