<template>
  <div>
    <loading v-if="isLoading"></loading>
    <div v-else>
      <!-- HEADER -->
      <navbar
        style="z-index: 9999"
        id="myHeader"
        class="navbar container"
      ></navbar>
      <v-card
        tile
        outlined
        elevation="0"
        class="container body-container row-style"
        style="display: block"
      >
        <div
          style="
          padding-top: 4px;
          display: flex;
          align-items: center;
          z-index: 1000;
          max-height: 20px;
          position: absolute;
          height: 20px;
          width: 100%;
          background-color: black;
          opacity: 0.6;
          color: white;
        "
        >
          <span style="color: #f6dc24; margin-left: 10px"
            ><strong>TRENDING ON LC</strong></span
          >
          <b-link class="trending-link" style="margin-left: 10px"
            >Eternals Trailer
          </b-link>
          <b-link class="trending-link" style="margin-left: 10px"
            >Disney Animation Showdown
          </b-link>

          <b-link class="trending-link" style="margin-left: 10px"
            >TV Premiere Dates
          </b-link>
          <b-link class="trending-link" style="margin-left: 10px"
            >The Lemoncat Channel
          </b-link>
          <b-link
            style="text-decoration: none; margin-left: auto; margin-right: 10px"
          >
            <v-icon dense small style="color: white"> mdi-facebook </v-icon>
          </b-link>
          <b-link
            style="text-decoration: none; margin-left: 10px; margin-right: 10px"
          >
            <v-icon dense small style="color: white"> mdi-snapchat </v-icon>
          </b-link>
          <b-link
            style="text-decoration: none; margin-left: 10px; margin-right: 10px"
          >
            <v-icon dense small style="color: white"> mdi-instagram </v-icon>
          </b-link>
          <b-link
            style="text-decoration: none; margin-left: 10px; margin-right: 10px"
          >
            <v-icon dense small style="color: white"> mdi-twitter </v-icon>
          </b-link>
          <b-link
            style="text-decoration: none; margin-left: 10px; margin-right: 10px"
          >
            <v-icon dense small style="color: white"> mdi-youtube </v-icon>
          </b-link>
        </div>
      </v-card>
      <!-- BODY -->
      <v-card
        tile
        outlined
        elevation="0"
        class="container body-container row-style"
      >
        <div style="display: flex; flex-direction: column">
          <div
            style="
            padding-top: 50px;
            padding-left: 20px;
            float: left;
            display: flex;
            flex-direction: column;
            width: 100%;
          "
          >
            <h3 style="float: left; margin-right: auto">TOP MOVIES</h3>
            <span style="float: left; margin-right: auto; color: gray"
              >All lists are sorted by Adjusted Score
              <v-icon id="popover-target-1" small
                >mdi-help-circle-outline</v-icon
              ></span
            >
            <b-popover
              target="popover-target-1"
              triggers="hover"
              placement="right"
            >
              Each critic from our discrete list gets one vote, weighted
              equally. A movie must have 40 or more rated reviews to be
              considered. The 'Adjusted Score' comes from a weighted formula
              (Bayesian) that we use that accounts for variation in the number
              of reviews per movie.
            </b-popover>
          </div>
          <div>
            <b-row>
              <b-col cols="4" style="padding: 20px">
                <div>
                  <h3><strong>BEST MOVIES OF 2021</strong></h3>
                  <row
                    v-for="item of flims.year1"
                    :key="item.slug"
                    :slug="item.slug"
                    :name="item.info.name"
                    :score="item.lemonScore"
                  ></row>
                  <b-link
                    style="text-decoration: none; float: left; margin-top: 5px"
                  >
                    View All
                  </b-link>
                </div>
                <br />
                <br />
                <div>
                  <h3><strong>BEST MOVIES OF 2020</strong></h3>
                  <row
                    v-for="item of flims.year2"
                    :key="item.slug"
                    :slug="item.slug"
                    :name="item.info.name"
                    :score="item.lemonScore"
                  ></row>
                  <b-link
                    style="text-decoration: none; float: left; margin-top: 5px"
                  >
                    View All
                  </b-link>
                </div>
                <br />
                <br />
                <div>
                  <h3><strong>BEST MOVIES OF 2019</strong></h3>
                  <row
                    v-for="item of flims.year3"
                    :key="item.slug"
                    :slug="item.slug"
                    :name="item.info.name"
                    :score="item.lemonScore"
                  ></row>
                  <b-link
                    style="text-decoration: none; float: left; margin-top: 5px"
                  >
                    View All
                  </b-link>
                </div>
                <br />
                <br />
                <div>
                  <h3><strong>BEST MOVIES OF 2018</strong></h3>
                  <row
                    v-for="item of flims.year4"
                    :key="item.slug"
                    :slug="item.slug"
                    :name="item.info.name"
                    :score="item.lemonScore"
                  ></row>
                  <b-link
                    style="text-decoration: none; float: left; margin-top: 5px"
                  >
                    View All
                  </b-link>
                </div>
                <br />
                <br />
                <div>
                  <h3><strong>BEST MOVIES OF 2017</strong></h3>
                  <row
                    v-for="item of flims.year5"
                    :key="item.slug"
                    :slug="item.slug"
                    :name="item.info.name"
                    :score="item.lemonScore"
                  ></row>
                  <b-link
                    style="text-decoration: none; float: left; margin-top: 5px"
                  >
                    View All
                  </b-link>
                </div>
                <br />
                <br />
                <div>
                  <h3><strong>TODAY'S TOP RATED MOVIES</strong></h3>
                  <span style="color: gray">CERTIFIED FRESH IN THEATERS</span>
                  <row
                    v-for="item of flims.topToday"
                    :key="item.slug"
                    :slug="item.slug"
                    :name="item.info.name"
                    :score="item.lemonScore"
                  ></row>
                  <b-link
                    style="text-decoration: none; float: left; margin-top: 5px"
                  >
                    View All
                  </b-link>
                  <br />
                  <br />
                  <span style="color: gray">TOP 10 DVD RELEASES</span>
                  <row
                    v-for="item of flims.topStreaming"
                    :key="item.slug"
                    :slug="item.slug"
                    :name="item.info.name"
                    :score="item.lemonScore"
                  ></row>
                  <b-link
                    style="text-decoration: none; float: left; margin-top: 5px"
                  >
                    View All
                  </b-link>
                </div>
              </b-col>
              <b-col cols="4" style="padding: 20px">
                <div style="display: flex; flex-direction: column; width: 100%">
                  <h3><strong>TOP 100 BY GENRE</strong></h3>
                  <div style="width: 100%">
                    <b-link
                      style="
                      text-decoration: none;
                      color: black;
                      float: left;
                      margin-right: auto;
                    "
                      >Top 100 Action & Adventure Movies</b-link
                    >
                  </div>
                  <hr />
                  <div style="width: 100%">
                    <b-link
                      style="
                      text-decoration: none;
                      color: black;
                      float: left;
                      margin-right: auto;
                    "
                      >Top 100 Animation Movies</b-link
                    >
                  </div>
                  <hr />
                  <div style="width: 100%">
                    <b-link
                      style="
                      text-decoration: none;
                      color: black;
                      float: left;
                      margin-right: auto;
                    "
                      >Top 100 Art House & International Movies</b-link
                    >
                  </div>
                  <hr />
                  <div style="width: 100%">
                    <b-link
                      style="
                      text-decoration: none;
                      color: black;
                      float: left;
                      margin-right: auto;
                    "
                      >Top 100 Classics Movies</b-link
                    >
                  </div>
                  <hr />
                  <div style="width: 100%">
                    <b-link
                      style="
                      text-decoration: none;
                      color: black;
                      float: left;
                      margin-right: auto;
                    "
                      >Top 100 Comedy Movies</b-link
                    >
                  </div>
                  <hr />
                  <div style="width: 100%">
                    <b-link
                      style="
                      text-decoration: none;
                      color: black;
                      float: left;
                      margin-right: auto;
                    "
                      >Top 100 Documentary Movies</b-link
                    >
                  </div>
                  <hr />
                  <div style="width: 100%">
                    <b-link
                      style="
                      text-decoration: none;
                      color: black;
                      float: left;
                      margin-right: auto;
                    "
                      >Top 100 Drama Movies</b-link
                    >
                  </div>
                  <hr />
                  <div style="width: 100%">
                    <b-link
                      style="
                      text-decoration: none;
                      color: black;
                      float: left;
                      margin-right: auto;
                    "
                      >Top 100 Horror Movies</b-link
                    >
                  </div>
                  <hr />
                  <div style="width: 100%">
                    <b-link
                      style="
                      text-decoration: none;
                      color: black;
                      float: left;
                      margin-right: auto;
                    "
                      >Top 100 Kids & Family Movies</b-link
                    >
                  </div>
                  <hr />
                  <div style="width: 100%">
                    <b-link
                      style="
                      text-decoration: none;
                      color: black;
                      float: left;
                      margin-right: auto;
                    "
                      >Top 100 Musical & Performing Arts Movies</b-link
                    >
                  </div>
                  <hr />
                  <div style="width: 100%">
                    <b-link
                      style="
                      text-decoration: none;
                      color: black;
                      float: left;
                      margin-right: auto;
                    "
                      >Top 100 Mystery & Suspense Movies</b-link
                    >
                  </div>
                  <hr />
                  <div style="width: 100%">
                    <b-link
                      style="
                      text-decoration: none;
                      color: black;
                      float: left;
                      margin-right: auto;
                    "
                      >Top 100 Romance Movies</b-link
                    >
                  </div>
                  <hr />
                  <div style="width: 100%">
                    <b-link
                      style="
                      text-decoration: none;
                      color: black;
                      float: left;
                      margin-right: auto;
                    "
                      >Top 100 Science Fiction & Fantasy Movies</b-link
                    >
                  </div>
                  <hr />
                  <div style="width: 100%">
                    <b-link
                      style="
                      text-decoration: none;
                      color: black;
                      float: left;
                      margin-right: auto;
                    "
                      >Top 100 Special Interest Movies</b-link
                    >
                  </div>
                  <hr />
                  <div style="width: 100%">
                    <b-link
                      style="
                      text-decoration: none;
                      color: black;
                      float: left;
                      margin-right: auto;
                    "
                      >Top 100 Sports & Fitness Movies</b-link
                    >
                  </div>
                  <hr />
                  <div style="width: 100%">
                    <b-link
                      style="
                      text-decoration: none;
                      color: black;
                      float: left;
                      margin-right: auto;
                    "
                      >Top 100 Television Movies</b-link
                    >
                  </div>
                  <hr />
                  <div style="width: 100%">
                    <b-link
                      style="
                      text-decoration: none;
                      color: black;
                      float: left;
                      margin-right: auto;
                    "
                      >Top 100 Western Movies</b-link
                    >
                  </div>
                </div>
                <br />
                <!-- YEAR -->
                <div style="display: flex; flex-direction: column; width: 100%">
                  <h3><strong>BEST MOVIES BY YEAR</strong></h3>
                  <div
                    v-for="item of flims.topByYear.reverse().splice(0, 20)"
                    :key="item.slug"
                    style="width: 100%; margin-bottom: 10px"
                  >
                    <b-link
                      :href="'/m/' + item.slug"
                      style="
                      text-decoration: none;
                      color: black;
                      float: left;
                      margin-right: auto;
                    "
                      ><strong style="margin-right: 10px">{{
                        item.createdAt.split("-")[0]
                      }}</strong
                      ><span>{{ item.info.name }}</span></b-link
                    >
                  </div>
                  <div style="width: 100%; margin-bottom: 10px">
                    <div
                      style="
                      float: left;
                      margin-right: auto;
                      display: flex;
                      flex-wrap: wrap;
                    "
                    >
                      <b-link
                        v-for="item of flims.topByYear"
                        :key="item.slug"
                        :href="'/m/' + item.slug"
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">{{
                          item.createdAt.split("-")[0]
                        }}</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                    </div>
                  </div>
                </div>
              </b-col>
              <b-col cols="4" style="padding: 20px">
                <div style="display: flex; flex-direction: column; width: 100%">
                  <h3><strong>BEST MOVIES BY YEAR</strong></h3>
                  <p style="text-align: left">
                    We list the Top 100 movies ever based on their Lemoncater
                    Score.
                  </p>
                  <div
                    v-for="item of flims.topForever"
                    :key="item.slug"
                    style="width: 100%; margin-bottom: 10px"
                  >
                    <b-link
                      :href="'/m/' + item.slug"
                      style="
                      text-decoration: none;
                      color: black;
                      float: left;
                      margin-right: auto;
                      text-align: left
                    "
                      ><span style="margin-right: 10px"
                        >{{ item.createdAt.split("-")[0] }}.</span
                      ><span style="">{{ item.info.name }}</span></b-link
                    >
                  </div>
                  <div style="width: 100%">
                    <b-link style="text-decoration: none; float: left">
                      View All
                    </b-link>
                  </div>
                </div>
                <br />
                <div style="display: flex; flex-direction: column; width: 100%">
                  <h3><strong>MOVIE AWARD WINNERS</strong></h3>
                  <h5><strong>GOLDEN LEMON AWARDS</strong></h5>
                  <p style="text-align: justify">
                    Every year, Lemoncat presents its own awards for the
                    theatrical releases most loved and most reviled by the
                    critics.
                  </p>
                  <div style="width: 100%; margin-bottom: 10px">
                    <div
                      style="
                      float: left;
                      margin-right: auto;
                      display: flex;
                      flex-wrap: wrap;
                    "
                    >
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                    </div>
                  </div>
                  <hr />
                  <h5><strong>ACADEMY AWARDS (OSCARS)</strong></h5>
                  <p style="text-align: justify">
                    The grand-daddy of all movie awards - the winners for each
                    year and category located in one convenient place
                  </p>
                  <div style="width: 100%; margin-bottom: 10px">
                    <div
                      style="
                      float: left;
                      margin-right: auto;
                      display: flex;
                      flex-wrap: wrap;
                    "
                    >
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                    </div>
                  </div>
                  <hr />
                  <h5><strong>GOLDEN GLOBES</strong></h5>
                  <p style="text-align: justify">
                    The Hollywood Foreign Press Association select their annual
                    favorites. Best known as the award ceremony before the
                    Oscars.
                  </p>
                  <div style="width: 100%; margin-bottom: 10px">
                    <div
                      style="
                      float: left;
                      margin-right: auto;
                      display: flex;
                      flex-wrap: wrap;
                    "
                    >
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                      <b-link
                        style="
                        margin-right: 10px;
                        text-decoration: none;
                        color: black;
                      "
                        ><strong style="margin-right: 5px">2021</strong>
                        <span
                          style="border-left: 1px solid black; height: 16px"
                        ></span
                      ></b-link>
                    </div>
                  </div>
                </div>
              </b-col>
            </b-row>
          </div>
        </div>
      </v-card>
      <!-- FOOTER -->
      <v-card
        tile
        outlined
        elevation="0"
        class="container body-container row-style"
        style="display: block"
      >
        <page-footer />
      </v-card>
    </div>
  </div>
