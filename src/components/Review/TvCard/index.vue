<template>
  <div v-if="!isLoading">
    <b-link :href="'/m/' + slug" style="display:flex;flex-direction: column;align-items: center;text-decoration: none">
      <img
        :src="flim.info.poster"
        style="width:170px;height:250px;margin-bottom:10px"
      />
      <h4>
        <strong>{{ flim.info.name }}</strong>
      </h4>
    </b-link>
    <div style="display:flex;flex-direction: column;">
      <span style="color:#A8978F"
        >Genre:
        <span style="color:black">{{ flim.info.genres.join(", ") }}</span></span
      >
      <span style="color:#A8978F"
        >Rating: <span style="color:black">{{ flim.info.rating }}</span></span
      >
      <span style="color:#A8978F"
        >Runtime: <span style="color:black">{{ flim.info.runtime }}</span></span
      >
      <span style="color:#A8978F"
        >Theaters On:
        <span style="color:black">{{ flim.info.theatersDate }}</span></span
      >
    </div>
  </div>
</template>
<script>
import moment from "moment";
import getPreviewFlim from "@/apollo/queries/getPreviewFlim.gql";
export default {
  props: {
    slug: {
      type: String,
      default: "star_wars_episode_vii_the_force_awakens"
    }
  },
  data() {
    return {
      isLoading: true,
      flim: {}
    };
  },
  apollo: {
    flimBySlug: {
      query: getPreviewFlim,
      variables() {
        return {
          slug: this.slug
        };
      },
      result(result) {
        this.flim = result.data.flimBySlug;
        this.flim.info.genres = this.flim.info.genres.map(
          item => item.charAt(0).toUpperCase() + item.slice(1)
        );
        this.flim.info.theatersDate = moment(
          this.flim.info.theatersDate
        ).format("ll");
        this.isLoading = false;
      }
    }
  }
};
</script>
