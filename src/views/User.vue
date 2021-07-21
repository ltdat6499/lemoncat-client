<template>
  <div>
    <loading v-if="isLoading"></loading>

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
        <b-row v-if="!edit" style="padding-top:50px;padding-bottom:20px">
          <b-col cols="3">
            <img
              :src="user.image"
              style="width:150px;height:150px;border-radius:50%"
            />
          </b-col>
          <b-col cols="9">
            <div style="display:flex;align-items:center;margin-bottom:15px">
              <span style="font-size:28px;margin-right:20px"
                >{{ user.name
                }}<b-badge v-if="user.role === 's-user'"
                  ><v-icon style="color:#26BA3A" large
                    >mdi-star-circle</v-icon
                  ></b-badge
                ></span
              >
              <b-button
                v-if="!visitMode"
                style="font-weight:bold;font-size:14px;"
                variant="outline-secondary"
                @click="changeEditMode()"
              >
                Edit Profile
              </b-button>
            </div>
            <div
              style="display:flex;align-items:center;justify-content:space-between;font-size:17px;width:70%;margin-bottom:15px"
            >
              <span
                ><strong>{{
                  user.data.working || "LEMONCAT USER"
                }}</strong></span
              >
              <span
                ><strong>{{ reviews.length }}</strong> Reviews</span
              >
              <span
                ><strong>{{ news.length }}</strong> News</span
              >
              <span
                ><strong>{{ histories.length }}</strong> Histories</span
              >
            </div>
            <div
              style="display:flex;align-items:center;font-size:17px;width:70%"
            >
              <strong
                >Click To Contact
                <a
                  :href="'mailto: ' + user.email"
                  style="text-decoration: underline;color:green;cursor: pointer"
                  ><i>{{ user.email }}</i></a
                ></strong
              >
            </div>
          </b-col>
        </b-row>

        <b-row v-else style="padding-top:50px;padding-bottom:20px">
          <b-col cols="3" style="display:flex;justify-content:center">
            <file-upload
              style="width:150px;height:150px;vertical-align:middle;"
              class="align-middle"
              accept="image/png,image/jpeg"
              :defaultPreview="editUser.image"
              :max-size="3"
              :imageMode="'avata'"
              @size-exceeded="onSizeExceeded"
              @file="onFile"
              @load="onLoad"
            ></file-upload>
          </b-col>
          <b-col cols="9">
            <div
              style="display:flex;align-items:left;flex-direction: column;margin-bottom:15px;float:left;margin-right:auto;"
            >
              <div style="margin-right:20px">
                <b-form-input
                  style="font-size: 16px;width:300px"
                  v-model="editUser.name"
                  :state="validation"
                ></b-form-input>
                <b-form-invalid-feedback
                  :state="validation"
                  style="font-size: 16px;float:left;margin-right:auto;max-width:300px"
                >
                  Name must be 5-12 characters long
                </b-form-invalid-feedback>
                <b-form-valid-feedback
                  :state="validation"
                  style="font-size: 16px;float:left;margin-right:auto;max-width:300px"
                >
                  Looks Good
                </b-form-valid-feedback>
              </div>

              <div style="margin-right:20px">
                <b-form-input
                  style="font-size: 16px;width:300px"
                  v-model="editUser.working"
                  :state="
                    editUser.working.length > 4 && editUser.working.length < 13
                  "
                ></b-form-input>
                <b-form-invalid-feedback
                  :state="
                    editUser.working.length > 4 && editUser.working.length < 13
                  "
                  style="font-size: 16px;float:left;margin-right:auto;max-width:300px"
                >
                  Working news must be 5-12 chars long
                </b-form-invalid-feedback>
                <b-form-valid-feedback
                  :state="
                    editUser.working.length > 4 && editUser.working.length < 13
                  "
                  style="font-size: 16px;float:left;margin-right:auto;max-width:300px"
                >
                  Looks Good
                </b-form-valid-feedback>
              </div>

              <div style="margin-right:20px">
                <b-form-input
                  type="password"
                  style="font-size: 16px;width:300px"
                  v-model="editUser.password"
                  :state="
                    editUser.password.length >= 8 &&
                      editUser.password.length <= 16
                  "
                ></b-form-input>
                <b-form-invalid-feedback
                  :state="
                    editUser.password.length >= 8 &&
                      editUser.password.length <= 16
                  "
                  style="font-size: 16px;float:left;margin-right:auto;max-width:300px"
                >
                  Password must be 8-16 chars long
                </b-form-invalid-feedback>
                <b-form-valid-feedback
                  :state="
                    editUser.password.length >= 8 &&
                      editUser.password.length <= 16
                  "
                  style="font-size: 16px;float:left;margin-right:auto;max-width:300px"
                >
                  Looks Good
                </b-form-valid-feedback>
              </div>
              <div>
                <b-button
                  v-if="!visitMode"
                  style="font-weight:bold;font-size:14px;margin-right:10px"
                  variant="success"
                  @click="changeEditMode()"
                >
                  Save
                </b-button>
                <b-button
                  v-if="!visitMode"
                  style="font-weight:bold;font-size:14px;"
                  variant="warning"
                  @click="changeEditMode(true)"
                >
                  Cancel
                </b-button>
              </div>
            </div>
          </b-col>
        </b-row>

        <hr style="width: 85%;margin-left: auto;margin-right: auto;" />
        <b-row style="width:100%">
          <v-tabs fixed-tabs style="width:100%;" v-model="tab">
            <v-tabs-slider color="green"></v-tabs-slider>
            <v-tab style="font-weight:bold" v-for="item in items" :key="item">
              {{ item }}
            </v-tab>
          </v-tabs>
          <v-tabs-items
            v-model="tab"
            style="width:80%;margin-left: auto;margin-right: auto;"
          >
            <v-tab-item v-for="item in items" :key="item">
              <div v-if="item === 'Reviews'">
                <reviews :posts="reviews"></reviews>
              </div>
              <div v-else-if="item === 'News'"><news :posts="news"></news></div>
              <div v-else-if="item === 'Histories'">
                <histories :posts="histories"></histories>
              </div>
              <div v-else style="margin-top:10px">
                <div v-if="visitMode">
                  <h3>YOU DON'T DAVE PERMISSIONS TO VIEW THIS FEATURE</h3>
                </div>
                <div v-else>
                  <img
                    :src="previewNews"
                    style="width:300px;height:150px;align: middle;border-radius:4px"
                  />
                  <br />
                  <b-form-file
                    ref="file"
                    style="margin-bottom: 10px;margin-top: 10px"
                    v-model="file"
                    :state="Boolean(file)"
                    plain
                    accept="image/*"
                    size="lg"
                    placeholder="Click to upload your news poster"
                  ></b-form-file>

                  <b-form-input
                    v-model="post.title"
                    ref="title"
                    :state="post.title.length > 20 ? true : false"
                    aria-describedby="input-live-feedback"
                    placeholder="Enter your news title"
                    trim
                    required
                  ></b-form-input>

                  <v-select
                    v-model="post.data.section"
                    :items="sections"
                    outlined
                  ></v-select>

                  <tinymce ref="editor" v-model="post.content"></tinymce>
                  <div>
                    <b-button
                      style="margin-top:15px;margin-bottom:10px;margin-right:10px"
                      block
                      size="lg"
                      variant="outline-success"
                      @click="submitNews()"
                      >Submit your News</b-button
                    ><b-button
                      v-if="post.id.length"
                      style="margin-top:15px;margin-bottom:10px"
                      block
                      size="lg"
                      variant="outline-warning"
                      @click="closeEdit()"
                      >Close Edit</b-button
                    >
                  </div>
                </div>
              </div>
            </v-tab-item>
          </v-tabs-items>
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
import axios from "axios";
import updatePost from "@/apollo/mutations/updatePost.gql";
import updateUser from "@/apollo/mutations/updateUser.gql";
import getUserInfo from "@/apollo/queries/getUserInfo.gql";
import Navbar from "@/components/Navbar";
import PageFooter from "@/components/Footer";
import HeaderBar from "@/components/Movie/HeaderBar";
import NewsCard from "@/components/NewsCard";
import Reviews from "@/components/User/Review";
import News from "@/components/User/News";
import Histories from "@/components/User/History";
import Loading from "@/components/Loading";
import Tinymce from "@/components/Tinymce";
import FileUpload from "vue-base64-file-upload";

