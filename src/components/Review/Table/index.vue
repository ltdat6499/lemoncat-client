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
            <span style="color:black;"
              ><strong>{{ row.value }}</strong></span
            >
            <span style="color:#757A84"
              ><i>{{ row.item.workingNews }}</i></span
            >
          </div>
        </b-link>
      </template>

      <template #cell(content)="row">
        <div style="display:flex">
          <img
            :src="row.item.score"
            style="width:25px;height:25px;margin-right:10px"
          />
          <div style="display:flex;flex-direction: column">
            <span style="font-size:16px;text-align:justify">
              {{ row.value }}
            </span>
            <div style="float:left">
              <b-link style="text-decoration:none;">Full Review</b-link>
              <span> | </span>
              <span>Original Score: 5/5</span>
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
export default {
  data() {
    return {
      items: [
        {
          name: "LYT",
          workingNews: "USA Today",
          imageSrc: require("../../../assets/img/sample-person.jpg"),
          score: require("../../../icons/certified-fresh.svg"),
          content:
            "A Like the Force, The Mandalorian is communicating to us what it thinks we need to know. It's holding back on the rest, but it seems like we'll all be better for it in the end.",
          date: "November 26, 2019"
        },
        {
          name: "Paul M. Bradshaw",
          workingNews: "USA Today",
          imageSrc: require("../../../assets/img/sample-person.jpg"),
          score: require("../../../icons/certified-fresh.svg"),
          content:
            "Like the Force, The Mandalorian is communicating to us what it thinks we need to know. It's holding back on the rest, but it seems like we'll all be better for it in the end.",
          date: "November 26, 2019"
        },
        {
          name: "Paul M. Bradshaw",
          workingNews: "USA Today",
          imageSrc: require("../../../assets/img/sample-person.jpg"),
          score: require("../../../icons/certified-fresh.svg"),
          content:
            "Like the Force, The Mandalorian is communicating to us what it thinks we need to know. It's holding back on the rest, but it seems like we'll all be better for it in the end.",
          date: "November 26, 2019"
        },
        {
          name: "Paul M. Bradshaw",
          workingNews: "USA Today",
          imageSrc: require("../../../assets/img/sample-person.jpg"),
          score: require("../../../icons/certified-fresh.svg"),
          content:
            "Like the Force, The Mandalorian is communicating to us what it thinks we need to know. It's holding back on the rest, but it seems like we'll all be better for it in the end.",
          date: "November 26, 2019"
        },
        {
          name: "Paul M. Bradshaw",
          workingNews: "USA Today",
          imageSrc: require("../../../assets/img/sample-person.jpg"),
          score: require("../../../icons/certified-fresh.svg"),
          content:
            "Like the Force, The Mandalorian is communicating to us what it thinks we need to know. It's holding back on the rest, but it seems like we'll all be better for it in the end.",
          date: "November 26, 2019"
        },
        {
          name: "Paul M. Bradshaw",
          workingNews: "USA Today",
          imageSrc: require("../../../assets/img/sample-person.jpg"),
          score: require("../../../icons/certified-fresh.svg"),
          content:
            "Like the Force, The Mandalorian is communicating to us what it thinks we need to know. It's holding back on the rest, but it seems like we'll all be better for it in the end.",
          date: "November 26, 2019"
        },
        {
          name: "Paul M. Bradshaw",
          workingNews: "USA Today",
          imageSrc: require("../../../assets/img/sample-person.jpg"),
          score: require("../../../icons/certified-fresh.svg"),
          content:
            "Like the Force, The Mandalorian is communicating to us what it thinks we need to know. It's holding back on the rest, but it seems like we'll all be better for it in the end.",
          date: "November 26, 2019"
        },
        {
          name: "Paul M. Bradshaw",
          workingNews: "USA Today",
          imageSrc: require("../../../assets/img/sample-person.jpg"),
          score: require("../../../icons/certified-fresh.svg"),
          content:
            "Like the Force, The Mandalorian is communicating to us what it thinks we need to know. It's holding back on the rest, but it seems like we'll all be better for it in the end.",
          date: "November 26, 2019"
        },
        {
          name: "Paul M. Bradshaw",
          workingNews: "USA Today",
          imageSrc: require("../../../assets/img/sample-person.jpg"),
          score: require("../../../icons/certified-fresh.svg"),
          content:
            "Like the Force, The Mandalorian is communicating to us what it thinks we need to know. It's holding back on the rest, but it seems like we'll all be better for it in the end.",
          date: "November 26, 2019"
        },
        {
          name: "Paul M. Bradshaw",
          workingNews: "USA Today",
          imageSrc: require("../../../assets/img/sample-person.jpg"),
          score: require("../../../icons/certified-fresh.svg"),
          content:
            "Like the Force, The Mandalorian is communicating to us what it thinks we need to know. It's holding back on the rest, but it seems like we'll all be better for it in the end.",
          date: "November 26, 2019"
        }
      ],
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
      sortBy: { text: "none", value: null },
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      filterOn: ["name", "date", "content"]
    };
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
