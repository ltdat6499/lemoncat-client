// apollo.config.js
module.exports = {
  client: {
    service: {
      name: "lemoncat-client",
      // URL to the GraphQL API
      url: "http://localhost:3841/admin-graphql"
    },
    // Files processed by the extension
    includes: ["src/**/*.vue", "src/**/*.js"]
  }
};
