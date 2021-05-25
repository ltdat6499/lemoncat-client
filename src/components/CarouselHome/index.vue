<template>
  <v-carousel
    :dark="false"
    cycle
    interval="2000"
    height="300"
    hide-delimiter-background
  >
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet
        style="display:flex;justify-content:center;align-items: center;"
        height="100%"
        tile
      >
        <v-row
          style="z-index:999;position: absolute;display:flex;align-items: flex-end;width:100%"
          class="fill-height"
        >
          <div
            style="overflow: hidden;display:block;border-left: 5px solid #24BA3A;margin-bottom:45px;background-color:black;width:100%;height:30%;margin-left:10%;margin-right:10%;background-color: rgba(0,0,0,.5);color:white;padding:10px"
          >
            <div
              style="display: flex;justify-content:flex-start;align-items: flex-start;flex-direction:column;"
            >
              <h5 style="text-align: left;">
                John Krasinski, Emily Blunt Tap Into 'Primal Instincts' For Quiet Place
              </h5>
              <p>
                Plus, Krasinski reveals how he kept up terror in anticipated
                sequel
              </p>
            </div>
          </div>
        </v-row>
        <v-img
          :lazy-src="require('../../assets/img/sample-news.jpg')"
          :src="require('../../assets/img/sample-news.jpg')"
          height="100%"
          width="100%"
        ></v-img>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4"
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"]
    };
  }
};
</script>
<style>
.v-carousel__controls {
  opacity: 1 !important;
  background: transparent !important;
  background-color: transparent !important;
}
</style>
