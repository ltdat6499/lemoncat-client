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
      <div v-for="item in flims" :key="item.id">
        <b-link :href="'/m/' + item.slug"
          style="width:100%;text-decoration:none;color:black;display:flex;justify-content:flex-start;align-items: center"
        >
          <span>{{ item.info.name }}</span>
          <span style="margin-left:auto;display:flex;align-items: center">
            <div>
              <img :src="item.icon" style="height:20px;width:20px" />
              <strong style="color:black">{{
                item.lemonScore === -1 ? "_ _ _" : item.lemonScore + "%"
              }}</strong>
            </div>
          </span>
        </b-link>
        <hr />
      </div>
    </div>
  </div>
</template>
<script>
import getFlims from "@/apollo/queries/getFlims.gql";
export default {
  props: {
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
        this.flims = this.flims.map(item => {
          if (item.info.name.length > 30)
            item.info.name = item.info.name.substring(0, 30) + " ...";
          if (item.lemonScore >= 80)
            item.icon =
              "https://live.staticflickr.com/65535/51280469111_d17f4e62ea_o.png";
          else if (item.lemonScore >= 60 && item.lemonScore < 80)
            item.icon =
              "https://live.staticflickr.com/65535/51280643468_b13c69ff22_o.png";
          else if (item.lemonScore < 60 && item.lemonScore >= 0)
            item.icon =
              "https://live.staticflickr.com/65535/51278099823_29be28c9b3_o.png";
          else
            item.icon =
              "https://live.staticflickr.com/65535/51278655199_4ec122dafd_o.png";
          return item;
        });
      }
    }
  }
};
</script>
