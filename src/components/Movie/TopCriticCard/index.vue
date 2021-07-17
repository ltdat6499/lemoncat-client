<template>
  <div>
    <div class="box sb">
      <b-row>
        <b-col cols="1"
          ><img :src="thisIcon" style="width:25px;height:25px"
        /></b-col>
        <b-col cols="11">
          <span style="text-align:justify;display:flex;padding-left:10px">{{
            thisTitle
          }}</span>
          <div
            style="text-align:right;font-size:11px;width:100%;margin-top:10px"
          >
            <span
              >{{ thisDate }} | Rating: {{ thisScore }}% |
              <b-link
                :href="'/post/' + thisReviewSlug"
                style="text-decoration:none;"
                >Full Review</b-link
              ></span
            >
          </div></b-col
        >
      </b-row>
    </div>
    <b-row>
      <b-col cols="2"></b-col>
      <b-col cols="10" style="display:flex">
        <img :src="thisUserImage" style="width:50px;height:50px" />
        <div style="display: flex;flex-direction: column;margin-left:15px">
          <b-link :href="'/user/' + thisUserSlug" class="name">{{
            thisUserName
          }}</b-link>
          <b-link class="news-name">{{ thisUserWorking }}</b-link>
          <div>
            <v-icon style="font-size:20px" color="red" x-small>mdi-star</v-icon
            ><span style="color:red"> <strong>TOP CRITIC</strong></span>
          </div>
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
    userWorking: {
      type: String,
      default: "Lemoncat"
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
    thisUserWorking() {
      return this.userWorking;
    },
    thisDate() {
      return moment(this.date).format('LL');
    },
    thisScore() {
      return this.score;
    },
    thisIcon() {
      if (this.score >= 80)
        return "https://live.staticflickr.com/65535/51280469111_d17f4e62ea_o.png";
      else if (this.score >= 60 && this.score < 80)
        return "https://live.staticflickr.com/65535/51280643468_b13c69ff22_o.png";
      else if (this.score < 60 && this.score >= 0)
        return "https://live.staticflickr.com/65535/51278099823_29be28c9b3_o.png";
      else
        return "https://live.staticflickr.com/65535/51278655199_d54f32f82e_o.png";
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
