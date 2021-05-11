<template>
  <div>{{ msg }}</div>
</template>

<script>
import getAllUsers from "@/apollo/queries/getAllUsers.gql";
export default {
  name: "HelloWorld",
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
        console.log('🚀 ---------------------')
        console.log('🚀 ~ result ~ res', res)
        console.log('🚀 ---------------------')
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
