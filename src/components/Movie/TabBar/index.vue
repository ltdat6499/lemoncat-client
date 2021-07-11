<template>
  <div style="width:95%">
    <b-tabs
      active-nav-item-class="font-weight-bold text-uppercase text-body"
      content-class="mt-3"
    >
      <b-tab
        style="margin-left:10px;width:100%"
        title="IN THEATERS"
        :title-link-class="titleColor"
        active
      >
        <span style="display: flex;margin-bottom:10px"
          ><strong>OPENING</strong></span
        >
        <div v-for="item of data.byDate" :key="item.slug" style="width:100%">
          <b-link
            :href="'/m/' + item.slug"
            style="display: flex;margin-bottom:5px;width:100%;color:black"
          >
            <img
              :src="item.icon"
              style="height:20px;width:20px;margin-right:5px;float:left"
            />
            <span style="margin-right:20px;float:left;text-align:left"
              ><strong>{{ item.lemonScoreDisplay }}</strong></span
            >
            <span style="float:left;text-align:left">{{ item.name }}</span>
            <span
              style="float:right;text-align:right;margin-left:auto;margin-right:10px"
              >{{ item.createdAt }}</span
            >
          </b-link>
        </div>
        <b-link
          style="display: flex;margin-top:10px;color:#007BFF;text-decoration:none;"
          href="/m/list/opening_this_week"
          ><strong>View all</strong>
        </b-link>

        <span style="display: flex;margin-top:15px;margin-bottom:10px"
          ><strong>CERTIFIED FRESH</strong></span
        >
        <div v-for="item of data.byFresh" :key="item.slug" style="width:100%">
          <b-link
            :href="'/m/' + item.slug"
            style="display: flex;margin-bottom:5px;width:100%;color:black"
          >
            <img
              :src="item.icon"
              style="height:20px;width:20px;margin-right:5px;float:left"
            />
            <span style="margin-right:20px;float:left;text-align:left"
              ><strong>{{ item.lemonScoreDisplay }}</strong></span
            >
            <span style="float:left;text-align:left">{{ item.name }}</span>
            <span
              style="float:right;text-align:right;margin-left:auto;margin-right:10px"
              >{{ item.createdAt }}</span
            >
          </b-link>
        </div>
        <b-link
          style="display: flex;margin-top:10px;color:#007BFF;text-decoration:none;"
          href="/m/list/certified_fresh"
          ><strong>View all</strong>
        </b-link>
        <span style="display: flex;margin-top:15px;margin-bottom:10px"
          ><strong>COMING SOON</strong></span
        >
        <div v-for="item of data.byFuture" :key="item.slug" style="width:100%">
          <b-link
            :href="'/m/' + item.slug"
            style="display: flex;margin-bottom:5px;width:100%;color:black"
          >
            <img
              :src="item.icon"
              style="height:20px;width:20px;margin-right:5px;float:left"
            />
            <span style="margin-right:20px;float:left;text-align:left"
              ><strong>{{ item.lemonScoreDisplay }}</strong></span
            >
            <span style="float:left;text-align:left">{{ item.name }}</span>
            <span
              style="float:right;text-align:right;margin-left:auto;margin-right:10px"
              >{{ item.createdAt }}</span
            >
          </b-link>
        </div>
        <b-link
          style="display: flex;margin-bottom:10px;margin-top:10px;color:#007BFF;text-decoration:none;"
          href="/m/list/coming_soon"
          ><strong>View all</strong>
        </b-link>
      </b-tab>
      <b-tab
        style="margin-left:10px"
        title="STREAMING MOVIES"
        :title-link-class="titleColor"
        ><span style="display: flex;margin-top:15px;margin-bottom:10px"
          ><strong>MOST POPULAR</strong></span
        >
        <div v-for="item of data.byPopular" :key="item.slug" style="width:100%">
          <b-link
            :href="'/m/' + item.slug"
            style="display: flex;margin-bottom:5px;width:100%;color:black"
          >
            <img
              :src="item.icon"
              style="height:20px;width:20px;margin-right:5px;float:left"
            />
            <span style="margin-right:20px;float:left;text-align:left"
              ><strong>{{ item.lemonScoreDisplay }}</strong></span
            >
            <span style="float:left;text-align:left">{{ item.name }}</span>
            <span
              style="float:right;text-align:right;margin-left:auto;margin-right:10px"
              >{{ item.createdAt }}</span
            >
          </b-link>
        </div>
        <b-link
          style="display: flex;margin-bottom:10px;margin-top:10px;color:#007BFF;text-decoration:none;"
          href="#"
          ><strong>View all</strong>
        </b-link></b-tab
      >
      <b-tab
        style="margin-left:10px"
        title="TV SHOWS"
        :title-link-class="titleColor"
      >
        <span style="display: flex;margin-bottom:10px"
          ><strong>NEW TV TONIGHT</strong></span
        >
        <div v-for="i of [1, 2, 3, 4, 5]" :key="i">
          <p style="display: flex;margin-bottom:5px">
            <img
              src="https://live.staticflickr.com/65535/51280643468_b13c69ff22_o.png"
              style="height:20px;width:20px;margin-right:5px"
            />
            <span style="margin-right:30px"><strong>92%</strong></span>
            <span style="margin-right:30px">Sample name ...</span>
            <span>JUN 04</span>
          </p>
        </div>
        <b-link
          style="display: flex;margin-top:10px;color:#007BFF;text-decoration:none;"
          href="#"
          ><strong>View all</strong>
        </b-link>

        <span style="display: flex;margin-top:15px;margin-bottom:10px"
          ><strong>MOST POPULAR TV ON LC</strong></span
        >
        <div v-for="i of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" :key="i">
          <p style="display: flex;margin-bottom:5px">
            <img
              src="https://live.staticflickr.com/65535/51280643468_b13c69ff22_o.png"
              style="height:20px;width:20px;margin-right:5px"
            />
            <span style="margin-right:30px"><strong>92%</strong></span>
            <span style="margin-right:30px">Sample name ...</span>
            <span>JUN 04</span>
          </p>
        </div>
        <b-link
          style="display: flex;margin-top:10px;color:#007BFF;text-decoration:none;"
          href="#"
          ><strong>View all</strong>
        </b-link>
        <span style="display: flex;margin-top:15px;margin-bottom:10px"
          ><strong>CERTIFIED FRESH TV</strong></span
        >
        <div v-for="i of [1, 2, 3, 4, 5]" :key="i">
          <p style="display: flex;margin-bottom:5px">
            <img
              src="https://live.staticflickr.com/65535/51280643468_b13c69ff22_o.png"
              style="height:20px;width:20px;margin-right:5px"
            />
            <span style="margin-right:30px"><strong>92%</strong></span>
            <span style="margin-right:30px">Sample name ...</span>
            <span>JUN 04</span>
          </p>
        </div>
        <b-link
          style="display: flex;margin-bottom:10px;margin-top:10px;color:#007BFF;text-decoration:none;"
          href="#"
          ><strong>View all</strong>
        </b-link>
      </b-tab>
    </b-tabs>
  </div>
