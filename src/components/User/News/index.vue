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
        <b-link style="text-decoration:none;">
          {{ row.value.section }}
        </b-link>
      </template>

      <template #cell(poster)="row">
        <img
          :src="row.value"
          style="width:140px;height: 80px;border-radius:4px"
        />
      </template>

      <template #cell(title)="row">
        <div style="display:flex">
          <div style="display:flex;flex-direction: column">
            <span style="text-align:justify">
              {{ row.value }}
            </span>
          </div>
        </div>
      </template>

      <template #cell(sideTitle)="row">
        <div style="display:flex;padding-left:10px;">
          <div style="display:flex;flex-direction: column">
            <span style="text-align:justify">
              {{ row.value }} <b-link
                :href="'/post/' + row.item.slug"
                style="text-decoration:none;float:right"
                >Full Post</b-link
              >
            </span>
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
          key: "data",
          label: "Section",
          sortable: true,
          sortDirection: "desc",
          class: "text-left align-middle"
        },
        {
          key: "poster",
          label: "Poster",
          sortable: true,
          class: "text-left align-middle"
        },
        {
          key: "title",
          label: "Title",
          sortable: true,
          class: "text-left align-middle"
        },
        {
          key: "sideTitle",
          label: "Content",
          sortable: true,
          class: "text-left"
        },
        {
          key: "updatedAt",
          label: "Date",
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
      filterOn: ["title", "data", "updatedAt", "sideTitle"]
    };
  },
  computed: {
    thisPost() {
      return this.posts.map(item => {
        item.updatedAt = moment(item.updatedAt).format("ll");
        item.poster = item.data.previewPoster;
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
