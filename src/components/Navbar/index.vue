<template>
  <b-navbar
    toggleable="lg"
    type="dark"
    variant="#48CF73"
    style="display: flex;align-items: center;background-color:rgb(37 186 57)"
  >
    <b-link href="/" style="width:192px;height:34px;margin-right:20px">
      <img style="width:100%" src="../../icons/home-logo.png" />
    </b-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav
        style="display:flex;flex-direction: column;align-items: center;"
      >
        <b-input-group style="display:flex;">
          <b-form-input
            style="border:none; min-width:260px"
            placeholder="Search movies, TV, actors, more..."
            v-model="searchString"
          ></b-form-input>
          <b-button style="background-color:white; border:none; color:black;"
            ><i class="fa fa-search"></i
          ></b-button>
        </b-input-group>
        <div
          v-if="searchString.length"
          style="margin-left:418px;background-color:white;width:120%;position: absolute;z-index:9999;margin-top:40px;border-radius:7px;padding: 25px;display:flex;flex-direction: column;"
        >
          <div style="display: flex;justify-content: space-around;">
            <div
              v-if="!searchLoading"
              style="display:flex;flex-direction: column;"
            >
              <div
                style="display:flex;align-items: center;font-size:17px;color:black;font-weight: bold;margin-top:10px;margin-bottom:10px"
              >
                <span
                  style="font-size:20px;color:green;font-weight: bold;margin-right:5px"
                  >|</span
                >
                <span style="align-self:flex-start;display:flex;margin-top:4px"
                  >MOVIES / TV
                </span>
              </div>
              <span v-for="item of searchResult.flims" :key="item._id">
                <search-result-card-movie
                  :slug="item._source.slug"
                  :src="item._source.poster"
                  :name="item._source.name"
                  :summary="item._source.summary"
                  :score="item._source.lemonScore"
                  :year="item._source.theatersDate"
                  style="margin-bottom:10px"
                />
              </span>
            </div>

            <div style="border-left: 1px solid gray;height: auto;"></div>

            <div
              v-if="!searchLoading"
              style="display:flex;flex-direction: column;"
            >
              <div
                style="display:flex;align-items: center;font-size:17px;color:black;font-weight: bold;margin-top:10px;margin-bottom:10px"
              >
                <span
                  style="font-size:20px;color:green;font-weight: bold;margin-right:5px"
                  >|</span
                >
                <span style="align-self:flex-start;display:flex;margin-top:4px"
                  >PERSONS
                </span>
              </div>
              <span v-for="item of searchResult.persons" :key="item._id">
                <search-result-card-person
                  :slug="item._source.slug"
                  :src="item._source.images"
                  :name="item._source.name"
                  :summary="item._source.summary"
                  style="margin-bottom:10px"
                />
              </span>
            </div>

            <div style="border-left: 1px solid gray;height: auto;"></div>

            <div
              v-if="!searchLoading"
              style="display:flex;flex-direction: column;"
            >
              <div
                style="display:flex;align-items: center;font-size:17px;color:black;font-weight: bold;margin-top:10px;margin-bottom:10px"
              >
                <span
                  style="font-size:20px;color:green;font-weight: bold;margin-right:5px"
                  >|</span
                >
                <span style="align-self:flex-start;display:flex;margin-top:4px"
                  >NEWS
                </span>
              </div>
              <span v-for="item of searchResult.news" :key="item._id">
                <search-result-card-news
                  :slug="item._source.slug"
                  :title="item._source.title"
                  :content="item._source.content"
                  :poster="item._source.poster"
                  style="margin-bottom:10px"
                />
              </span>
            </div>
          </div>
          <b-button
            style="display: block;width: 100%;margin-top:10px"
            variant="success"
            >VIEW ALL RESULTS</b-button
          >
        </div>
      </b-navbar-nav>
      <b-navbar-nav class="navbar-row-item">
        <menu-movies />
        <menu-t-v-shows />
        <no-menu :name="'LC PODCAST'" />
        <news />
        <no-menu :name="'SHOWTIMES'" />
        <no-menu v-if="!isLogin" :name="'LOGIN'" :href="'/login'" />
        <avata-login v-else />
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import axios from "axios";
import AvataLogin from "../AvataLogin";
import MenuMovies from "../MegaMenu/Movies";
import MenuTVShows from "../MegaMenu/TVShows";
import News from "../MegaMenu/News";
import NoMenu from "../MegaMenu";
import SearchResultCardMovie from "../SearchResultCardMovie";
import SearchResultCardPerson from "../SearchResultCardPerson";
import SearchResultCardNews from "../SearchResultCardNews";

export default {
  name: "App",
  components: {
    MenuMovies,
    MenuTVShows,
    NoMenu,
    News,
    AvataLogin,
    SearchResultCardMovie,
    SearchResultCardPerson,
    SearchResultCardNews
  },
  data() {
    return {
      searchResult: {},
      searchLoading: false,
      searchString: "",
      isLogin: !!this.$cookies.get("token")
    };
  },
  watch: {
    async searchString(value) {
      this.searchLoading = true;
      let data = await axios({
        method: "post",
        url: "http://127.0.0.1:3843/all/search",
        data: {
          keywords: value,
          size: 5
        }
      });
      data = data.data || {};
      console.log(data.person);
      this.searchResult = {
        flims: data.flim || [],
        persons: data.person || [],
        news: data.post || []
      };
      this.searchLoading = false;
    }
  }
};
</script>
<style scoped>
.navbar-row-item {
  display: flex;
  align-items: center;
  margin-left: 25px;
}
</style>
