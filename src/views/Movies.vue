<template>
  <div>
    <!-- HEADER -->
    <navbar
      style="z-index:9999"
      id="myHeader"
      class="navbar container"
    ></navbar>
    <v-card
      tile
      outlined
      elevation="0"
      class="container body-container row-style"
      style="display:block;"
    >
      <div
        style="padding-top:4px;display:flex;align-items:center;z-index:1000;max-height:20px;position:absolute;height:20px;width:100%;background-color:black;opacity:0.6;color:white"
      >
        <span style="color: #F6DC24;margin-left:10px"
          ><strong>TRENDING ON LC</strong></span
        >
        <b-link class="trending-link" style="margin-left:10px"
          >Eternals Trailer
        </b-link>
        <b-link class="trending-link" style="margin-left:10px"
          >Disney Animation Showdown
        </b-link>

        <b-link class="trending-link" style="margin-left:10px"
          >TV Premiere Dates
        </b-link>
        <b-link class="trending-link" style="margin-left:10px"
          >The Lemoncat Channel
        </b-link>
        <b-link
          style="text-decoration:none;margin-left: auto;margin-right:10px"
        >
          <v-icon dense small style="color:white;">
            mdi-facebook
          </v-icon>
        </b-link>
        <b-link
          style="text-decoration:none;margin-left: 10px;margin-right:10px"
        >
          <v-icon dense small style="color:white;">
            mdi-snapchat
          </v-icon>
        </b-link>
        <b-link
          style="text-decoration:none;margin-left: 10px;margin-right:10px"
        >
          <v-icon dense small style="color:white;">
            mdi-instagram
          </v-icon>
        </b-link>
        <b-link
          style="text-decoration:none;margin-left: 10px;margin-right:10px"
        >
          <v-icon dense small style="color:white;">
            mdi-twitter
          </v-icon>
        </b-link>
        <b-link
          style="text-decoration:none;margin-left: 10px;margin-right:10px"
        >
          <v-icon dense small style="color:white;">
            mdi-youtube
          </v-icon>
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
      <b-row style="padding-top:50px;padding:50px 10px 10px 10px">
        <b-col cols="3">
          <div
            style="display:flex;flex-direction: column;text-align:left;margin-left:10px"
          >
            <strong style="color:gray;margin-bottom:5px">IN THEATERS</strong>
            <b-link
              :class="{
                'tab-link-active': slug === 'opening_this_week',
                'tab-link': slug !== 'opening_this_week'
              }"
              @click="slug = 'opening_this_week'"
              ><strong>OPENING THIS WEEK</strong></b-link
            >
            <b-link
              :class="{
                'tab-link-active': slug === 'top_box_office',
                'tab-link': slug !== 'top_box_office'
              }"
              @click="slug = 'top_box_office'"
              ><strong>TOP BOX OFFICE</strong></b-link
            >
            <b-link
              :class="{
                'tab-link-active': slug === 'opening_soon',
                'tab-link': slug !== 'opening_soon'
              }"
              @click="slug = 'opening_soon'"
              ><strong>OPENING SOON</strong></b-link
            >
            <b-link
              :class="{
                'tab-link-active': slug === 'coming_soon',
                'tab-link': slug !== 'coming_soon'
              }"
              @click="slug = 'coming_soon'"
              ><strong>COMING SOON</strong></b-link
            >
            <b-link
              :class="{
                'tab-link-active': slug === 'weekend_earnings',
                'tab-link': slug !== 'weekend_earnings'
              }"
              @click="slug = 'weekend_earnings'"
              ><strong>WEEDKEND EARNINGS</strong></b-link
            >
            <b-link
              :class="{
                'tab-link-active': slug === 'certified_fresh',
                'tab-link': slug !== 'certified_fresh'
              }"
              @click="slug = 'certified_fresh'"
              ><strong>CERTIFIED FRESH MOVIES</strong></b-link
            >
          </div>
          <hr style="width: 90%;margin-left: auto;margin-right: auto;" />
          <div
            style="display:flex;flex-direction: column;text-align:left;margin-left:10px"
          >
            <strong style="color:gray;margin-bottom:5px"
              >DVD & STREAMING MOVIES</strong
            >
            <b-link
              :class="{
                'tab-link-active': slug === 'netflix',
                'tab-link': slug !== 'netflix'
              }"
              @click="slug = 'netflix'"
              ><strong>NETFLIX</strong></b-link
            >
            <b-link
              :class="{
                'tab-link-active': slug === 'amazon_prime_video_us',
                'tab-link': slug !== 'amazon_prime_video_us'
              }"
              @click="slug = 'amazon_prime_video_us'"
              ><strong>AMAZON PRIME VIDEO US</strong></b-link
            >
            <b-link
              :class="{
                'tab-link-active': slug === 'disney',
                'tab-link': slug !== 'disney'
              }"
              @click="slug = 'disney'"
              ><strong>DISNEY+</strong></b-link
            >
            <b-link
              :class="{
                'tab-link-active': slug === 'hbo_max',
                'tab-link': slug !== 'hbo_max'
              }"
              @click="slug = 'hbo_max'"
              ><strong>HBO MAX</strong></b-link
            >
            <b-link
              :class="{
                'tab-link-active': slug === 'hbo_now',
                'tab-link': slug !== 'hbo_now'
              }"
              @click="slug = 'hbo_now'"
              ><strong>HBO NOW</strong></b-link
            >
            <b-link
              :class="{
                'tab-link-active': slug === 'fandango_now',
                'tab-link': slug !== 'fandango_now'
              }"
              @click="slug = 'fandango_now'"
              ><strong>FANDANGO NOW</strong></b-link
            >
            <b-link
              :class="{
                'tab-link-active': slug === 'vudu',
                'tab-link': slug !== 'vudu'
              }"
              @click="slug = 'vudu'"
              ><strong>VUDU</strong></b-link
            >
            <b-link
              :class="{
                'tab-link-active': slug === 'apple_tv_plus_us',
                'tab-link': slug !== 'apple_tv_plus_us'
              }"
              @click="slug = 'apple_tv_plus_us'"
              ><strong>APPLE TV PLUS US</strong></b-link
            >
            <b-link
              :class="{
                'tab-link-active': slug === 'peacock',
                'tab-link': slug !== 'peacock'
              }"
              @click="slug = 'peacock'"
              ><strong>PEACOCK</strong></b-link
            >
            <b-link
              :class="{
                'tab-link-active': slug === 'hulu',
                'tab-link': slug !== 'hulu'
              }"
              @click="slug = 'hulu'"
              ><strong>HULU</strong></b-link
            >
            <b-link
              :class="{
                'tab-link-active': slug === 'itunes',
                'tab-link': slug !== 'itunes'
              }"
              @click="slug = 'itunes'"
              ><strong>PARAMOUNT</strong></b-link
            >
            <b-link
              :class="{
                'tab-link-active': slug === 'top_streamings',
                'tab-link': slug !== 'top_streamings'
              }"
              @click="slug = 'top_streamings'"
              ><strong>TOP DVD & STREAMING </strong></b-link
            >
          </div>
          <hr style="width: 90%;margin-left: auto;margin-right: auto;" />
          <div
            style="margin-bottom: 300px;display:flex;flex-direction: column;text-align:left;margin-left:10px"
          >
            <strong style="color:gray;margin-bottom:5px">TV</strong>
            <b-link class="tab-link"><strong>NEW TV TONIGHT </strong></b-link>
            <b-link class="tab-link"
              ><strong>MOST POPULAR TV ON LC </strong></b-link
            >
            <b-link class="tab-link"
              ><strong>CERTIFIED FRESH TV</strong></b-link
            >
          </div>
          <div
            style="padding: 20px;background-color: #F3F3F3;margin: 20px;border-radius:4px"
          >
            <img
              src="https://live.staticflickr.com/65535/51280469111_d17f4e62ea_o.png"
              style="width:50px; height:50px;margin-bottom:15px"
            />
            <br />
            <p style="text-align:justify">
              Movies and TV shows are Certified Fresh with a steady Lemoncater
              of 75% or higher after a set amount of reviews (80 for
              wide-release movies, 40 for limited-release movies, 20 for TV
              shows), including 5 reviews from Top Critics.
            </p>
            <b-link>What‘s the LEMONCATER?</b-link>
          </div>
        </b-col>
        <b-col cols="9" style="padding-left:10px">
          <header-bar>
            <span slot="header">ALL MOVIES</span>
          </header-bar>
          <!-- Filters -->
          <div
            style="border: 1px solid gray;border-radius: 4px;padding:10px;width:100%;display:flex;flex-wrap:wrap;align-items: center;"
          >
            <!-- Left -->
            <div style="float:left;">
              <!-- Search -->
              <b-input-group style="width:95%">
                <b-form-input
                  v-model="filter"
                  type="search"
                  placeholder="Type to Search"
                ></b-form-input>

                <b-button :disabled="!filter" @click="filter = ''"
                  >Clear</b-button
                >
              </b-input-group>
            </div>
            <!-- Filter Score -->
            <div
              @click="show.range = !show.range"
              style="float:left;color:gray;border: 1px solid #CED4DA;padding:4px;border-radius: 4px;cursor:pointer"
            >
              <img :src="valueIcon[0]" style="width:20px; height:20px" />
              <span>{{ value[0] }}%</span>
              <span> - </span>
              <img :src="valueIcon[1]" style="width:20px; height:20px" />
              <span>{{ value[1] }}% <v-icon>mdi-menu-down</v-icon></span>
            </div>
            <!-- Filter Genres -->
            <div
              @click="show.genre = !show.genre"
              style="margin-left:10px;float:left;color:gray;border: 1px solid #CED4DA;padding:4px;border-radius: 4px;cursor:pointer"
            >
              <span
                >Genres:
                <span style="color:black"
                  ><strong>{{
                    selected.length ? selected.length : "ALL"
                  }}</strong></span
                >
                <v-icon>mdi-menu-down</v-icon></span
              >
            </div>
            <!-- Options -->
            <div
              v-if="show.range"
              style="padding: 5px; border-radius: 4px; border: 1px solid gray; position: absolute; top: 151px; right: 404px; background-color: white;z-index:999"
            >
              <strong>LEMONCATER</strong>
              <div class="app-content">
                <vue-range-slider
                  style="width:200px"
                  v-model="value"
                  :min="min"
                  :max="max"
                  :enable-cross="enableCross"
                  :tooltip="false"
                ></vue-range-slider>
              </div>
              <v-checkbox
                v-model="showFreshOnly"
                color="success"
                value="success"
                hide-details
              >
                <template v-slot:label>
                  <img
                    src="https://live.staticflickr.com/65535/51280469111_d17f4e62ea_o.png"
                    style="width:20px;height:20px;"
                  /><span>Certified Fresh Only</span>
                </template>
              </v-checkbox>
            </div>
            <div
              v-if="show.genre"
              style="padding: 10px; border-radius: 4px; border: 1px solid gray; position: absolute; top: 151px; right: 171px; background-color: white;z-index:999"
            >
              <div v-for="item in genres" :key="item">
                <v-checkbox
                  v-model="selected"
                  color="success"
                  :value="item"
                  :label="item"
                  hide-details
                >
                </v-checkbox>
              </div>
            </div>
            <!-- Right -->
            <div
              @click="show.date = !show.date"
              style="float:right;margin-left:auto;color:gray;border: 1px solid #CED4DA;padding:4px;border-radius: 4px;cursor:pointer;width:193px"
            >
              <span
                >Sort by: <strong>{{ sort }}</strong>
                <v-icon>mdi-menu-down</v-icon></span
              >
            </div>
            <div
              v-if="show.date"
              style="border-radius: 4px; border: 1px solid gray; position: absolute; top: 151px; right: 10px; background-color: white; width: 193px;z-index:999"
            >
              <div @click="sort = 'Release Date'" class="sort-button">
                Release Date
              </div>
              <div @click="sort = 'Lemoncater'" class="sort-button">
                Lemoncater
              </div>
            </div>
          </div>
          <!-- View Mode -->
          <div style="display:flex;align-items: center;padding:10px;width:100%">
            <span>Showing 32 of 7462</span>
            <v-btn-toggle
              elevation="0"
              v-model="viewMode"
              style="float:right;margin-left:auto;margin-"
            >
              <v-btn color="success" style="color:white">
                <v-icon>mdi-view-grid</v-icon>
              </v-btn>

              <v-btn color="success" style="color:white">
                <v-icon>mdi-view-list</v-icon>
              </v-btn>
            </v-btn-toggle>
          </div>
          <hr style="width: 95%;margin-left: auto;margin-right: auto;" />

          <!-- CONTENT BODY -->
          <!-- Grid View -->
          <div
            v-if="viewMode === 'grid'"
            style="display:flex;padding:10px;flex-wrap: wrap;justify-content: space-between;margin-bottom:15px"
          >
            <grid-card style="margin-bottom:15px"></grid-card>
            <grid-card style="margin-bottom:15px"></grid-card>
            <grid-card style="margin-bottom:15px"></grid-card>
            <grid-card style="margin-bottom:15px"></grid-card>
            <grid-card style="margin-bottom:15px"></grid-card>
            <grid-card style="margin-bottom:15px"></grid-card>
            <grid-card style="margin-bottom:15px"></grid-card>
            <grid-card style="margin-bottom:15px"></grid-card>
            <grid-card style="margin-bottom:15px"></grid-card>
            <grid-card style="margin-bottom:15px"></grid-card>
            <grid-card style="margin-bottom:15px"></grid-card>
            <grid-card style="margin-bottom:15px"></grid-card>
            <grid-card style="margin-bottom:15px"></grid-card>
            <grid-card style="margin-bottom:15px"></grid-card>
            <grid-card style="margin-bottom:15px"></grid-card>
            <grid-card style="margin-bottom:15px"></grid-card>
            <grid-card style="margin-bottom:15px"></grid-card>
            <grid-card style="margin-bottom:15px"></grid-card>
            <grid-card style="margin-bottom:15px"></grid-card>
            <grid-card style="margin-bottom:15px"></grid-card>
          </div>
          <!-- List View -->
          <div
            style="display:flex;padding:10px;flex-wrap: wrap;justify-content: space-between;margin-bottom:15px"
          >
            <list-card style="margin-bottom:15px"></list-card>
            <list-card style="margin-bottom:15px"></list-card>
            <list-card style="margin-bottom:15px"></list-card>
            <list-card style="margin-bottom:15px"></list-card>
            <list-card style="margin-bottom:15px"></list-card>
            <list-card style="margin-bottom:15px"></list-card>
            <list-card style="margin-bottom:15px"></list-card>
            <list-card style="margin-bottom:15px"></list-card>
            <list-card style="margin-bottom:15px"></list-card>
            <list-card style="margin-bottom:15px"></list-card>
            <list-card style="margin-bottom:15px"></list-card>
            <list-card style="margin-bottom:15px"></list-card>
            <list-card style="margin-bottom:15px"></list-card>
            <list-card style="margin-bottom:15px"></list-card>
            <list-card style="margin-bottom:15px"></list-card>
            <list-card style="margin-bottom:15px"></list-card>
            <list-card style="margin-bottom:15px"></list-card>
            <list-card style="margin-bottom:15px"></list-card>
            <list-card style="margin-bottom:15px"></list-card>
            <list-card style="margin-bottom:15px"></list-card>
            <list-card style="margin-bottom:15px"></list-card>
            <list-card style="margin-bottom:15px"></list-card>
            <list-card style="margin-bottom:15px"></list-card>
            <list-card style="margin-bottom:15px"></list-card>
          </div>
          <b-pagination
            v-model="currentPage"
            align="center"
            :total-rows="rows"
            :per-page="perPage"
            first-number
            last-number
          ></b-pagination>
        </b-col>
      </b-row>
    </v-card>
    <!-- FOOTER -->
    <v-card
      tile
      outlined
      elevation="0"
      class="container body-container row-style"
      style="display:block;"
    >
      <page-footer />
    </v-card>
  </div>
