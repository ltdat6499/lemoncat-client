<template>
  <div
    style="padding:10px;display:flex;justify-content:center;flex-direction: column;"
  >
    <div
      style="display:block;margin-bottom:15px;width:100%;margin-right:10%;padding:4px;margin-top:20px"
    >
      <div style="display: flex;align-items:center;">
        <span
          style="border-left: 3px solid #24BA3A;padding-left:5px;text-align: left;font-size:16px;"
        >
          <strong><slot name="header"></slot></strong>
        </span>
        <b-link
          style="text-align: left;margin-left:auto;font-size:13px;color:#398BEB;text-decoration: none;"
        >
          <strong>VIEW ALL</strong>
        </b-link>
      </div>
    </div>
    <div style="margin:0px 20px;margin-bottom:40px">
      <b-row>
        <b-col>
          <v-list>
            <div style="display:flex">
              <div>
                <v-icon>mdi-circle-small</v-icon>
              </div>

              <div>
                <div
                  ><b-link
                    style="text-decoration:none;color:#000000"
                    href="/m/list/netflix"
                    >The 100 Best Movies on Netflix Right Now</b-link
                  ></div
                >
              </div>
            </div>
            <div style="display:flex">
              <div>
                <v-icon>mdi-circle-small</v-icon>
              </div>

              <div>
                <div
                  ><b-link
                    style="text-decoration:none;color:#000000"
                    href="/m/list/amazon_prime_video_us"
                    >The 100 Best Movies on Amazon Prime Right Now</b-link
                  ></div
                >
              </div>
            </div>
            <div style="display:flex">
              <div>
                <v-icon>mdi-circle-small</v-icon>
              </div>

              <div>
                <div
                  ><b-link
                    style="text-decoration:none;color:#000000"
                    href="/m/list/disney"
                    >The 100 Best Movies on Disney+ Right Now</b-link
                  ></div
                >
              </div>
            </div>
          </v-list>
        </b-col>
        <b-col>
          <v-list>
            <div style="display:flex">
              <div>
                <v-icon>mdi-circle-small</v-icon>
              </div>

              <div>
                <div
                  ><b-link
                    style="text-decoration:none;color:#000000"
                    href="/m/list/hulu"
                    >The 100 Best Movies on Hulu Right Now</b-link
                  ></div
                >
              </div>
            </div>
            <div style="display:flex">
              <div>
                <v-icon>mdi-circle-small</v-icon>
              </div>

              <div>
                <div
                  ><b-link
                    style="text-decoration:none;color:#000000"
                    href="/m/list/hbo_max"
                    >The 100 Best Movies on HBO MAX Right Now</b-link
                  ></div
                >
              </div>
            </div>
            <div style="display:flex">
              <div>
                <v-icon>mdi-circle-small</v-icon>
              </div>

              <div>
                <div
                  ><b-link
                    style="text-decoration:none;color:#000000"
                    href="/m/list/itunes"
                    >The 100 Best Movies on Paramount Right Now</b-link
                  ></div
                >
              </div>
            </div>
          </v-list>
        </b-col>
        <b-col>
          <v-list>
            <div style="display:flex">
              <div>
                <v-icon>mdi-circle-small</v-icon>
              </div>

              <div>
                <div
                  ><b-link
                    style="text-decoration:none;color:#000000"
                    href="/top/all/sci-fi"
                    >The 100 Best Sci-fi Movies Right Now</b-link
                  ></div
                >
              </div>
            </div>
            <div style="display:flex">
              <div>
                <v-icon>mdi-circle-small</v-icon>
              </div>

              <div>
                <div
                  ><b-link
                    style="text-decoration:none;color:#000000"
                    href="/top/all/horror"
                    >The 100 Best Horror Movies Right Now</b-link
                  ></div
                >
              </div>
            </div>
            <div style="display:flex">
              <div>
                <v-icon>mdi-circle-small</v-icon>
              </div>

              <div>
                <div
                  ><b-link
                    style="text-decoration:none;color:#000000"
                    href="/top/all/anime"
                    >The 100 Best Anime Movies Right Now</b-link
                  ></div
                >
              </div>
            </div>
          </v-list>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<style scoped>
.b-text {
  color: #2a2c3e;
}
img {
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  border-radius: 4px;
  width: 100%;
  height: 150px;
}
</style>
