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
      <b-navbar-nav style="display:flex;align-items: center;">
        <b-input-group style="display:flex;">
          <b-form-input
            style="border:none; min-width:260px"
            placeholder="Search movies, TV, actors, more..."
          ></b-form-input>
          <b-button style="background-color:white; border:none; color:black;"
            ><i class="fa fa-search"></i
          ></b-button>
        </b-input-group>
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
export default {
  name: "App",
  components: {
    MenuMovies,
    MenuTVShows,
    NoMenu,
    News,
    AvataLogin
  },
  data() {
    return {
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
