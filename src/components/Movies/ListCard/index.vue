<template>
  <div>
    <b-link
      style="text-decoration:none;display:flex;align-items: center;flex-wrap: wrap;width:100%;margin-left: auto;margin-left: auto;"
      :href="thisUrl"
    >
      <b-row>
        <b-col cols="2"
          ><img
            src="../../../assets/img/sample-poster.png"
            style="height:190px;width:130px;border-radius:4px;float:left"
        /></b-col>
        <b-col
          ><div
            style="display: flex;flex-direction: column;flex-wrap: wrap;width:100%"
          >
            <h5 style="margin-top:5px;color:black;margin-right:auto;float:left">
              <strong>{{ thisName }}</strong>
            </h5>
            <span style="color:black;margin-right:auto;float:left"
              ><img
                src="../../../icons/certified-fresh.svg"
                style="height:20px;width:20px"
              />
              100%</span
            >
            <span style="margin-right:auto;float:left"
              >Edison Florez, Cielo Munoz</span
            >
            <span style="margin-right:auto;float:left;color:gray">Summary</span>
            <span style="text-align:justify;margin-right:auto;float:left"
              >The violence of civil war has been a fact of life in Colombia for
              so long that a generation has grown up there never knowing peace,
              and three members of a street gang-turned-paramilitary force are
              profiled in this documentary, shot during the space of a year in
              Le Sierra, a ghetto community in the Colombia</span
            >
            <span style="margin-right:auto;float:left;color:gray">NR, 1 hr 35 min</span>
            <span style="margin-right:auto;float:left;color:gray">Available Feb 20</span>
          </div></b-col
        >
      </b-row>
    </b-link>
  </div>
</template>
<script>
export default {
  props: {
    url: {
      type: String,
      default: "#"
    },
    src: {
      type: String,
      default: "../../assets/img/sample-poster.png"
    },
    name: {
      type: String,
      default: "Harry Potter and The Sorcerer's Stone"
    }
  },
  computed: {
    thisUrl() {
      return this.url;
    },
    thisSrc() {
      return this.src;
    },
    thisName() {
      return this.name;
    }
  }
};
</script>
