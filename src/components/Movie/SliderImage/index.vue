<template>
  <div style="display:flex;justify-content:center;flex-direction: column;">
    <div>
      <carousel
        :per-page="4"
        :paginationActiveColor="'#24BA3A'"
        :paginationColor="'#CCCCCC'"
        :paginationSize="15"
        :centerMode="true"
        :minSwipeDistance="4"
        :loop="true"
        :autoplay="true"
      >
        <slide
          v-for="item in thisImages"
          :key="item.index"
          @slideclick="handleShowPreview(item.index)"
        >
          <div class="zoom-within-container">
            <img
              v-if="item.src.length"
              :src="item.src"
              style="width:180px;height:180px;margin-right:10px"
            />
          </div>
        </slide>
      </carousel>
    </div>
    <div
      style="display:block;margin-bottom:15px;width:100%;margin-right:10%;padding:4px;margin-top:20px"
    >
      <div style="display: flex;align-items:center;">
        <b-link
          style="text-align: left;margin-left:auto;font-size:13px;color:#398BEB;text-decoration: none;"
        >
          <strong>View All Photos ({{ thisImages.length }})</strong>
        </b-link>
      </div>
    </div>
    <image-viewer ref="viewer" />
  </div>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";
import MoviePickCard from "@/components/MoviePickCard";
import ImageViewer from "@/components/ImageViewer";

export default {
  props: {
    images: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Carousel,
    Slide,
    MoviePickCard,
    ImageViewer
  },
  computed: {
    thisImages() {
      return this.images;
    }
  },
  methods: {
    handleShowPreview(index) {
      this.$refs.viewer.show(
        this.thisImages.map(item => item.src),
        index
      );
    }
  }
};
</script>

<style scoped>
.zoom-within-container {
  overflow: hidden; /* [1.2] Hide the overflowing of child elements */
}
.zoom-within-container img {
  transition: transform 0.2s ease;
}
.zoom-within-container:hover img {
  transform: scale(1.5);
}
</style>
