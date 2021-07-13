<template>
  <div v-if="posts.length" style="display:flex;flex-wrap: wrap;margin:10px">
    <news-card
      v-for="item of posts"
      :key="item.slug"
      :slug="item.slug"
      :src="item.data.previewPoster"
      :date="item.createdAt"
      :name="item.title"
    ></news-card>
  </div>
</template>
<script>
import NewsCard from "@/components/NewsCard";
import getFreshNewsInWeek from "@/apollo/queries/getFreshNewsInWeek.gql";
export default {
  components: {
    NewsCard
  },
  data() {
    return {
      posts: []
    };
  },
  apollo: {
    freshNewsInWeek: {
      query: getFreshNewsInWeek,
      result(result) {
        this.posts = result.data.freshNewsInWeek || [];
      }
    }
  }
};
</script>
