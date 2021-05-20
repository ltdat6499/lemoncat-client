<template>
  <b-navbar
    toggleable="lg"
    type="dark"
    variant="#48CF73"
    style="display: flex;align-items: center;"
  >
    <img
      style="max-width: 20%; margin-right:20px"
      src="../../icons/home-logo-white.png"
    />

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav style="display:flex;align-items: center;">
        <b-input-group style="display:flex;">
          <b-form-input
            style="border:none; min-width:300px"
            placeholder="Search movies, TV, actors, more..."
          ></b-form-input>
          <b-button style="background-color:white; border:none; color:black;"
            ><i class="fa fa-search"></i
          ></b-button>
        </b-input-group>
        <!-- <b-nav-item href="#">Link</b-nav-item> -->
      </b-navbar-nav>

      <!-- <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav> -->
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  }
};
</script>
<style scoped></style>
