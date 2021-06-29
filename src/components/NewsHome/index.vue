<template>
  <b-link :href="'/post/' + post.slug">
    <v-sheet
      style="display:flex;justify-content:center;align-items: center;border-left: 1px solid white;"
      height="100%"
      width="100%"
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
              <strong>{{ post.title.substring(0, 40) + " ..." }}</strong>
            </h5>
            <p>
              {{ post.sideTitle.substring(0, 25) + " ..." }}
            </p>
          </div>
        </div>
      </v-row>
      <v-img
        :src="post.data.previewPoster"
        height="100%"
        width="100%"
        style="max-height:300px"
      ></v-img>
    </v-sheet>
  </b-link>
</template>
<script>
import getNews from "@/apollo/queries/getPosts.gql";
export default {
  props: {
    collection: {
      type: String,
      default: "Weekend Box Office"
    }
  },
  data() {
    return {
      post: {}
    };
  },
  computed: {
    thisCollection() {
      return this.collection;
    }
  },
  apollo: {
    posts: {
      query: getNews,
      variables() {
        return {
          page: 1,
          size: 1,
          type: "news",
          collection: this.thisCollection,
          sortKey: "DATE"
        };
      },
      result(result) {
        this.post = result.data.posts[0];
      }
    }
  }
};
</script>
