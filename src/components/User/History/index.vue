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
      <template #cell(post)="row">
        <b-link :href="'/post/' + row.value" style="text-decoration:none;">
          {{ (row.value.charAt(0).toUpperCase() + row.value.slice(1).toLowerCase()).replaceAll("-", " ") }}
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
          key: "post",
          label: "Post",
          sortable: true,
          sortDirection: "desc",
          class: "text-left"
        },
        {
          key: "type",
          label: "Type Action",
          sortable: true,
          sortDirection: "desc",
          class: "text-left  align-middle"
        },
        {
          key: "data",
          label: "Action",
          sortable: true,
          class: "text-center  align-middle"
        },
        {
          key: "updatedAt",
          label: "Date",
          class: "text-left  align-middle"
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
      filterOn: ["data"]
    };
  },
  computed: {
    thisPost() {
      return this.posts.map(item => {
        item.updatedAt = moment(item.updatedAt).format("LLLL");
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
