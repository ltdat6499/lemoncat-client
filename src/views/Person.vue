<template>
  <div>
    <loading v-if="isLoading"> </loading>
    <div v-else>
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
        <b-row style="padding-top:50px">
          <b-col cols="9">
            <div style="display:flex;margin-bottom: 20px">
              <img
                :src="person.images[0]"
                style="width:218px;height:280px;margin: 0px 20px"
              />
              <div style="margin: 0px 10px;text-align: left;">
                <h3>
                  <strong>{{ person.name }}</strong>
                </h3>
                <p style="margin-bottom: 3px">
                  Highest Rated:
                  <img
                    :src="person.flims[0].lemonIcon"
                    style="width:16px;height:16px"
                  />
                  <strong>{{ person.flims[0].lemonScoreDisplay }} </strong>
                  <b-link
                    style="text-decoration:none;"
                    :href="'/m/' + person.flims[0].slug"
                    ><strong>{{ person.flims[0].info.name }}</strong>
                  </b-link>
                </p>
                <p style="margin-bottom: 3px">
                  Lowest Rated:
                  <img
                    :src="person.flims[person.flims.length - 1].lemonIcon"
                    style="width:16px;height:16px"
                  />
                  <strong
                    >{{
                      person.flims[person.flims.length - 1].lemonScoreDisplay
                    }}
                  </strong>
                  <b-link
                    style="text-decoration:none;"
                    :href="'/m/' + person.flims[person.flims.length - 1].slug"
                    ><strong>{{
                      person.flims[person.flims.length - 1].info.name
                    }}</strong>
                  </b-link>
                </p>
                <p style="margin-bottom: 3px">Birthday: {{ person.birth }}</p>
                <p>Birthplace: {{ person.bornIn }}</p>
                <p style="text-align:justify;max-width:80%;margin-bottom: 0px">
                  {{ thisSummary }}
                </p>
                <b-link
                  v-if="!summaryShowMore"
                  style="text-decoration:none;"
                  @click="summaryShowMore = true"
                  ><strong>Show less</strong>
                </b-link>
                <b-link
                  v-if="summaryShowMore"
                  style="text-decoration:none;"
                  @click="summaryShowMore =false "
                  ><strong>Read more</strong>
                </b-link>
              </div>
            </div>
            <header-bar style="display:flex;margin: 20px;max-width:95%">
              <span slot="header">HIGHEST RATED MOVIES</span>
            </header-bar>
            <slider-movie :pageSize="5" :flims="person.flims.splice(0, 10)">
            </slider-movie>
            <header-bar style="display:flex;margin: 20px;max-width:95%">
              <span slot="header">PHOTOS</span>
            </header-bar>
            <slider-image :images="images"></slider-image>
            <header-bar style="display:flex;margin: 20px;max-width:95%">
              <span slot="header">FILMOGRAPHY</span>
            </header-bar>
            <div style="max-width:95%;margin:5px">
              <h3><strong>Movies</strong></h3>
              <flim-table :flims="flims"></flim-table>
              <!-- <hr style="width: 90%;margin-left: auto;margin-right: auto;" />
            <h3 style="margin-top:0px"><strong>TV</strong></h3>
            <flim-table :flims="flims"></flim-table> -->
            </div>
          </b-col>
          <b-col cols="3">
            <div>
              <header-bar>
                <span slot="header">MOVIE & TV NEWS</span>
              </header-bar>
              <news-card></news-card> <news-card></news-card
              ><news-card></news-card> <news-card></news-card>
              <news-card></news-card>
              <b-link style="text-decoration:none;float:right;margin-right:20px"
                >More on LC</b-link
              >
            </div>
            <!-- <div>
            <header-bar>
              <span slot="header">TAG CLOUD</span>
            </header-bar>
            <div
              style="border: 0.3px solid gray;margin:3px;display:flex;flex-wrap:wrap"
            >
              <b-link
                v-for="item of tags"
                :key="item"
                style="margin-right:5px;padding:5px"
                ><strong>{{ item }}</strong></b-link
              >
            </div>
          </div> -->
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
  </div>
</template>

