<template>
  <div @mouseover="showMenu" @mouseleave="hideMenu">
    <a
      href="#"
      :class="{
        'title-text-hover': isVisible,
        'title-text': !isVisible
      }"
      @focus="showMenu"
      @keydown.shift.tab="hideMenu"
      @keydown.esc.exact="hideMenu"
      @keydown.up.exact.prevent="startArrowKeys"
      @keydown.down.exact.prevent="startArrowKeys"
    >
      NEWS
    </a>

    <transition
      name="mega-menu-fade"
      style="display:flex;align-items: center; background-color:white"
    >
      <div
        v-show="isVisible"
        class="mega-menu absolute normal-case font-normal bg-white mt-4 w-full lg:w-160 z-30 lg:z-10 left-0"
      >
        <div class="flex flex-col lg:flex-row px-8 py-6 border-b -mx-4">
          <ul style="margin-left:25px" class="w-full lg:w-1/4 ">
            <li class="mb-8">
              <span
                style="font-weight: bold;font-size:17px;margin-bottom:7px;margin-top:-3px"
                class="block text-black-800 flex items-center"
                >COLUMNS</span
              >
              <b-link
                v-for="item of slugSections"
                :key="item"
                :href="item.slug"
                class="block font-weight-normal text-black-800  flex items-center"
              >
                {{ item.display }}
              </b-link>
            </li>
          </ul>
          <ul style="margin-left:-100px" class="w-full lg:w-1/4 ">
            <li class="mb-8">
              <div style="display: flex;align-items: baseline;">
                <span
                  style="display: flex;justify-content: flex-start;font-weight: bold;font-size:17px;margin-bottom:7px;margin-top:-10px"
                  class="block text-black-800 flex items-center"
                >
                  24 FRAMES
                </span>
                <b-link
                  style="justify-content: flex-end;display: flex;color: rgb(0, 123, 255);"
                  href="#"
                  >View all</b-link
                >
              </div>

              <div style="margin-left:-20px">
                <news-menu-card
                  v-for="item of result.frames"
                  :key="item.slug"
                  :slug="item.slug"
                  :src="item.data.previewPoster"
                  :name="item.title"
                />
              </div>
            </li>
          </ul>
          <ul style="margin-left:50px" class="w-full lg:w-1/4 ">
            <li class="mb-8">
              <div style="display: flex;align-items: baseline;">
                <span
                  style="display: flex;justify-content: flex-start;font-weight: bold;font-size:17px;margin-bottom:7px;margin-top:-10px"
                  class="block text-black-800 flex items-center"
                >
                  GUIDES
                </span>
                <b-link
                  style="justify-content: flex-end;display: flex;color: rgb(0, 123, 255);"
                  href="#"
                  >View all</b-link
                >
              </div>
              <div style="margin-left:-20px">
                <news-menu-card
                  v-for="item of result.guides"
                  :key="item.slug"
                  :slug="item.slug"
                  :src="item.data.previewPoster"
                  :name="item.title"
                />
              </div>
            </li>
          </ul>
          <ul style="margin-left:50px" class="w-full lg:w-1/4 ">
            <li class="mb-8">
              <div style="display: flex;align-items: baseline;">
                <span
                  style="display: flex;justify-content: flex-start;font-weight: bold;font-size:17px;margin-bottom:7px;margin-top:-10px"
                  class="block text-black-800 flex items-center"
                >
                  LC NEWS
                </span>
                <b-link
                  style="justify-content: flex-end;display: flex;color: rgb(0, 123, 255);"
                  href="#"
                  >View all</b-link
                >
              </div>
              <div style="margin-left:-20px">
                <news-menu-card
                  v-for="item of result.latest"
                  :key="item.slug"
                  :slug="item.slug"
                  :src="item.data.previewPoster"
                  :name="item.title"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import _ from "lodash";
import getMenuPosts from "@/apollo/queries/getMenuPosts.gql";
import NewsMenuCard from "@/components/NewsMenuCard";

export default {
  components: {
    NewsMenuCard
  },
  mounted() {
    this.menuItems = document.querySelectorAll(".mega-menu a");
  },
  data() {
    return {
      result: {
        frames: [],
        guides: [],
        latest: []
      },
      isVisible: false,
      menuItems: null,
      focusedIndex: 0,
      sections: _.sortBy([
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
      ])
    };
  },
  computed: {
    slugSections() {
      return this.sections.map(section => ({
        display: section,
        slug: "/posts/" + section.toLowerCase().replace(" ", "-")
      }));
    }
  },
  methods: {
    showMenu() {
      this.isVisible = true;
    },
    hideMenu() {
      this.isVisible = false;
      this.focusedIndex = 0;
    },
    startArrowKeys() {
      this.menuItems[0].focus();
    },
    focusPrevious(isArrowKey) {
      this.focusedIndex = this.focusedIndex - 1;
      if (isArrowKey) {
        this.focusItem();
      }
    },
    focusNext(isArrowKey) {
      this.focusedIndex = this.focusedIndex + 1;
      if (isArrowKey) {
        this.focusItem();
      }
    },
    focusItem() {
      this.menuItems[this.focusedIndex].focus();
    }
  },
  apollo: {
    menuPosts: {
      query: getMenuPosts,
      result(result) {
        this.result = result.data.menuPosts;
      }
    }
  }
};
</script>

<style src="@/assets/css/tailwind.css" scoped></style>
<style scoped>
.mega-menu-fade {
  border: none;
  z-index: -1;
}
.mega-menu-fade-enter-active,
.mega-menu-fade-leave-active {
  transition: all 0.1s ease-in-out;
}
.mega-menu-fade-enter,
.mega-menu-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

.title-text {
  color: white;
  font-weight: bold;
  font-size: 15px;
  padding: 15px;
  padding-bottom: 40px;
  padding-top: 15px;
  border: none;
}
.title-text-hover {
  color: #2a2c32;
  font-weight: bold;
  font-size: 15px;

  background-color: white;
  padding: 15px;
  padding-bottom: 40px;
  padding-top: 15px;

  border: none;
  border-radius: 10px;
}
</style>