</template>

<script>
import getFlimsByParams from "@/apollo/queries/getFlimsByParams.gql";
import "vue-range-component/dist/vue-range-slider.css";
import VueRangeSlider from "vue-range-component";
import Navbar from "@/components/Navbar";
import PageFooter from "@/components/Footer";
import HeaderBar from "@/components/Movie/HeaderBar";
import NewsCard from "@/components/NewsCard";
import GridCard from "@/components/Movies/GridCard";
import ListCard from "@/components/Movies/ListCard";

export default {
  name: "Home",
  components: {
    Navbar,
    PageFooter,
    HeaderBar,
    NewsCard,
    VueRangeSlider,
    GridCard,
    ListCard
  },
  data() {
    return {
      show: {
        range: false,
        genre: false,
        date: false
      },
      slug: "",
      currentPage: 1,
      rows: 32000,
      perPage: 20,
      viewMode: 0,
      showFreshOnly: false,
      sort: "Release Date",
      selected: [],
      genres: [
        "Sci-fi",
        "Mystery & Thriller",
        "Comedy",
        "Drama",
        "Horror",
        "Adventure",
        "Fantasy",
        "Action",
        "Documentary",
        "Kids & Family",
        "Biography",
        "Animation",
        "Crime",
        "War",
        "Romance",
        "Western",
        "Music",
        "Anime",
        "Unknown",
        "Musical",
        "History",
        "Sports & fitness",
        "Other",
        "Stand-up"
      ],
      status: false,
      value: [1, 99],
      filter: "",
      tagsString:
        "gameofthrones FirstLook werewolf Spectrum Originals DC Comics GLAAD CBS All Access laika anthology adaptation GIFs TNT hist Tarantino 007 TCM ghosts justice league 2016 El Rey zombie TCA Winter 2020 Super Bowl Amazon Studios series MCU Disney The Academy festival Endgame Film Festival Best and Worst NBC IFC Films parents Emmy Nominations stop motion jurassic park TV renewals Teen Turner Classic Movies criterion Toys BBC One finale Food Network popular documentary A24 IFC Trivia kids Pop stand-up comedy science fiction cats Holidays cancelled television book adaptation richard e. Grant child's play 2021 Disney Channel The CW Dark Horse Comics Crunchyroll directors superman Legendary Tumblr comiccon Television Critics Association binge worst movies facebook Paramount Network Action boxoffice mission: impossible Mary Poppins Returns Reality disaster NYCC cancelled APB Creative Arts Emmys spain social media Universal Calendar BAFTA E3 Premiere Dates Exclusive Video australia period drama composers The Arrangement hispanic SundanceTV children's TV medical drama 72 Emmy Awards Classic Film Fall TV San Diego Comic-Con indie singing competition cults unscripted FX rotten movies we love know your critic festivals worst christmas movies travel PlayStation award winner reviews DGA Comic Book video on demand WGN boxing Writers Guild of America Sneak Peek Set visit FOX strong female leads Box Office Avengers hollywood canceled TV shows MSNBC ITV The Walking Dead 20th Century Fox universal monsters a nightmare on elm street asian-american Awards Tour Discovery Channel women Fox News Logo Fantasy Watching Series E! YA toronto Baby Yoda Tubi 93rd Oscars Ghostbusters dramedy cancelled TV shows Tomatazos sequels Warner Bros. high school Oscars marvel cinematic universe Opinion diversity Rock japanese nfl Amazon Prime Video Spring TV kaiju The Witch war Countdown TV One Family zombies joker news tv talk aapi LGBT crime Lifetime Christmas movies Winners emmy awards live action revenge DC streaming service cancelled TV series 2019 Masterpiece dceu godzilla TBS mockumentary Academy Awards teaser Anna Paquin Hulu dogs Apple TV Red Carpet docudrama twilight police drama game show Valentine's Day Reality Competition Amazon Prime Animation blaxploitation pirates of the caribbean spy thriller talk show comedies TruTV Black History Month elevated horror Acorn TV movie historical drama vampires casting Television Academy video new star wars movies TCA Esquire Sci-Fi Crackle stoner serial killer 78th Annual Golden Globe Awards SXSW doctor who VICE Superheroes Cannes foreign 21st Century Fox YouTube adventure king kong golden globes Nickelodeon Schedule scary movies Photos Starz Certified Fresh based on movie heist movie comic thriller spanish language chucky Emmys Black Mirror Martial Arts new york Music crime drama james bond Heroines Columbia Pictures supernatural what to watch YouTube Red Disney Plus psychological thriller Trailer 4/20 Elton John GoT Cosplay See It Skip It ratings ESPN First Reviews Netflix Christmas movies TLC all-time Comedy obituary AMC Musical Ovation USA Network Comedy Central nbcuniversal sitcom Brie Larson Apple TV Plus critics renewed TV shows RT History VH1 PBS Biopics Nominations 2015 Funimation 2020 green book Adult Swim X-Men psycho Summer crime thriller MTV black politics latino robots rt archives Quiz Star Wars lord of the rings Character Guide Western mutant ABC Family President Star Trek Disney+ Disney Plus natural history french ViacomCBS Travel Channel Freeform Britbox BBC America Spike RT21 theme song indiana jones CNN OWN south america Holiday fresh superhero nature anime Women's History Month transformers Lucasfilm Nat Geo hidden camera Chernobyl classics versus blockbuster sequel Lifetime kong Peacock Marvel spanish discovery franchise cars Polls and Games Binge Guide streaming Hear Us Out dark Pacific Islander Podcast History Unbreakable Kimmy Schmidt Marathons documentaries cooking PaleyFest Rocketman spider-man Hallmark Christmas movies razzies die hard comics cartoon animated Pop TV Shudder FXX football canceled Mudbound Video Games Syfy true crime Apple TV+ witnail screen actors guild jamie lee curtis TIFF Pixar Sundance TV name the review sports Pride Month slashers Year in Review ABC Signature Drama 99% New York Comic Con YouTube Premium reboot American Society of Cinematographers spinoff DC Universe Fox Searchlight dc TCA 2017 Amazon OneApp italian golden globe awards Showtime DirecTV biography HBO docuseries Chilling Adventures of Sabrina Sundance Paramount Thanksgiving television concert best Walt Disney Pictures BET fast and furious Netflix 71st Emmy Awards remakes Winter TV CMT The Purge Pirates monster movies Extras movies venice TCA Awards scene in color deadpool National Geographic Mary Tyler Moore Pet Sematary 2017 HBO Max cops ID 2018 Disney streaming service Christmas sag awards scorecard political drama WarnerMedia Broadway Country 45 Election prank Captain marvel breaking bad dragons Grammys Marvel Television Shondaland miniseries Paramount Plus Sony Pictures blockbusters Sundance Now 24 frames romance Mindy Kaling FX on Hulu target Arrowverse BET Awards HBO Go Comics on TV quibi Lionsgate free movies Vudu Ellie Kemper Alien Stephen King Horror international USA VOD batman Superheroe Hallmark films technology screenings zero dark thirty ABC archives LGBTQ rotten satire halloween tv independent trailers Trophy Talk harry potter Epix rom-coms comic books saw Rocky cinemax The Walt Disney Company Song of Ice and Fire Infographic Marvel Studios halloween Mary poppins crossover A&E Cartoon Network BBC aliens Interview toy story Kids & Family CW Seed SDCC book Bravo Mystery Film Turner telelvision space Awards CBS TV Land romantic comedy Musicals Rom-Com"
    };
  },
  computed: {
    valueIcon() {
      const results = [];
      if (this.value[0] >= 80)
        results.push(
          "https://live.staticflickr.com/65535/51280469111_d17f4e62ea_o.png"
        );
      else if (this.value[0] >= 60 && this.value[0] < 80)
        results.push(
          "https://live.staticflickr.com/65535/51280643468_b13c69ff22_o.png"
        );
      else
        results.push(
          "https://live.staticflickr.com/65535/51278099823_29be28c9b3_o.png"
        );

      if (this.value[1] >= 80)
        results.push(
          "https://live.staticflickr.com/65535/51280469111_d17f4e62ea_o.png"
        );
      else if (this.value[1] >= 60 && this.value[1] < 80)
        results.push(
          "https://live.staticflickr.com/65535/51280643468_b13c69ff22_o.png"
        );
      else
        results.push(
          "https://live.staticflickr.com/65535/51278099823_29be28c9b3_o.png"
        );
      return results;
    },
    tags() {
      return this.tagsString.split(" ");
    }
  },
  created() {
    this.min = 1;
    this.max = 99;
    this.enableCross = false;
    this.tooltipMerge = false;
    this.slug = this.$route.params.slug;
    switch (this.slug) {
      case "opening_this_week":
        document.title = "LIST OPENING THIS WEEK - LEMONCAT";
        break;
      case "top_box_office":
        document.title = "LIST TOP BOX OFFICE - LEMONCAT";
        break;
      case "opening_soon":
        document.title = "LIST OPENING SOON - LEMONCAT";
        break;
      case "coming_soon":
        document.title = "LIST COMING SOON - LEMONCAT";
        break;
      case "weekend_earnings":
        document.title = "LIST WEEDKEND EARNINGS - LEMONCAT";
        break;
      case "certified_fresh":
        document.title = "LIST CERTIFIED FRESH MOVIES - LEMONCAT";
        break;
      case "netflix":
        document.title = "LIST NETFLIX - LEMONCAT";
        break;
      case "amazon_prime_video_us":
        document.title = "LIST AMAZON PRIME VIDEO US - LEMONCAT";
        break;
      case "disney":
        document.title = "LIST DISNEY PLUS - LEMONCAT";
        break;
      case "hbo_max":
        document.title = "LIST HBO MAX - LEMONCAT";
        break;
      case "hbo_now":
        document.title = "LIST HBO NOW - LEMONCAT";
        break;
      case "fandango_now":
        document.title = "LIST FANDANGO NOW - LEMONCAT";
        break;
      case "vudu":
        document.title = "LIST VUDU - LEMONCAT";
        break;
      case "apple_tv_plus_us":
        document.title = "LIST APPLE TV PLUS US - LEMONCAT";
        break;
      case "peacock":
        document.title = "LIST PEACOCK - LEMONCAT";
        break;
      case "hulu":
        document.title = "LIST HULU - LEMONCAT";
        break;
      case "itunes":
        document.title = "LIST PARAMOUNT - LEMONCAT";
        break;
      default:
        document.title = "LIST - LEMONCAT";
        break;
    }
  },
  watch: {
    value(val, old) {
      if (JSON.stringify(val) !== JSON.stringify([80, 99]))
        this.showFreshOnly = false;
      if (JSON.stringify(val) !== JSON.stringify(old))
        this.$apollo
          .query({
            query: getFlimsByParams,
            variables: {
              page: this.currentPage || 1,
              size: this.perPage || 20,
              type: "movie",
              sortKey: this.sort || "Release Date",
              params: {
                range: this.value || [1, 99],
                genres: this.selected.map(item => item.toLowerCase()) || [],
                searchKey: this.filter || ""
              }
            }
          })
          .then(res => {
            console.log("🚀 --------------------------");
            console.log("🚀 ~ reloadFlims ~ res", res);
            console.log("🚀 --------------------------");
          })
          .catch(() => {});
    },
    showFreshOnly(val) {
      if (val) this.value = [80, 99];
    },
    slug(val) {
      switch (val) {
        case "opening_this_week":
          document.title = "LIST OPENING THIS WEEK - LEMONCAT";
          break;
        case "top_box_office":
          document.title = "LIST TOP BOX OFFICE - LEMONCAT";
          break;
        case "opening_soon":
          document.title = "LIST OPENING SOON - LEMONCAT";
          break;
        case "coming_soon":
          document.title = "LIST COMING SOON - LEMONCAT";
          break;
        case "weekend_earnings":
          document.title = "LIST WEEDKEND EARNINGS - LEMONCAT";
          break;
        case "certified_fresh":
          document.title = "LIST CERTIFIED FRESH MOVIES - LEMONCAT";
          break;
        case "netflix":
          document.title = "LIST NETFLIX - LEMONCAT";
          break;
        case "amazon_prime_video_us":
          document.title = "LIST AMAZON PRIME VIDEO US - LEMONCAT";
          break;
        case "disney":
          document.title = "LIST DISNEY PLUS - LEMONCAT";
          break;
        case "hbo_max":
          document.title = "LIST HBO MAX - LEMONCAT";
          break;
        case "hbo_now":
          document.title = "LIST HBO NOW - LEMONCAT";
          break;
        case "fandango_now":
          document.title = "LIST FANDANGO NOW - LEMONCAT";
          break;
        case "vudu":
          document.title = "LIST VUDU - LEMONCAT";
          break;
        case "apple_tv_plus_us":
          document.title = "LIST APPLE TV PLUS US - LEMONCAT";
          break;
        case "peacock":
          document.title = "LIST PEACOCK - LEMONCAT";
          break;
        case "hulu":
          document.title = "LIST HULU - LEMONCAT";
          break;
        case "itunes":
          document.title = "LIST PARAMOUNT - LEMONCAT";
          break;
        default:
          document.title = "LIST - LEMONCAT";
          break;
      }
    }
  }
  // apollo: {
  //   users: {
  //     query: getAllUsers,
  //     result(res) {
  //       this.msg = res;
  //     }
  //   }
  // }
};
</script>
<style scoped>
.sort-button {
  cursor: pointer;
  padding: 5px;
  width: 100%;
}
.sort-button:hover {
  padding: 5px;
  cursor: pointer;
  width: 100%;
  background-color: #3976dc;
  color: white;
}
.tab-link-active {
  text-decoration: none;
  padding: 10px 20px;
  color: white;
  background-color: #3976dc;
  border-radius: 4px;
  width: 95%;
}
.tab-link {
  text-decoration: none;
  padding: 10px 20px;
  color: #2a2c32;
}
.tab-link:hover {
  text-decoration: none;
  color: #3976dc;
  padding: 10px 20px;
}
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
.app-content {
  padding: 10px 10px;
}
</style>