<script>
import _ from "lodash";
import moment from "moment";
import getPersonBySlug from "@/apollo/queries/getPersonBySlug.gql";
import Loading from "@/components/Loading";
import SliderImage from "@/components/Movie/SliderImage";
import Navbar from "@/components/Navbar";
import PageFooter from "@/components/Footer";
import HeaderBar from "@/components/Movie/HeaderBar";
import NewsCard from "@/components/NewsMenuCard";
import SliderMovie from "@/components/PersonSliderMovie";
import FlimTable from "@/components/Person/Table";
export default {
  name: "Home",
  components: {
    Navbar,
    PageFooter,
    HeaderBar,
    NewsCard,
    SliderMovie,
    SliderImage,
    FlimTable,
    Loading
  },
  computed: {
    tags() {
      return this.tagsString.split(" ");
    }
  },
  data() {
    return {
      isLoading: true,
      slug: "",
      person: {},
      flims: [],
      images: [],
      summaryShowMore: false,
      tagsString:
        "gameofthrones FirstLook werewolf Spectrum Originals DC Comics GLAAD CBS All Access laika anthology adaptation GIFs TNT hist Tarantino 007 TCM ghosts justice league 2016 El Rey zombie TCA Winter 2020 Super Bowl Amazon Studios series MCU Disney The Academy festival Endgame Film Festival Best and Worst NBC IFC Films parents Emmy Nominations stop motion jurassic park TV renewals Teen Turner Classic Movies criterion Toys BBC One finale Food Network popular documentary A24 IFC Trivia kids Pop stand-up comedy science fiction cats Holidays cancelled television book adaptation richard e. Grant child's play 2021 Disney Channel The CW Dark Horse Comics Crunchyroll directors superman Legendary Tumblr comiccon Television Critics Association binge worst movies facebook Paramount Network Action boxoffice mission: impossible Mary Poppins Returns Reality disaster NYCC cancelled APB Creative Arts Emmys spain social media Universal Calendar BAFTA E3 Premiere Dates Exclusive Video australia period drama composers The Arrangement hispanic SundanceTV children's TV medical drama 72 Emmy Awards Classic Film Fall TV San Diego Comic-Con indie singing competition cults unscripted FX rotten movies we love know your critic festivals worst christmas movies travel PlayStation award winner reviews DGA Comic Book video on demand WGN boxing Writers Guild of America Sneak Peek Set visit FOX strong female leads Box Office Avengers hollywood canceled TV shows MSNBC ITV The Walking Dead 20th Century Fox universal monsters a nightmare on elm street asian-american Awards Tour Discovery Channel women Fox News Logo Fantasy Watching Series E! YA toronto Baby Yoda Tubi 93rd Oscars Ghostbusters dramedy cancelled TV shows Tomatazos sequels Warner Bros. high school Oscars marvel cinematic universe Opinion diversity Rock japanese nfl Amazon Prime Video Spring TV kaiju The Witch war Countdown TV One Family zombies joker news tv talk aapi LGBT crime Lifetime Christmas movies Winners emmy awards live action revenge DC streaming service cancelled TV series 2019 Masterpiece dceu godzilla TBS mockumentary Academy Awards teaser Anna Paquin Hulu dogs Apple TV Red Carpet docudrama twilight police drama game show Valentine's Day Reality Competition Amazon Prime Animation blaxploitation pirates of the caribbean spy thriller talk show comedies TruTV Black History Month elevated horror Acorn TV movie historical drama vampires casting Television Academy video new star wars movies TCA Esquire Sci-Fi Crackle stoner serial killer 78th Annual Golden Globe Awards SXSW doctor who VICE Superheroes Cannes foreign 21st Century Fox YouTube adventure king kong golden globes Nickelodeon Schedule scary movies Photos Starz Certified Fresh based on movie heist movie comic thriller spanish language chucky Emmys Black Mirror Martial Arts new york Music crime drama james bond Heroines Columbia Pictures supernatural what to watch YouTube Red Disney Plus psychological thriller Trailer 4/20 Elton John GoT Cosplay See It Skip It ratings ESPN First Reviews Netflix Christmas movies TLC all-time Comedy obituary AMC Musical Ovation USA Network Comedy Central nbcuniversal sitcom Brie Larson Apple TV Plus critics renewed TV shows RT History VH1 PBS Biopics Nominations 2015 Funimation 2020 green book Adult Swim X-Men psycho Summer crime thriller MTV black politics latino robots rt archives Quiz Star Wars lord of the rings Character Guide Western mutant ABC Family President Star Trek Disney+ Disney Plus natural history french ViacomCBS Travel Channel Freeform Britbox BBC America Spike RT21 theme song indiana jones CNN OWN south america Holiday fresh superhero nature anime Women's History Month transformers Lucasfilm Nat Geo hidden camera Chernobyl classics versus blockbuster sequel Lifetime kong Peacock Marvel spanish discovery franchise cars Polls and Games Binge Guide streaming Hear Us Out dark Pacific Islander Podcast History Unbreakable Kimmy Schmidt Marathons documentaries cooking PaleyFest Rocketman spider-man Hallmark Christmas movies razzies die hard comics cartoon animated Pop TV Shudder FXX football canceled Mudbound Video Games Syfy true crime Apple TV+ witnail screen actors guild jamie lee curtis TIFF Pixar Sundance TV name the review sports Pride Month slashers Year in Review ABC Signature Drama 99% New York Comic Con YouTube Premium reboot American Society of Cinematographers spinoff DC Universe Fox Searchlight dc TCA 2017 Amazon OneApp italian golden globe awards Showtime DirecTV biography HBO docuseries Chilling Adventures of Sabrina Sundance Paramount Thanksgiving television concert best Walt Disney Pictures BET fast and furious Netflix 71st Emmy Awards remakes Winter TV CMT The Purge Pirates monster movies Extras movies venice TCA Awards scene in color deadpool National Geographic Mary Tyler Moore Pet Sematary 2017 HBO Max cops ID 2018 Disney streaming service Christmas sag awards scorecard political drama WarnerMedia Broadway Country 45 Election prank Captain marvel breaking bad dragons Grammys Marvel Television Shondaland miniseries Paramount Plus Sony Pictures blockbusters Sundance Now 24 frames romance Mindy Kaling FX on Hulu target Arrowverse BET Awards HBO Go Comics on TV quibi Lionsgate free movies Vudu Ellie Kemper Alien Stephen King Horror international USA VOD batman Superheroe Hallmark films technology screenings zero dark thirty ABC archives LGBTQ rotten satire halloween tv independent trailers Trophy Talk harry potter Epix rom-coms comic books saw Rocky cinemax The Walt Disney Company Song of Ice and Fire Infographic Marvel Studios halloween Mary poppins crossover A&E Cartoon Network BBC aliens Interview toy story Kids & Family CW Seed SDCC book Bravo Mystery Film Turner telelvision space Awards CBS TV Land romantic comedy Musicals Rom-Com"
    };
  },
  created() {
    this.slug = this.$route.params.slug;
  },
  computed: {
    thisSummary() {
      if (this.summaryShowMore)
        return this.person.summary.substring(0, 500) + " ...";
      return this.person.summary;
    }
  },
  apollo: {
    personBySlug: {
      query: getPersonBySlug,
      variables() {
        return {
          slug: this.slug
        };
      },
      result(result) {
        this.person = result.data.personBySlug;
        this.person.birth = moment(this.person.birth).format("ll");
        this.person.flims = this.person.flims.map(item => {
          if (item.lemonScore >= 80)
            item.lemonIcon =
              "https://live.staticflickr.com/65535/51280469111_d17f4e62ea_o.png";
          else if (item.lemonScore >= 60 && item.lemonScore < 80)
            item.lemonIcon =
              "https://live.staticflickr.com/65535/51280643468_b13c69ff22_o.png";
          else if (item.lemonScore < 60 && item.lemonScore >= 0)
            item.lemonIcon =
              "https://live.staticflickr.com/65535/51278099823_29be28c9b3_o.png";
          else
            item.lemonIcon =
              "https://live.staticflickr.com/65535/51278655199_4ec122dafd_o.png";

          if (item.userScore >= 60)
            item.userIcon =
              "https://live.staticflickr.com/65535/51277934536_26d8b990e5_o.png";
          else if (item.userScore < 60 && item.userScore >= 0)
            item.userIcon =
              "https://live.staticflickr.com/65535/51278953920_e842d17506_o.png";
          else
            item.userIcon =
              "https://live.staticflickr.com/65535/51277185452_0092492af4_o.png";

          item.lemonScoreDisplay =
            item.lemonScore === -1 ? "_ _ _" : item.lemonScore + "%";
          item.userScoreDisplay =
            item.userScore === -1 ? "_ _ _" : item.userScore + "%";

          return item;
        });
        this.person.flims = _.sortBy(this.person.flims, [
          "lemonScore"
        ]).reverse();
        document.title = this.person.name.toUpperCase() + " - LEMONCAT";
        for (const item of this.person.flims) {
          this.flims.push({
            lemonScore: item.lemonScore,
            lemonIcon: item.lemonIcon,
            userScore: item.userScore,
            userIcon: item.userIcon,
            lemonScoreDisplay: item.lemonScoreDisplay,
            userScoreDisplay: item.userScoreDisplay,
            title: item.info.name,
            credit: item.crews
              .filter(crew => crew.person.id === this.person.id)
              .map(crew => {
                for (const iterator of [
                  "Additional Music",
                  "Additional Voices Voice",
                  "Additional voice Voice",
                  "Animation Director",
                  "Animator",
                  "Art Direction",
                  "Art Director",
                  "Assistant Director",
                  "Assistant Director (uncredited)",
                  "Assistant Editor",
                  "Assistant Producer",
                  "Associate Producer",
                  "Casting",
                  "Casting Director",
                  "Co-Associate Producer",
                  "Co-Director",
                  "Co-Editor",
                  "Co-Executive Producer",
                  "Co-Producer",
                  "Costume Designer",
                  "Director",
                  "Director of Photography",
                  "Director, English Version",
                  "District Attorney",
                  "Editing",
                  "Editor",
                  "Executive Music Producer",
                  "Executive Producer",
                  "Executive Producer, English Version",
                  "Film Editor",
                  "Hair Designer",
                  "Hair Stylist",
                  "Hair Stylist Supervisor",
                  "Hairdresser",
                  "Lyrics",
                  "Makeup",
                  "Makeup Artist",
                  "Makeup Department Head",
                  "Makeup Designer",
                  "Makeup Supervisor",
                  "Music",
                  "Music Editor",
                  "Music Producer",
                  "Music Supervisor",
                  "Network Executive",
                  "Neurologist",
                  "Non-Original Music",
                  "Original Music",
                  "Original Music and Songs",
                  "Original Song",
                  "Original Songs",
                  "Principal",
                  "Proctor",
                  "Producer",
                  "Producer, English Version",
                  "Production Design",
                  "Production Designer",
                  "Production Manager",
                  "Production Supervisor",
                  "Psychiatrist",
                  "Psychologist",
                  "Screening Party Attendee",
                  "Screenwriter",
                  "Script Supervisor",
                  "Second Assistant Director",
                  "Second Unit Director",
                  "Secretary",
                  "Security Guard",
                  "Sound",
                  "Sound Designer",
                  "Sound Editor",
                  "Sound Effects Editor",
                  "Sound Mixer",
                  "Sound Re-Recording Mixer",
                  "Sound Recordist",
                  "Special Appearance",
                  "Special Effects",
                  "Special Effects Supervisor",
                  "Special Makeup Effects",
                  "Supervising Animator",
                  "Supervising Art Direction",
                  "Supervising Editor",
                  "Supervising Producer",
                  "Supervising Sound Editor",
                  "TV Host",
                  "Unit Manager",
                  "Unit Production Manager",
                  "Visitor",
                  "Visual Effects",
                  "Visual Effects Supervisor",
                  "Writer"
                ]) {
                  if (crew.role.includes(iterator)) return crew.role;
                }
                return crew.role + " (Character)";
              })
              .join("<br />"),
            userScore: item.userScore,
            userScore: item.userScore,
            slug: item.slug,
            year: item.createdAt.split("-")[0]
          });
        }
        if (this.person.summary.length > 500) this.summaryShowMore = true;
        let index = 0;
        for (const item of this.person.images) {
          this.images.push({
            index,
            src: item
          });
          index++;
        }
        this.isLoading = false;
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
</style>
