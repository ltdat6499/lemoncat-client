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
      <b-row style="padding-top:50px">
        <b-col cols="9">
          <h2>
            <strong>SIDNEY POITIER'S 7 MOST MEMORABLE PERFORMANCES</strong>
          </h2>
          <h5>
            ON HIS 92ND BIRTHDAY, WE LOOK BACK AT THE FILMS OF THE
            HISTORY-MAKING HOLLYWOOD GREAT.
          </h5>
          <div>
            <span>by </span>
            <b-link style="text-decoration:none;">Jacqueline Coley</b-link>
            <span style="color:gray"> | February 20, 2019</span>
            <b-link style="text-decoration:none;">
              | <v-icon small>mdi-message</v-icon> Comments</b-link
            >
          </div>
          <hr style="width: 90%;margin-left: auto;margin-right: auto;" />
          <p style="padding:20px"><span v-html="rawHtml"></span></p>
          <hr style="width: 90%;margin-left: auto;margin-right: auto;" />
          <div
            style="width: 90%;margin-left: auto;margin-right: auto;padding-bottom:20px"
          >
            <div style="float:left">
              <div style="display: flex;">
                <div style="margin-right:45px">
                  <img
                    src="../icons/emoji/love.svg"
                    style="height:20px;width:20px"
                  />
                  <img
                    src="../icons/emoji/care.svg"
                    style="height:20px;width:20px;position:absolute;left:61px"
                  />
                  <img
                    src="../icons/emoji/haha.svg"
                    style="height:20px;width:20px;position:absolute;left:78px"
                  />
                </div>
                <div>
                  <b-link style="text-decoration:none;color:gray">4,2k</b-link>
                </div>
              </div>
            </div>

            <div style="float:right">
              <b-link style="text-decoration:none;color:gray"
                >2 Comments</b-link
              >
            </div>
          </div>
          <hr style="width: 90%;margin-left: auto;margin-right: auto;" />
          <div style="width:90%;margin-left: auto;margin-right: auto;">
            <b-row>
              <b-col
                ><b-button class="block" id="popover-react"
                  ><span style="display:flex;justify-content: center">
                    <v-icon style="margin-right:5px"
                      >mdi-thumb-up-outline</v-icon
                    >
                    <strong>React</strong></span
                  ></b-button
                ><b-popover
                  target="popover-react"
                  triggers="hover"
                  placement="top"
                  delay="100"
                >
                  <img class="react-icon" src="../icons/emoji/love.svg" />
                  <img src="../icons/emoji/care.svg" class="react-icon" />
                  <img src="../icons/emoji/haha.svg" class="react-icon" />
                  <img src="../icons/emoji/wow.svg" class="react-icon" />
                  <img src="../icons/emoji/like.svg" class="react-icon" />
                  <img
                    src="../icons/emoji/angry.svg"
                    class="react-icon"
                  /> </b-popover
              ></b-col>
              <b-col
                ><b-button class="block"
                  ><span style="display:flex;justify-content: center">
                    <v-icon style="margin-right:5px"
                      >mdi-comment-processing-outline</v-icon
                    >
                    <strong>Comment</strong></span
                  ></b-button
                ></b-col
              >
              <b-col
                ><b-button class="block" :pressed="false"
                  ><span style="display:flex;justify-content: center">
                    <v-icon style="margin-right:5px">mdi-share-outline</v-icon>
                    <strong>Share</strong></span
                  ></b-button
                ></b-col
              >
            </b-row>
          </div>

          <hr style="width: 90%;margin-left: auto;margin-right: auto;" />

          <div
            style="width: 90%;margin-left: auto;margin-right: auto;padding-bottom:20px"
          >
            <div style="width:100%;display:flex;align-items: center;">
              <img
                src="../icons/emoji/care.svg"
                style="height:35px;width:35px;float:left;margin-right:10px"
              />
              <b-form-input
                style="border-radius: 30px !important;float:left;max-width:70%;margin-right:36px;background-color: #F0F2F5"
                placeholder="Write your comment"
              />
              <v-select
                style="max-width:20%;float:right"
                v-model="selected"
                :items="['Time', 'Top', 'Most Relative']"
                label="View Mode"
              ></v-select>
            </div>
            <div>
              <b-row>
                <b-col
                  style="margin-left:0px!important"
                  class="no-gutters"
                  cols="1"
                  ><img
                    src="../icons/emoji/care.svg"
                    style="height:35px;width:35px;float:left;"
                /></b-col>
                <b-col
                  class="no-gutters"
                  cols="11"
                  style="display:flex;flex-direction:column"
                >
                  <div
                    style="margin-bottom:5px;border-radius: 10px !important;float:left;background-color: #F0F2F5;display:flex;flex-direction: column;padding:10px"
                  >
                    <b-link
                      style="float:left;margin-right:auto;text-decoration:none;"
                      ><strong>Min Khant Nyi Thway </strong></b-link
                    >
                    <span style="float:left;margin-right:auto;"
                      >Wow nice it's grateful! , it's support for javascript
                      with language? 😅</span
                    >
                  </div>
                  <div style="padding-left:10px">
                    <b-link
                      style="text-decoration:none;color:gray;float:left;font-size:12px"
                      id="popover-id-1"
                      ><strong>React</strong></b-link
                    >
                    <strong style="float:left; color:gray">&nbsp;·&nbsp;</strong
                    ><b-link
                      style="text-decoration:none;color:gray;float:left;font-size:12px"
                      ><strong>Reply</strong></b-link
                    ><strong style="float:left;color:gray">&nbsp;·&nbsp;</strong
                    ><b-link
                      style="text-decoration:none;color:gray;float:left;font-size:12px"
                      ><strong>11 Weeks ago</strong></b-link
                    >
                    <b-popover
                      target="popover-id-1"
                      triggers="hover"
                      placement="top"
                      delay="100"
                    >
                      <img class="react-icon" src="../icons/emoji/love.svg" />
                      <img src="../icons/emoji/care.svg" class="react-icon" />
                      <img src="../icons/emoji/haha.svg" class="react-icon" />
                      <img src="../icons/emoji/wow.svg" class="react-icon" />
                      <img src="../icons/emoji/like.svg" class="react-icon" />
                      <img src="../icons/emoji/angry.svg" class="react-icon" />
                    </b-popover>
                  </div>
                  <!-- Child comments -->
                  <div>
                    <!-- Comment -->
                    <div>
                      <b-row>
                        <b-col
                          style="margin-left:0px!important"
                          class="no-gutters"
                          cols="1"
                          ><img
                            src="../icons/emoji/care.svg"
                            style="height:25px;width:25px;float:left;"
                        /></b-col>
                        <b-col class="no-gutters" cols="11">
                          <div
                            style="margin-bottom:5px;border-radius: 10px !important;float:left;background-color: #F0F2F5;display:flex;flex-direction: column;padding:10px"
                          >
                            <b-link
                              style="float:left;margin-right:auto;text-decoration:none;"
                              ><strong>Min Khant Nyi Thway </strong></b-link
                            >
                            <span
                              >Wow nice it's grateful! , it's support for
                              javascript with language? 😅</span
                            >
                          </div>
                          <div style="margin-left:10px">
                            <b-link
                              style="text-decoration:none;color:gray;float:left;font-size:12px"
                              id="popover-id-2"
                              ><strong>React</strong></b-link
                            >
                            <strong style="float:left; color:gray"
                              >&nbsp;·&nbsp;</strong
                            ><b-link
                              style="text-decoration:none;color:gray;float:left;font-size:12px"
                              ><strong>Reply</strong></b-link
                            ><strong style="float:left;color:gray"
                              >&nbsp;·&nbsp;</strong
                            ><b-link
                              style="text-decoration:none;color:gray;float:left;font-size:12px"
                              ><strong>11 Weeks ago</strong></b-link
                            >
                            <b-popover
                              target="popover-id-2"
                              triggers="hover"
                              placement="top"
                              delay="100"
                            >
                              <img
                                class="react-icon"
                                src="../icons/emoji/love.svg"
                              />
                              <img
                                src="../icons/emoji/care.svg"
                                class="react-icon"
                              />
                              <img
                                src="../icons/emoji/haha.svg"
                                class="react-icon"
                              />
                              <img
                                src="../icons/emoji/wow.svg"
                                class="react-icon"
                              />
                              <img
                                src="../icons/emoji/like.svg"
                                class="react-icon"
                              />
                              <img
                                src="../icons/emoji/angry.svg"
                                class="react-icon"
                              />
                            </b-popover>
                          </div>
                        </b-col>
                      </b-row>
                    </div>
                    <!-- Reply -->
                    <div style="width:100%;display:flex;align-items: center;">
                      <img
                        src="../icons/emoji/care.svg"
                        style="height:25px;width:25px;float:left;margin-right:10px"
                      />
                      <b-form-input
                        style="border-radius: 30px !important;float:left;background-color: #F0F2F5"
                        placeholder="Write your comment"
                      />
                    </div>
                    <!-- Show more -->
                    <div style="margin:10px;float:left">
                      <v-icon small>mdi-subdirectory-arrow-right</v-icon>
                      <b-link style="text-decoration:none;color:gray"
                        ><strong> Show more comments</strong></b-link
                      >
                    </div>
                  </div>
                </b-col>
              </b-row>
              <!-- Parent show more -->
              <div style="margin:10px;float:left">
                <v-icon small>mdi-subdirectory-arrow-right</v-icon>
                <b-link style="text-decoration:none;color:gray"
                  ><strong> Show more comments</strong></b-link
                >
              </div>
            </div>
          </div>
          <div
            style="width: 90%;margin-left: auto;margin-right: auto;padding-bottom:20px"
          ></div>
        </b-col>
        <b-col cols="3">
          <div>
            <header-bar>
              <span slot="header">MOVIE & TV NEWS</span>
            </header-bar>
            <news-card></news-card> <news-card></news-card
            ><news-card></news-card> <news-card></news-card>
            <news-card></news-card> <news-card></news-card
            ><news-card></news-card> <news-card></news-card>
            <b-link style="text-decoration:none;float:right;margin-right:20px"
              >More on LC</b-link
            >
          </div>
          <div>
            <header-bar>
              <span slot="header">TAG CLOUD</span>
            </header-bar>
            <div style="border: 0.3px solid gray;margin:3px;display:flex;flex-wrap:wrap">
              <b-link
                v-for="item of tags"
                :key="item"
                style="margin-right:5px;padding:5px"
                ><strong>{{ item }}</strong></b-link
              >
            </div>
          </div>
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
// import getAllUsers from "@/apollo/queries/getAllUsers.gql";
import Navbar from "@/components/Navbar";
import PageFooter from "@/components/Footer";
import HeaderBar from "@/components/Movie/HeaderBar";
import NewsCard from "@/components/NewsMenuCard";
export default {
  name: "Home",
  components: {
    Navbar,
    PageFooter,
    HeaderBar,
    NewsCard
  },
  computed: {
    tags() {
      return this.tagsString.split(" ");
    }
  },
  data() {
    return {
      tagsString:
        "gameofthrones FirstLook werewolf Spectrum Originals DC Comics GLAAD CBS All Access laika anthology adaptation GIFs TNT hist Tarantino 007 TCM ghosts justice league 2016 El Rey zombie TCA Winter 2020 Super Bowl Amazon Studios series MCU Disney The Academy festival Endgame Film Festival Best and Worst NBC IFC Films parents Emmy Nominations stop motion jurassic park TV renewals Teen Turner Classic Movies criterion Toys BBC One finale Food Network popular documentary A24 IFC Trivia kids Pop stand-up comedy science fiction cats Holidays cancelled television book adaptation richard e. Grant child's play 2021 Disney Channel The CW Dark Horse Comics Crunchyroll directors superman Legendary Tumblr comiccon Television Critics Association binge worst movies facebook Paramount Network Action boxoffice mission: impossible Mary Poppins Returns Reality disaster NYCC cancelled APB Creative Arts Emmys spain social media Universal Calendar BAFTA E3 Premiere Dates Exclusive Video australia period drama composers The Arrangement hispanic SundanceTV children's TV medical drama 72 Emmy Awards Classic Film Fall TV San Diego Comic-Con indie singing competition cults unscripted FX rotten movies we love know your critic festivals worst christmas movies travel PlayStation award winner reviews DGA Comic Book video on demand WGN boxing Writers Guild of America Sneak Peek Set visit FOX strong female leads Box Office Avengers hollywood canceled TV shows MSNBC ITV The Walking Dead 20th Century Fox universal monsters a nightmare on elm street asian-american Awards Tour Discovery Channel women Fox News Logo Fantasy Watching Series E! YA toronto Baby Yoda Tubi 93rd Oscars Ghostbusters dramedy cancelled TV shows Tomatazos sequels Warner Bros. high school Oscars marvel cinematic universe Opinion diversity Rock japanese nfl Amazon Prime Video Spring TV kaiju The Witch war Countdown TV One Family zombies joker news tv talk aapi LGBT crime Lifetime Christmas movies Winners emmy awards live action revenge DC streaming service cancelled TV series 2019 Masterpiece dceu godzilla TBS mockumentary Academy Awards teaser Anna Paquin Hulu dogs Apple TV Red Carpet docudrama twilight police drama game show Valentine's Day Reality Competition Amazon Prime Animation blaxploitation pirates of the caribbean spy thriller talk show comedies TruTV Black History Month elevated horror Acorn TV movie historical drama vampires casting Television Academy video new star wars movies TCA Esquire Sci-Fi Crackle stoner serial killer 78th Annual Golden Globe Awards SXSW doctor who VICE Superheroes Cannes foreign 21st Century Fox YouTube adventure king kong golden globes Nickelodeon Schedule scary movies Photos Starz Certified Fresh based on movie heist movie comic thriller spanish language chucky Emmys Black Mirror Martial Arts new york Music crime drama james bond Heroines Columbia Pictures supernatural what to watch YouTube Red Disney Plus psychological thriller Trailer 4/20 Elton John GoT Cosplay See It Skip It ratings ESPN First Reviews Netflix Christmas movies TLC all-time Comedy obituary AMC Musical Ovation USA Network Comedy Central nbcuniversal sitcom Brie Larson Apple TV Plus critics renewed TV shows RT History VH1 PBS Biopics Nominations 2015 Funimation 2020 green book Adult Swim X-Men psycho Summer crime thriller MTV black politics latino robots rt archives Quiz Star Wars lord of the rings Character Guide Western mutant ABC Family President Star Trek Disney+ Disney Plus natural history french ViacomCBS Travel Channel Freeform Britbox BBC America Spike RT21 theme song indiana jones CNN OWN south america Holiday fresh superhero nature anime Women's History Month transformers Lucasfilm Nat Geo hidden camera Chernobyl classics versus blockbuster sequel Lifetime kong Peacock Marvel spanish discovery franchise cars Polls and Games Binge Guide streaming Hear Us Out dark Pacific Islander Podcast History Unbreakable Kimmy Schmidt Marathons documentaries cooking PaleyFest Rocketman spider-man Hallmark Christmas movies razzies die hard comics cartoon animated Pop TV Shudder FXX football canceled Mudbound Video Games Syfy true crime Apple TV+ witnail screen actors guild jamie lee curtis TIFF Pixar Sundance TV name the review sports Pride Month slashers Year in Review ABC Signature Drama 99% New York Comic Con YouTube Premium reboot American Society of Cinematographers spinoff DC Universe Fox Searchlight dc TCA 2017 Amazon OneApp italian golden globe awards Showtime DirecTV biography HBO docuseries Chilling Adventures of Sabrina Sundance Paramount Thanksgiving television concert best Walt Disney Pictures BET fast and furious Netflix 71st Emmy Awards remakes Winter TV CMT The Purge Pirates monster movies Extras movies venice TCA Awards scene in color deadpool National Geographic Mary Tyler Moore Pet Sematary 2017 HBO Max cops ID 2018 Disney streaming service Christmas sag awards scorecard political drama WarnerMedia Broadway Country 45 Election prank Captain marvel breaking bad dragons Grammys Marvel Television Shondaland miniseries Paramount Plus Sony Pictures blockbusters Sundance Now 24 frames romance Mindy Kaling FX on Hulu target Arrowverse BET Awards HBO Go Comics on TV quibi Lionsgate free movies Vudu Ellie Kemper Alien Stephen King Horror international USA VOD batman Superheroe Hallmark films technology screenings zero dark thirty ABC archives LGBTQ rotten satire halloween tv independent trailers Trophy Talk harry potter Epix rom-coms comic books saw Rocky cinemax The Walt Disney Company Song of Ice and Fire Infographic Marvel Studios halloween Mary poppins crossover A&E Cartoon Network BBC aliens Interview toy story Kids & Family CW Seed SDCC book Bravo Mystery Film Turner telelvision space Awards CBS TV Land romantic comedy Musicals Rom-Com",
      selected: "Time",
      rawHtml: `<p><img style="width: 705px; height: auto;" src="https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2018/01/09160050/Sidney-Poitier-Recall.jpg" sizes="(max-width: 700px) 100vw, 700px" srcset="https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2018/01/09160050/Sidney-Poitier-Recall.jpg 700w, https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2018/01/09160050/Sidney-Poitier-Recall-300x163.jpg 300w" width="700" height="380" /></p>
<p>(Photo by Tommaso Boddi/Getty Images)</p>
<p>The great Sidney Poitier turns 92 on February 20, 2019,&nbsp;just shy of 55 years since he became the first Black man to win Best Actor at the Academy Awards.&nbsp;As one of the first African-American film stars, Poitier boasts a career littered with accolades, historical moments, and iconic performances too numerous count. To celebrate the actor&rsquo;s 92nd year, we at&nbsp;RT thought it the perfect time to single out just a few of our favorite performances from the iconic actor. With 60-plus credits spanning over 60 years, it was a near impossible feat, but here are our&nbsp;seven favorite Sidney Poitier performances.</p>
<hr />
<h2><a href="https://www.rottentomatoes.com/m/blackboard_jungle/">BLACKBOARD JUNGLE</a>&nbsp;(1955)&nbsp;&nbsp;76%</h2>
<div><img style="width: 705px; height: auto;" src="https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2018/01/09150603/Poitier-Blackboard-Jungle.jpg" sizes="(max-width: 700px) 100vw, 700px" srcset="https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2018/01/09150603/Poitier-Blackboard-Jungle.jpg 700w, https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2018/01/09150603/Poitier-Blackboard-Jungle-300x163.jpg 300w" alt="" /></div>
<p>This was the role that put Poitier on the map. The struggles of educators and students are well documented in this violent and controversial film, based on Evan Hunter&rsquo;s seminal novel about inner-city school conditions. Modern audiences might struggle to sympathize with the tactics employed by Poitier&rsquo;s character, Gregory Miller, but the cultural impact his performance had on both society and education are undeniable.</p>
<hr />
<h2><a href="https://www.rottentomatoes.com/m/defiant_ones/">THE DEFIANT ONES</a>&nbsp;(1958)&nbsp;&nbsp;92%</h2>
<div><img style="width: 705px; height: auto;" src="https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2018/01/08161452/The-Defiant-Ones.jpg" sizes="(max-width: 700px) 100vw, 700px" srcset="https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2018/01/08161452/The-Defiant-Ones.jpg 700w, https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2018/01/08161452/The-Defiant-Ones-300x163.jpg 300w" alt="" /></div>
<p>Poitier garnered his first Oscar Nomination for his portrayal of Noah Cullen, an escaped black convict shackled to white fellow escapee John &ldquo;Joker&rdquo; Jackson, played by Tony Curtis. Motivated to survive and escape, the foes are forced to work together and eventually come to respect one another. The conflict and eventual cooperation between the two men plays out against the backdrop of Jim Crow, underscoring the institutions of oppression that existed at the time that would have prevented their friendship from developing. The final scene of Noah defiantly singing to Joker remains a near perfect ending to the prison break caper.</p>
<hr />
<h2><a href="https://www.rottentomatoes.com/m/1017123-raisin_in_the_sun/">A RAISIN IN THE SUN</a>&nbsp;(1961)&nbsp;&nbsp;94%</h2>
<div><img style="width: 705px; height: auto;" src="https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2018/01/08155519/Raisin-in-the-Sun.jpg" sizes="(max-width: 700px) 100vw, 700px" srcset="https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2018/01/08155519/Raisin-in-the-Sun.jpg 700w, https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2018/01/08155519/Raisin-in-the-Sun-300x163.jpg 300w" alt="" /></div>
<p>In the film adaptation of the eponymous stage play, Poitier plays Walter, the patriarch of the Youngers, a young black family living in 1950s Southside Chicago, trying to better themselves through family and a commitment to give their children a better life. Acting as a cinematic counterpoint to the idealized American dream, the Youngers struggle to combat institutions and individuals dead set on never allowing them to rise above. Walter is met with hostility and apprehension from those outside and within his community as he strives to achieve, but through it all, he and his family persevere.</p>
<hr />
<h2><a href="https://www.rottentomatoes.com/m/1012370-lilies_of_the_field/">LILIES OF THE FIELD</a>&nbsp;(1963)&nbsp;&nbsp;91%</h2>
<div><img style="width: 705px; height: auto;" src="https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2018/01/08155800/Lilies-of-the-Field.jpg" sizes="(max-width: 700px) 100vw, 700px" srcset="https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2018/01/08155800/Lilies-of-the-Field.jpg 700w, https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2018/01/08155800/Lilies-of-the-Field-300x163.jpg 300w" alt="" /></div>
<p>In this Oscar-winning role, Poitier plays Homer Smith, a traveling handyman who stumbles upon a group of German nuns. The nuns believe Homer was sent by God to help them build a chapel, and by the final frames, the audience is all but convinced of the same. Even Queen Oprah Winfrey&nbsp;found herself&nbsp;without words&nbsp;during her Golden Globe acceptance speech as she tried to explain what it was like watching Poitier win that Oscar.&nbsp;Instead, she opted to quote his line from the film and simply said, &ldquo;Amen, amen, amen, amen.&rdquo; To which, I say no one could have put it better.</p>
<hr />
<h2><a href="https://www.rottentomatoes.com/m/guess_whos_coming_to_dinner/">GUESS WHO'S COMING TO DINNER</a>&nbsp;(1967)&nbsp;&nbsp;70%</h2>
<div><img style="width: 705px; height: auto;" src="https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2018/01/08161003/Guess-Whos-Coming-to-Dinner.jpg" sizes="(max-width: 700px) 100vw, 700px" srcset="https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2018/01/08161003/Guess-Whos-Coming-to-Dinner.jpg 700w, https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2018/01/08161003/Guess-Whos-Coming-to-Dinner-300x163.jpg 300w" alt="" /></div>
<p>If the first role you most closely associate with Poitier is not&nbsp;<em>In the Heat of the Night</em>, the likely winner is&nbsp;<em>Guess Who&rsquo;s Coming to Dinner</em>. Playing a black man meeting his white fianc&eacute;e&rsquo;s liberal and affluent parents,&nbsp;<em>Guess Who&rsquo;s Coming to Dinner</em>&nbsp;was one of the first positive portrayals of interracial marriage to hit the big screen. Acting alongside Hollywood legends Spencer Tracey nd Kathleen Hepburn, Poitier made his mark on a verifiable American cinematic masterpiece. The influences and themes of&nbsp;<em>Guess Who Coming to Dinner</em>&nbsp;can be seen in several modern-day adaptations &mdash; Jordan Peele brilliantly subverted those themes for social commentary and comedic effect in&nbsp;<em>Get Out</em>.</p>
<hr />
<h2><a href="https://www.rottentomatoes.com/m/in_the_heat_of_the_night/">IN THE HEAT OF THE NIGHT</a>&nbsp;(1967)&nbsp;&nbsp;95%</h2>
<div><img style="width: 705px; height: auto;" src="https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2018/01/08155547/In-the-Heat-of-the-Night.jpg" sizes="(max-width: 700px) 100vw, 700px" srcset="https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2018/01/08155547/In-the-Heat-of-the-Night.jpg 700w, https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2018/01/08155547/In-the-Heat-of-the-Night-300x163.jpg 300w" alt="" /></div>
<p>&ldquo;They call me Mister Tibbs!&rdquo;&nbsp;Poitier&nbsp;spoke those words in&nbsp;<em>In the Heat of the Night</em>, and both the&nbsp;film and the line have become synonymous with the actor&rsquo;s career. Sitting at number 16 on the American Film Institute&rsquo;s &ldquo;<a href="http://www.afi.com/100years/quotes.aspx" target="_blank" rel="noopener noreferrer">100 Years&hellip; 100 Movie Quotes</a>&rdquo; list, the rebuke to racist Mississippi Police Chief Gillespie (Rod Steiger)&nbsp;is a thing of beauty. Playing Virgil Tibbs, a Pittsburgh detective charged with solving a homicide in the Deep South, Poitier navigates prejudice and incompetence to gain the respect of his would-be adversary. And with his help, the police attempt to solve the&nbsp;suspenseful, complicated whodunit.</p>
<hr />
<h2><a href="https://www.rottentomatoes.com/m/sneakers/">SNEAKERS</a>&nbsp;(1992)&nbsp;&nbsp;79%</h2>
<p><img style="width: 705px; height: auto;" src="https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2018/01/09003724/Sneakers-Poitier.jpg" sizes="(max-width: 700px) 100vw, 700px" srcset="https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2018/01/09003724/Sneakers-Poitier.jpg 700w, https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2018/01/09003724/Sneakers-Poitier-300x163.jpg 300w" width="700" height="380" /></p>
<p>(Photo by Universal Pictures)</p>
<p>In a refreshing change of pace later in his career, Poitier starred in this ensemble suspense comedy. Robert Redford,&nbsp;Dan Aykroyd, David Strathairn, River Phoenix, and Poitier all play former spies working as security consultants. The&nbsp;crew inadvertently get caught up in a web of deception involving a former associate (Ben Kingsley) when they&rsquo;re tasked with the high stakes retrieval of a very powerful piece of government equipment. Playing Donald Crease as an&nbsp;aging, more-than-over-it former CIA agent and the team&rsquo;s voice of reason, Poitier showed us that he can be, in fact, quite hilarious.</p>`
    };
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
