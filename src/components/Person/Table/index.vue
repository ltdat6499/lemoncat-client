<template>
  <b-container fluid style="min-height:500px">
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
      <template #cell(lemonScore)="row">
        <div style="display: flex;justify-content: center;">
          <img
            :src="row.item.lemonIcon"
            style="width:16px;height:16px;margin-right:5px"
          />
          <strong>{{ row.item.lemonScoreDisplay }}</strong>
        </div>
      </template>

      <template #cell(userScore)="row">
        <div style="display: flex;justify-content: center;">
          <img
            :src="row.item.userIcon"
            style="width:16px;height:16px;margin-right:5px"
          />
          <strong>{{ row.item.userScoreDisplay }}</strong>
        </div>
      </template>

      <template #cell(title)="row">
        <b-link :href="'/m/' + row.item.slug" style="text-decoration:none;">
          {{ row.item.title }}
        </b-link>
      </template>

      <template #cell(credit)="row">
        <p v-html="row.item.credit"></p>
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
export default {
  props: {
    flims: {
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
          key: "lemonScore",
          label: "LEMONCATER®",
          sortable: true,
          sortDirection: "desc",
          class: "text-left"
        },
        {
          key: "userScore",
          label: "USER SCORE",
          sortable: true,
          class: "text-left"
        },
        {
          key: "title",
          label: "TITLE",
          sortable: true,
          class: "text-left w-25"
        },
        {
          key: "credit",
          label: "CREDIT",
          sortable: true,
          class: "text-left w-25"
        },
        {
          key: "year",
          label: "YEAR",
          sortable: true,
          class: "text-left"
        }
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 50, 100],
      sortBy: "", //{ text: "none", value: null }
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      filterOn: ["lemonScore", "userScore", "title", "credit", "year"]
    };
  },
  computed: {
    items() {
      return this.flims;
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