</template>

<script>
import getFlimsTop from "@/apollo/queries/getFlimsTop.gql";
import Navbar from "@/components/Navbar";
import PageFooter from "@/components/Footer";
import HeaderBar from "@/components/Movie/HeaderBar";
import NewsCard from "@/components/NewsCard";
import Row from "@/components/Top/Row";
import Loading from "@/components/Loading";
export default {
  components: {
    Navbar,
    PageFooter,
    HeaderBar,
    NewsCard,
    Row,
    Loading
  },
  data() {
    return {
      flims: {},
      isLoadding: true
    };
  },
  created() {
    document.title = "TOP MOVIES - LEMONCAT";
  },

  apollo: {
    flimByTopPreview: {
      query: getFlimsTop,
      result(result) {
        this.flims = result.data.flimByTopPreview;
        this.isLoadding = false;
      }
    }
  }
};
</script>
<style scoped>
.container {
  background-color: #48cf73;
}
.body-container {
  background-color: #ffffff !important;
}
.sticky {
  position: fixed;
  top: 0;
}
.row-style {
  padding: 0 !important;
}
.row {
  --bs-gutter-x: 0 !important;
}
.trending-link {
  text-decoration: none;
  color: white;
}
.trending-link:hover {
  text-decoration: none;
  color: #f6dc24;
}
.rating:hover {
  color: #4f86d9;
}
.shadow-box {
  -webkit-box-shadow: 1px 1px 17px 0px rgba(0, 0, 0, 0.38);
  box-shadow: 1px 1px 17px 0px rgba(0, 0, 0, 0.38);
}
.block {
  display: block;
  width: 100%;
  border: none;
  background-color: transparent;
  padding: 10px 28px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  color: gray;
}
.block:hover {
  display: block;
  width: 100%;
  border: none;
  background-color: transparent;
  padding: 10px 28px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  color: gray;
  background-color: #d1d1d1;
}
.react-icon {
  height: 38px;
  width: 38px;
  transition: all 0.1s ease-in-out;
}
.react-icon:hover {
  height: 41px;
  width: 41px;
  transform: scale(1.1);
}
.no-gutters {
  width: auto;
  margin-left: 10px;
}
.card {
  padding: 10px;
  border: none;
  max-width: 260px;
  margin: 10px;
}
</style>
