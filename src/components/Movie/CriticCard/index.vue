<template>
  <div>
    <div class="box sb">
      <div style="display:flex;flex-direction:column;align-items: center;">
        <b-form-rating
          v-model="thisRating"
          readonly
          inline
          no-border
          precision="2"
          color="#ff8800"
        ></b-form-rating>
        <div>
          <span style="text-align:justify;display:flex;padding-left:10px">{{
            thisTitle
          }}</span>
          <div
            style="text-align:right;font-size:11px;width:100%;margin-top:10px"
          >
            <span
              >{{ thisDate }} | Rating: {{ thisRating }}/5 |
              <b-link
                :href="'/post/' + thisReviewSlug"
                style="text-decoration:none;"
                >Full Review</b-link
              ></span
            >
          </div>
        </div>
      </div>
    </div>
    <b-row>
      <b-col cols="2"></b-col>
      <b-col cols="10" style="display:flex;align-items: center;">
        <img :src="thisUserImage" style="width:50px;height:50px" />
        <div style="display: flex;flex-direction: column;margin-left:15px">
          <b-link :href="'/user/' + thisUserSlug" class="name">{{
            thisUserName
          }}</b-link>
          <span style="color:red"> <strong>SUPER REVIEWER</strong></span>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import moment from "moment";
export default {
  props: {
    title: {
      type: String,
      default:
        "Maybe nothing could have possibly matched the original for me. [But] everyone is very good in it. The kids, Noah Jupe and Millicent Simmonds, really are the stars here."
    },
    reviewSlug: {
      type: String,
      default: ""
    },
    userSlug: {
      type: String,
      default: ""
    },
    userName: {
      type: String,
      default: "Christy Lemire"
    },
    userImage: {
      type: String,
      default: require("../../../assets/img/sample-person.jpg")
    },
    date: {
      type: Date,
      default: Date.now()
    },
    score: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      audienceRating: 3.5
    };
  },
  computed: {
    thisTitle() {
      return this.title;
    },
    thisReviewSlug() {
      return this.reviewSlug;
    },
    thisUserSlug() {
      return this.userSlug;
    },
    thisUserName() {
      return this.userName;
    },
    thisUserImage() {
      return this.userImage;
    },
    thisDate() {
      return moment(this.date).format("LL");
    },
    thisScore() {
      return this.score;
    },
    thisRating() {
      return (this.score * 5) / 100;
    }
  }
};
</script>
<style scoped>
.box {
  width: 300px;
  margin: 10px auto;
  border: 3px solid black;
  padding: 15px;
  text-align: center;
  position: relative;
}
.sb:before {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 10px solid transparent;
  border-right: 10px solid black;
  border-top: 10px solid black;
  border-bottom: 10px solid transparent;
  right: 251px;
  bottom: -20px;
}

.sb:after {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 10px solid transparent;
  border-right: 10px solid #fff;
  border-top: 10px solid #fff;
  border-bottom: 10px solid transparent;
  right: 254px;
  bottom: -12px;
}
.name {
  font-weight: bold;
  text-decoration: none;
  color: black;
}
.name:hover {
  color: #4476d0;
}
.news-name {
  text-decoration: none;
  color: gray;
}
.news-name:hover {
  color: #4476d0;
}
</style>
