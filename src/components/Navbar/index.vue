<template>
  <b-navbar
    toggleable="lg"
    type="dark"
    variant="#48CF73"
    style="display: flex;align-items: center;"
  >
    <img
      style="max-width: 17%; margin-right:20px"
      src="../../icons/home-logo-white.png"
    />

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
            <div style="display:flex;flex-direction: column;">
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
              <search-result-card-movie style="margin-bottom:10px" />
              <search-result-card-movie style="margin-bottom:10px" />
              <search-result-card-movie style="margin-bottom:10px" />
              <search-result-card-movie style="margin-bottom:10px" />
              <search-result-card-movie style="margin-bottom:10px" />
            </div>

            <div style="border-left: 1px solid gray;height: auto;"></div>

            <div style="display:flex;flex-direction: column;">
              <div
                style="display:flex;align-items: center;font-size:17px;color:black;font-weight: bold;margin-top:10px;margin-bottom:10px"
              >
                <span
                  style="font-size:20px;color:green;font-weight: bold;margin-right:5px"
                  >|</span
                >
                <span style="align-self:flex-start;display:flex;margin-top:4px"
                  >ACTORS...
                </span>
              </div>
              <search-result-card-person style="margin-bottom:10px" />
              <search-result-card-person style="margin-bottom:10px" />
              <search-result-card-person style="margin-bottom:10px" />
              <search-result-card-person style="margin-bottom:10px" />
              <search-result-card-person style="margin-bottom:10px" />
            </div>

            <div style="border-left: 1px solid gray;height: auto;"></div>

            <div style="display:flex;flex-direction: column;">
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
              <search-result-card-news style="margin-bottom:10px" />
              <search-result-card-news style="margin-bottom:10px" />
              <search-result-card-news style="margin-bottom:10px" />
              <search-result-card-news style="margin-bottom:10px" />
              <search-result-card-news style="margin-bottom:10px" />
            </div>
          </div>
          <b-button
            style="display: block;width: 100%;margin-top:20px"
            variant="success"
            >VIEW ALL 1000+ RESULTS</b-button
          >
        </div>
      </b-navbar-nav>
      <b-navbar-nav class="navbar-row-item">
        <menu-movies />
        <menu-t-v-shows />
        <no-menu :name="'LC PODCAST'" />
        <news />
        <no-menu :name="'SHOWTIMES'" />
        <no-menu v-if="!isLogin" :name="'LOGIN'" />
        <avata-login v-else />
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
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
      searchString: "",
      isLogin: !!this.$cookies.get("token")
    };
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
