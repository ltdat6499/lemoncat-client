<template>
  <span>
    <b-row style="padding-top: 20px;padding-bottom:10px">
      <div style="padding-left:10px;padding-right:10px; display:flex">
        <div
          style="padding-left:5px;padding-right:5px;display:flex;text-align: left;"
        >
          <b-link style="text-decoration:none;"
            >All Critics ({{ allCritic }})</b-link
          >
          |
          <b-link style="text-decoration:none;"
            >Top Critics ({{ top.length }})
          </b-link>
          | <b-link style="text-decoration:none;">Fresh ({{ fresh }})</b-link> |
          <b-link style="text-decoration:none;">Rotten ({{ rotten }})</b-link>
        </div>
      </div>
    </b-row>
    <b-row style="padding-top: 20px;padding-bottom:10px">
      <div style="padding-left:10px;padding-right:10px; display:flex">
        <div
          style="padding-left:5px;padding-right:5px;display:flex;text-align: left;display: flex;
  flex-wrap: wrap;justify-content:space-around"
        >
          <top-critic-card
            v-for="item in top.slice(0, 8)"
            :key="item.id"
            :title="item.title"
            :reviewSlug="item.slug"
            :userSlug="item.user.slug"
            :userName="item.user.name"
            :userImage="item.user.image"
            :userWorking="item.user.data.working"
            :date="new Date(item.updatedAt)"
            :score="item.data.score"
          ></top-critic-card>
          <b-link
            style="text-decoration:none;width:100%;text-align:right;padding-right:10px;padding-top:15px"
            ><strong>View All Critic Reviews ({{ allCritic }})</strong>
          </b-link>
        </div>
      </div>
    </b-row>
    <b-row>
      <div style="padding-left:10px;padding-right:10px;width:100%">
        <header-bar>
          <span slot="header"
            >AUDIENCE REVIEWS FOR {{ name.toUpperCase() }}</span
          >
        </header-bar>
      </div></b-row
    >
    <b-row style="padding-top: 20px;padding-bottom:10px">
      <div style="padding-left:10px;padding-right:10px; display:flex">
        <div
          style="padding-left:5px;padding-right:5px;display:flex;text-align: left;display: flex;
  flex-wrap: wrap;justify-content:space-around"
        >
          <critic-card
            v-for="item in audience.slice(0, 8)"
            :key="item.id"
            :title="item.title"
            :reviewSlug="item.slug"
            :userSlug="item.user.slug"
            :userName="item.user.name"
            :userImage="item.user.image"
            :date="new Date(item.updatedAt)"
            :score="item.data.score"
          ></critic-card>

          <b-link
            style="text-decoration:none;width:100%;text-align:right;padding-right:10px;padding-top:15px;"
            ><strong>See all Audience reviews</strong>
          </b-link>
        </div>
      </div>
    </b-row>
  </span>
</template>
<script>
import _ from "lodash";
import getReviewsForFlim from "@/apollo/queries/getReviewsForFlim.gql";
import HeaderBar from "@/components/Movie/HeaderBar";
import TopCriticCard from "@/components/Movie/TopCriticCard";
import CriticCard from "@/components/Movie/CriticCard";
export default {
  components: {
    TopCriticCard,
    CriticCard,
    HeaderBar
  },
  props: {
    name: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      top: [],
      audience: [],
      isLoading: true,
      posts: [],
      allCritic: 0,
      fresh: 0,
      rotten: 0
    };
  },
  apollo: {
    reviewsForFlim: {
      query: getReviewsForFlim,
      variables() {
        return {
          flimId: this.id
        };
      },
      result(result) {
        this.posts = result.data.reviewsForFlim;
        this.allCritic = this.posts.length;
        this.posts = this.posts.map(item => {
          item.score = parseFloat(item.score);
          return item;
        });
        this.posts = _.sortBy(this.posts, ["score"]).reverse();
        if (this.top.length === 0 && this.audience.length === 0)
          for (const item of this.posts) {
            if (item.data.score >= 60) this.fresh++;
            else this.rotten++;

            if (item.user.role === "s-user") {
              this.top.push(item);
            } else {
              this.audience.push(item);
            }
          }
        console.log(this.posts);
        console.log(this.top);
        console.log(this.audience);
        this.isLoading = false;
      }
    }
  }
};
</script>
