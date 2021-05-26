<template>
  <v-sheet
    style="display:flex;justify-content:center;align-items: center;border-left: 1px solid white;"
    height="100%"
    width="100%"
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
            <strong>John Krasinski</strong>
          </h5>
          <p>
            Plus, Krasinski reveals
          </p>
        </div>
      </div>
    </v-row>
    <v-img
      :lazy-src="require('../../assets/img/sample-poster.png')"
      :src="require('../../assets/img/sample-poster.png')"
      height="100%"
      width="100%"
      style="max-height:300px"
    ></v-img>
  </v-sheet>
</template>
