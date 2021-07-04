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
      <carousel :paginationEnabled="false" :per-page="thisPageSize">
        <slide v-for="item in flims" :key="item.id">
          <movie-pick-card
            :url="'/m/' + item.slug"
            :src="item.info.poster"
            :name="item.info.name"
            :score="item.lemonScore"
          ></movie-pick-card>
        </slide>
      </carousel>
    </div>
  </div>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";
import getFlims from "@/apollo/queries/getFlims.gql";
import MoviePickCard from "@/components/MoviePickCard";

export default {
  components: {
    Carousel,
    Slide,
    MoviePickCard
  },
  props: {
    pageSize: {
      type: Number,
      default: 6
    },
    sortKey: {
      type: String,
      default: "DATE"
    }
  },
  data() {
    return {
      flims: []
    };
  },
  computed: {
    thisSortKey() {
      return this.sortKey;
    },
    thisPageSize() {
      return this.pageSize;
    }
  },
  apollo: {
    flims: {
      query: getFlims,
      variables() {
        return {
          page: 1,
          size: 10,
          type: "movie",
          sortKey: this.thisSortKey
        };
      },
      result(result) {
        this.flims = result.data.flims;
      }
    }
  }
};
</script>
