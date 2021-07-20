<template>
  <b-container fluid style="min-height:600px">
    <b-row
      style="margin-bottom:20px;margin-top:20px;display:flex;flex-direction: column;align-items: center;"
    >
      <b-input-group style="width:80%">
        <b-form-input
          id="filter-input"
          v-model="filter"
          type="search"
          placeholder="Type to Search"
        ></b-form-input>

        <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
      </b-input-group>
    </b-row>

    <b-table
      :items="thisPost"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :filter-included-fields="filterOn"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :sort-direction="sortDirection"
      stacked="md"
      show-empty
      fixed
      @filtered="onFiltered"
    >
      <template #cell(data)="row">
        <b-link
          :href="'/m/' + row.value.flim.slug"
          style="display:flex;text-decoration:none;"
        >
          <img
            :src="row.value.flim.info.poster"
            style="width:85px;height:110px"
          />
          <div
            style="display:flex;flex-direction:column;align-items: flex-start;justify-content:center;margin-left:10px"
          >
            <span style="color:black;"
              ><strong>{{ row.value.flim.info.name }}</strong></span
            >
            <span style="color:gray;text-align: justify">{{
              row.value.flim.info.summary
            }}</span>
            <span style="color:black;text-align: left"
              >Release at: {{ row.value.flim.info.theatersDate }}</span
            >
            <div style="display:flex;color:black">
              <div
                style="display:flex;align-items:center;justify-content: center;margin-right: 10px"
              >
                <img
                  :src="row.value.flim.lemonIcon"
                  alt=""
                  style="width:20px;height:20px"
                />
                <span>{{ row.value.flim.lemonScore }}% </span>
              </div>
              <div
                style="display:flex;align-items:center;justify-content: center"
              >
                <img
                  :src="row.value.flim.userIcon"
                  alt=""
                  style="width:20px;height:20px"
                />
                <span>{{ row.value.flim.userScore }}%</span>
              </div>
            </div>
          </div>
        </b-link>
      </template>

      <template #cell(title)="row">
        <div style="display:flex">
          <img
            :src="row.item.data.icon"
            style="width:25px;height:25px;margin-right:10px"
          />
          <div style="display:flex;flex-direction: column;width:100%">
            <span style="font-size:16px;text-align:justify">
              {{ row.value }}
            </span>
            <div style="float:left">
              <b-link :href="'/post/' + row.item.slug" style="text-decoration:none;">Full Review</b-link>
              <span> | </span>
              <span>Original Score: {{ row.item.data.score }}%</span>
              <span> | </span>
              <span style="color:gray"> {{ row.item.updatedAt }} </span>
            </div>
          </div>
        </div>
      </template>

      <template #cell(editable)>
        <b-link style="display:flex;text-decoration:none;">
          <v-btn icon small>
            <v-icon>
              mdi-wrench
            </v-icon>
          </v-btn>
        </b-link>
      </template>
    </b-table>
    <div style="width: 100%;display:flex;align-items: center;">
      <span style="margin-right:10px;float:right">Reviews/Page: </span>
      <v-select
        style="max-width:5%;float:right"
        v-model="perPage"
        :items="pageOptions"
      ></v-select>
      <div style="width: 100%;display:flex;justify-content:flex-end">
        <b-pagination
          style="width: 60%"
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          align="fill"
          size="sm"
          class="my-0"
        ></b-pagination>
      </div>
    </div>
  </b-container>
</template>
<script>
import moment from "moment";
export default {
  props: {
    posts: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      fields: [
        {
          key: "data",
          label: "Flim",
          sortable: true,
          sortDirection: "desc"
        },
        {
          key: "title",
          label: "Content",
          sortable: true,
          class: "text-left align-middle"
        }
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 50, 100],
      sortBy: { text: "none", value: null },
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      filterOn: ["data", "title"]
    };
  },
  computed: {
    thisPost() {
      return this.posts.map(item => {
        if (item.data.flim.info.summary.length > 80)
          item.data.flim.info.summary =
            item.data.flim.info.summary.substring(0, 80) + " ...";

        item.data.flim.info.theatersDate = moment(
          item.data.flim.info.theatersDate
        ).format("ll");

        if (item.data.score >= 80)
          item.data.icon =
            "https://live.staticflickr.com/65535/51280469111_d17f4e62ea_o.png";
        else if (item.data.score >= 60 && item.data.score < 80)
          item.data.icon =
            "https://live.staticflickr.com/65535/51280643468_b13c69ff22_o.png";
        else if (item.data.score < 60 && item.data.score >= 0)
          item.data.icon =
            "https://live.staticflickr.com/65535/51278099823_29be28c9b3_o.png";
        else
          item.data.icon =
            "https://live.staticflickr.com/65535/51278655199_d54f32f82e_o.png";

        if (item.data.flim.lemonScore >= 80)
          item.data.flim.lemonIcon =
            "https://live.staticflickr.com/65535/51280469111_d17f4e62ea_o.png";
        else if (
          item.data.flim.lemonScore >= 60 &&
          item.data.flim.lemonScore < 80
        )
          item.data.flim.lemonIcon =
            "https://live.staticflickr.com/65535/51280643468_b13c69ff22_o.png";
        else if (
          item.data.flim.lemonScore < 60 &&
          item.data.flim.lemonScore >= 0
        )
          item.data.flim.lemonIcon =
            "https://live.staticflickr.com/65535/51278099823_29be28c9b3_o.png";
        else
          item.data.flim.lemonIcon =
            "https://live.staticflickr.com/65535/51278655199_d54f32f82e_o.png";

        if (item.data.flim.userScore >= 60)
          item.data.flim.userIcon =
            "https://live.staticflickr.com/65535/51277934536_26d8b990e5_o.png";
        else if (item.data.flim.userScore < 60 && item.data.flim.userScore >= 0)
          item.data.flim.userIcon =
            "https://live.staticflickr.com/65535/51278953920_e842d17506_o.png";
        else
          item.data.flim.userIcon =
            "https://live.staticflickr.com/65535/51277185452_0092492af4_o.png";

        item.updatedAt = moment(item.updatedAt).format("ll");
        return item;
      });
    }
  },
  mounted() {
    this.totalRows = this.thisPost.length;
  },
  methods: {
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  }
};
</script>
