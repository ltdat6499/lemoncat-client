<template>
  <div style="display:flex;justify-content:center;flex-direction: column;">
    <div>
      <carousel
        :per-page="4"
        :navigate-to="someLocalProperty"
        :paginationActiveColor="'#24BA3A'"
        :paginationColor="'#CCCCCC'"
        :paginationSize="15"
        :centerMode="true"
        :minSwipeDistance="4"
      >
        <slide
          v-for="item in previewList"
          :key="item.index"
          @slideclick="handleShowPreview(item.index)"
        >
          <img
            :src="item.src"
            style="width:180px;height:180px;margin-right:10px"
          />
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
          <strong>View All Photos (35)</strong>
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
  components: {
    Carousel,
    Slide,
    MoviePickCard,
    ImageViewer
  },
  data() {
    return {
      previewList: [
        {
          index: 1,
          src: require("../../../assets/img/sample-news.jpg")
        },
        {
          index: 2,
          src: require("../../../assets/img/sample-news.jpg")
        },
        {
          index: 3,
          src: require("../../../assets/img/sample-news.jpg")
        },
        {
          index: 4,
          src: require("../../../assets/img/sample-news.jpg")
        },
        {
          index: 5,
          src: require("../../../assets/img/sample-news.jpg")
        },
        {
          index: 6,
          src: require("../../../assets/img/sample-news.jpg")
        },
        {
          index: 7,
          src: require("../../../assets/img/sample-news.jpg")
        },
        {
          index: 8,
          src: require("../../../assets/img/sample-news.jpg")
        },
        {
          index: 9,
          src: require("../../../assets/img/sample-news.jpg")
        },
        {
          index: 10,
          src: require("../../../assets/img/sample-news.jpg")
        },
        {
          index: 0,
          src: require("../../../assets/img/sample-news.jpg")
        }
      ]
    };
  },
  methods: {
    handleShowPreview(index) {
      this.$refs.viewer.show(
        this.previewList.map(item => item.src),
        index
      );
    }
  }
};
</script>
