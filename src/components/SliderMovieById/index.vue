<template>
  <div
    style="padding:10px;display:flex;justify-content:center;flex-direction: column;width:100%"
  >
    <div style="margin:0px 20px">
      <carousel :paginationEnabled="false" :per-page="thisPageSize">
        <slide v-for="item in flims" :key="item.slug">
          <movie-card
            :slug="item.slug"
            :src="item.info.poster"
            :name="item.info.name"
            :score="parseInt(item.data.rottenTomatoes.tomatometerScore)"
            :userScore="parseInt(item.data.rottenTomatoes.audienceScore)"
          ></movie-card>
        </slide>
      </carousel>
    </div>
  </div>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";
import getFlimsRelative from "@/apollo/queries/getFlimsRelative.gql";
import MovieCard from "@/components/Movie/MovieCard";
export default {
  components: {
    Carousel,
    Slide,
    MovieCard
  },
  props: {
    id: {
      type: String,
      default: ""
    },
    pageSize: {
      type: Number,
      default: 4
    }
  },
  data() {
    return {
      flims: []
    };
  },
  computed: {
    thisId() {
      return this.id;
    },
    thisSortKey() {
      return this.sortKey;
    },
    thisPageSize() {
      return this.pageSize;
    }
  },
  apollo: {
    alsoLikeFlims: {
      query: getFlimsRelative,
      variables() {
        return {
          id: this.thisId
        };
      },
      result(result) {
        this.flims = result.data.alsoLikeFlims;
      }
    }
  }
};
</script>
