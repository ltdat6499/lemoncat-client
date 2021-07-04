<template>
  <div
    style="padding:10px;display:flex;justify-content:center;flex-direction: column;"
  >
    <div style="margin:0px 20px">
      <carousel
        :paginationEnabled="false"
        :per-page="thisPageSize"

      >
        <slide v-for="item in thisFlims" :key="item.id">
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
import MoviePickCard from "@/components/MoviePickCard";

export default {
  components: {
    Carousel,
    Slide,
    MoviePickCard
  },
  props: {
    flims: {
      type: Array,
      default() {
        return [];
      }
    },
    pageSize: {
      type: Number,
      default: 4.2
    }
  },
  computed: {
    thisPageSize() {
      return this.pageSize;
    },
    thisFlims() {
      return this.flims;
    }
  }
};
</script>