export default {
  components: {
    Navbar,
    PageFooter,
    HeaderBar,
    NewsCard,
    Reviews,
    News,
    Loading,
    Histories,
    FileUpload,
    Tinymce
  },
  data() {
    return {
      sections: [
        "24 Frames",
        "All-Time Lists",
        "Binge Guide",
        "Countdown",
        "Comics on TV",
        "Critics Consensus",
        "Five Favorite Films",
        "The Zeros",
        "Parental Guidance",
        "Red Carpet Roundup",
        "Video Interviews",
        "Weekly Ketchup",
        "Sub-Cult",
        "Weekend Box Office",
        "Scorecards",
        "Total Recall",
        "Now Streaming",
        "What to Watch"
      ],
      isLoading: true,
      first: true,
      reviews: [],
      histories: [],
      news: [],
      slug: "",
      tab: null,
      items: ["Reviews", "News", "Histories", "Write your news"],
      visitMode: false,
      visitUser: {},
      edit: false,
      file: null,
      editUser: {
        image:
          "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars.png",
        name: "",
        password: "lemoncat",
        working: ""
      },
      post: {
        id: "",
        title: "",
        content: "",
        action: "create",
        data: {
          section: "Critics Consensus",
          previewPoster:
            "https://img.freepik.com/free-vector/news-papers-communication-hanging-with-clips-illustration_24908-67082.jpg?size=626&ext=jpg"
        }
      }
    };
  },
  async created() {
    this.slug = this.$route.params.slug;
    let ownerUser = await axios({
      method: "post",
      url: "http://127.0.0.1:3841/profile",
      data: {
        token: this.$cookies.get("token")
      }
    });
    if (ownerUser.data.data.slug !== this.slug) {
      let data = await axios({
        method: "post",
        url: "http://127.0.0.1:3841/userInfo",
        data: {
          slug: this.slug
        }
      });
      this.visitUser = data.data;
      this.visitMode = true;
    }
  },
  watch: {
    file(val, old) {
      if (val.size > 23000) {
        this.$refs.file.value = null;
        alert("Image size must lower than 23000");
      }
      if (val && val != null) {
        const reader = new FileReader();
        reader.readAsDataURL(val);
        reader.onload = () => {
          this.post.data.previewPoster = reader.result;
        };
      }
    }
  },
  computed: {
    thisPost() {
      return {
        slug:
          "post-" +
          this.post.title
            .toLowerCase()
            .replace(/[`~!#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "")
            .replaceAll(" ", "-") +
          "-" +
          this.user.id +
          "-" +
          Date.now().toString(),
        title: this.post.title,
        token: this.$cookies.get("token"),
        action: this.post.id.length ? "update" : "create",
        content: this.post.content || "",
        type: "news",
        data: {
          section: this.post.data.section,
          previewPoster:
            this.file != null
              ? this.post.data.previewPoster
              : "https://img.freepik.com/free-vector/news-papers-communication-hanging-with-clips-illustration_24908-67082.jpg?size=626&ext=jpg"
        }
      };
    },
    user() {
      if (this.visitMode) return this.visitUser;
      return this.$store.state.user;
    },
    validation() {
      return this.editUser.name.length > 4 && this.editUser.name.length < 13;
    },
    previewNews() {
      return this.post.data.previewPoster;
    }
  },
  methods: {
    submitNews() {
      this.$apollo.mutate({
        mutation: updatePost,
        variables: {
          input: this.thisPost
        }
      });
    },
    changeEditMode(reset) {
      this.edit = !this.edit;
      if (reset) return;
      if (this.edit) {
        this.editUser = {
          image: this.user.image,
          name: this.user.name,
          password: "lemoncat",
          working: this.user.data.working
        };
      } else {
        const input = {
          ...this.editUser,
          action: "update",
          token: this.$cookies.get("token")
        };
        this.$apollo.mutate({
          mutation: updateUser,
          manual: true,
          variables: {
            input
          }
        });
        this.$store.dispatch("handleUpdateUser", {
          ...this.$store.state.user,
          name: this.editUser.name,
          data: {
            ...this.$store.state.user.data,
            working: this.editUser.working
          },
          image: this.editUser.image
        });
        alert("Profile have been Updated");
      }
    },
    onFile(file) {
      // console.log(file); // file object
    },

    onLoad(dataUri) {
      this.editUser.image = dataUri;
    },

    onChange() {
      console.log("New picture selected!");
      if (this.$refs.pictureInput.image) {
        console.log(this.$refs.pictureInput.image);
      } else {
        console.log("FileReader API not supported: use the <form>, Luke!");
      }
    },

    onSizeExceeded(size) {
      alert(
        `Image ${size}Mb size exceeds limits of ${this.customImageMaxSize}Mb!`
      );
    },

    closeEdit() {
      this.post = {
        id: "",
        title: "",
        content: "",
        action: "create",
        data: {
          section: "Critics Consensus",
          previewPoster:
            "https://img.freepik.com/free-vector/news-papers-communication-hanging-with-clips-illustration_24908-67082.jpg?size=626&ext=jpg"
        }
      };
    }
  },
  apollo: {
    getUserInfo: {
      query: getUserInfo,
      variables() {
        return {
          token: this.$cookies.get("token"),
          slug: this.slug
        };
      },
      result(res) {
        if (!this.first) return;
        this.first = false;
        this.reviews = res.data.getUserInfo.reviews;
        this.histories = res.data.getUserInfo.histories;
        this.news = res.data.getUserInfo.news;
        this.isLoading = false;
        document.title = this.user.name.toUpperCase() + " - LEMONCAT";
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
