<template>
  <div>
    <v-btn color="success">Success</v-btn>
    <v-btn color="error">Error</v-btn>
    <v-btn color="warning">Warning</v-btn>
    <v-btn color="info">Info</v-btn>
  </div>
</template>

<script>
import getAllUsers from "@/apollo/queries/getAllUsers.gql";
export default {
  name: "Home",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  apollo: {
    users: {
      query: getAllUsers,
      result(res) {
        this.msg = res;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
