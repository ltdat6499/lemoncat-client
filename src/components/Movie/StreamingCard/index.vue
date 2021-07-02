<template>
  <v-card
    elevation="5"
    style="border-radius:10px;width:230px;height:70px;padding: 16px;display:flex;justify-content:space-between;align-items: center;"
  >
    <img
      :src="thisName"
      style="max-width:80px;max-height:40px"
    />
    <strong>Rent/buy</strong>
  </v-card>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "DATE"
    }
  },
  computed: {
    thisName() {
      switch (this.name) {
        case "fandango-now":
          return require("../../../assets/streaming/Fandango.png");
        case "vudu":
          return require("../../../assets/streaming/vudu.png");
        case "amazon-prime-video-us":
          return require("../../../assets/streaming/Prime.png");
        case "apple-tv-plus-us":
          return require("../../../assets/streaming/Apple.png");
        case "peacock":
          return require("../../../assets/streaming/Peacock.png");
        case "hbo-max":
          return require("../../../assets/streaming/Hbo.png");
        case "netflix":
          return require("../../../assets/streaming/Netflix.png");
        case "hbo-now":
          return require("../../../assets/streaming/hbo-now.png");
        case "hulu":
          return require("../../../assets/streaming/Hulu.png");
        case "disney-plus-us":
          return require("../../../assets/streaming/Disney.svg");
        case "itunes":
          return require("../../../assets/streaming/Paramount.svg");
        default:
          return require("../../../assets/streaming/Netflix.png");
      }
    }
  }
};
</script>
