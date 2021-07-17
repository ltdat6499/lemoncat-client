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
      :items="items"
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
      <template #cell(name)="row">
        <b-link style="display:flex;text-decoration:none;">
          <img :src="row.item.imageSrc" style="width:50px;height:50px" />
          <div
            style="display:flex;flex-direction:column;align-items: flex-start;justify-content:center;margin-left:10px"
          >
            <span style="color:black;float:left;margin-right:auto"
              ><strong style="text-align:left">{{ row.value }}</strong></span
            >
            <span style="color:#757A84"
              ><i>{{ row.item.workingNews }}</i></span
            >
          </div>
        </b-link>
      </template>

      <template #cell(content)="row">
        <div style="display:flex;width:100%">
          <img
            :src="row.item.score"
            style="width:25px;height:25px;margin-right:10px"
          />
          <div style="display:flex;flex-direction: column;width:100%">
            <span style="font-size:16px;text-align:justify">
              {{ row.value }}
            </span>
            <div style="float:left;margin-top: 5px">
              <b-link :href="'/post/' + row.item.slug" style="text-decoration:none;">Full Review</b-link>
              <span> | </span>
              <span>Original Score: {{row.item.displayScore}}%</span>
              <span> | </span>
              <span style="color:gray"> {{ row.item.date }} </span>
            </div>
          </div>
        </div>
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
          key: "name",
          label: "Reporter",
          sortable: true,
          sortDirection: "desc",
          class: "w-25"
        },
        {
          key: "content",
          label: "Content",
          sortable: true,
          class: "text-left"
        }
        // {
        //   formatter: (value, key, item) => {
        //     return value ? "Yes" : "No";
        //   },
        //   sortable: true,
        //   sortByFormatted: true,
        //   filterByFormatted: true
        // },
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 50, 100],
      sortBy: "name",
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      filterOn: ["name", "date", "content"]
    };
  },
  computed: {
    items() {
      return this.posts.map(item => {
        return {
          name: item.user.name,
          workingNews:
            item.user.data.working != null
              ? item.user.data.working
              : "Lemoncat",
          imageSrc:
            item.user.image || require("../../../assets/img/sample-person.jpg"),
          score: (() => {
            if (item.data.score >= 80)
              return "https://live.staticflickr.com/65535/51280469111_d17f4e62ea_o.png";
            else if (item.data.score >= 60 && item.data.score < 80)
              return "https://live.staticflickr.com/65535/51280643468_b13c69ff22_o.png";
            else if (item.data.score < 60 && item.data.score >= 0)
              return "https://live.staticflickr.com/65535/51278099823_29be28c9b3_o.png";
            else
              return "https://live.staticflickr.com/65535/51278655199_d54f32f82e_o.png";
          })(),
          content: item.title,
          date: moment(item.updatedAt).format("ll"),
          slug: item.slug,
          displayScore: item.data.score
        };
      });
    }
  },
  mounted() {
    this.totalRows = this.items.length;
  },
  methods: {
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  }
};
</script>