</template>
<script>
import moment from "moment";
import getFlimsSideMenu from "@/apollo/queries/getFlimsSideMenu.gql";
export default {
  data() {
    return {
      data: [],
      titleColor: ["font-weight-bold", "text-secondary"]
    };
  },
  apollo: {
    sideMenuFlims: {
      query: getFlimsSideMenu,
      result(result) {
        this.data = result.data.sideMenuFlims;
        this.data = {
          byDate: this.data.byDate.map(item => {
            item.icon = (() => {
              if (item.lemonScore >= 80)
                return "https://live.staticflickr.com/65535/51280469111_d17f4e62ea_o.png";
              else if (item.lemonScore >= 60 && item.lemonScore < 80)
                return "https://live.staticflickr.com/65535/51280643468_b13c69ff22_o.png";
              else if (item.lemonScore < 60 && item.lemonScore >= 0)
                return "https://live.staticflickr.com/65535/51278099823_29be28c9b3_o.png";
              else
                return "https://live.staticflickr.com/65535/51278655199_d54f32f82e_o.png";
            })();
            item.lemonScoreDisplay =
              item.lemonScore === -1 ? "_ _" : `${item.lemonScore + "%"}`;
            item.createdAt = moment(item.createdAt).format("ll");
            item.createdAt = item.createdAt.split(", ")[0].toUpperCase();
            item.name =
              item.info.name.length > 30
                ? item.info.name.substring(0, 30) + "..."
                : item.info.name;
            return item;
          }),
          byFresh: this.data.byFresh.map(item => {
            item.icon = (() => {
              if (item.lemonScore >= 80)
                return "https://live.staticflickr.com/65535/51280469111_d17f4e62ea_o.png";
              else if (item.lemonScore >= 60 && item.lemonScore < 80)
                return "https://live.staticflickr.com/65535/51280643468_b13c69ff22_o.png";
              else if (item.lemonScore < 60 && item.lemonScore >= 0)
                return "https://live.staticflickr.com/65535/51278099823_29be28c9b3_o.png";
              else
                return "https://live.staticflickr.com/65535/51278655199_d54f32f82e_o.png";
            })();
            item.lemonScoreDisplay =
              item.lemonScore === -1 ? "_ _" : `${item.lemonScore + "%"}`;
            item.createdAt = moment(item.createdAt).format("ll");
            item.createdAt = item.createdAt.split(", ")[0].toUpperCase();
            item.name =
              item.info.name.length > 30
                ? item.info.name.substring(0, 30) + "..."
                : item.info.name;
            return item;
          }),
          byFuture: this.data.byFuture.map(item => {
            item.icon = (() => {
              if (item.lemonScore >= 80)
                return "https://live.staticflickr.com/65535/51280469111_d17f4e62ea_o.png";
              else if (item.lemonScore >= 60 && item.lemonScore < 80)
                return "https://live.staticflickr.com/65535/51280643468_b13c69ff22_o.png";
              else if (item.lemonScore < 60 && item.lemonScore >= 0)
                return "https://live.staticflickr.com/65535/51278099823_29be28c9b3_o.png";
              else
                return "https://live.staticflickr.com/65535/51278655199_d54f32f82e_o.png";
            })();
            item.lemonScoreDisplay =
              item.lemonScore === -1 ? "_ _" : `${item.lemonScore + "%"}`;
            item.createdAt = moment(item.createdAt).format("ll");
            item.createdAt = item.createdAt.split(", ")[0].toUpperCase();
            item.name =
              item.info.name.length > 30
                ? item.info.name.substring(0, 30) + "..."
                : item.info.name;
            return item;
          }),
          byPopular: this.data.byPopular.map(item => {
            item.icon = (() => {
              if (item.lemonScore >= 80)
                return "https://live.staticflickr.com/65535/51280469111_d17f4e62ea_o.png";
              else if (item.lemonScore >= 60 && item.lemonScore < 80)
                return "https://live.staticflickr.com/65535/51280643468_b13c69ff22_o.png";
              else if (item.lemonScore < 60 && item.lemonScore >= 0)
                return "https://live.staticflickr.com/65535/51278099823_29be28c9b3_o.png";
              else
                return "https://live.staticflickr.com/65535/51278655199_d54f32f82e_o.png";
            })();
            item.lemonScoreDisplay =
              item.lemonScore === -1 ? "_ _" : `${item.lemonScore + "%"}`;
            item.createdAt = moment(item.createdAt).format("ll");
            item.createdAt = item.createdAt.split(", ")[0].toUpperCase();
            item.name =
              item.info.name.length > 30
                ? item.info.name.substring(0, 30) + "..."
                : item.info.name;
            return item;
          })
        };
      }
    }
  }
};
</script>
<style scoped></style>
