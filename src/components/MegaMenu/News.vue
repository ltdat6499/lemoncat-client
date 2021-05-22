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
              ><span
                class="block font-weight-normal text-black-800  flex items-center"
              >
                24 Frames
              </span>
              <span
                class="block font-weight-normal text-black-800  flex items-center"
              >
                All-Time Lists
              </span>
              <span
                class="block font-weight-normal text-black-800  flex items-center"
              >
                Binge Guide
              </span>
              <span
                class="block font-weight-normal text-black-800  flex items-center"
              >
                Countdown
              </span>
              <span
                class="block font-weight-normal text-black-800  flex items-center"
              >
                Critics Consensus
              </span>
              <span
                class="block font-weight-normal text-black-800  flex items-center"
              >
                Five Favorite Films
              </span>
              <span
                class="block font-weight-normal text-black-800  flex items-center"
              >
                Now Streaming
              </span>
              <span
                class="block font-weight-normal text-black-800  flex items-center"
              >
                Parental Guidance
              </span>
              <span
                class="block font-weight-normal text-black-800  flex items-center"
              >
                Red Carpet Roundup
              </span>
              <span
                class="block font-weight-normal text-black-800  flex items-center"
              >
                Scorecards
              </span>
              <span
                class="block font-weight-normal text-black-800  flex items-center"
              >
                Sub-Cult
              </span>
              <span
                class="block font-weight-normal text-black-800  flex items-center"
              >
                Total Recall
              </span>
              <span
                class="block font-weight-normal text-black-800  flex items-center"
              >
                Video Interviews
              </span>
              <span
                class="block font-weight-normal text-black-800  flex items-center"
              >
                Weekend Box Office
              </span>
              <span
                class="block font-weight-normal text-black-800  flex items-center"
              >
                Weekly Ketchup
              </span>
              <span
                class="block font-weight-normal text-black-800  flex items-center"
              >
                What to Watch
              </span>
              <span
                class="block font-weight-normal text-black-800  flex items-center"
              >
                The Zeros
              </span>
            </li>
          </ul>
          <ul style="margin-left:-100px" class="w-full lg:w-1/4 ">
            <li class="mb-8">
              <div style="display: flex;align-items: baseline;">
                <span
                  style="display: flex;justify-content: flex-start;font-weight: bold;font-size:17px;margin-bottom:7px;margin-top:-10px"
                  class="block text-black-800 flex items-center"
                >
                  BEST AND WORST
                </span>
                <b-link
                  style="justify-content: flex-end;display: flex;color: rgb(0, 123, 255);"
                  href="#"
                  >View all</b-link
                >
              </div>

              <div style="margin-left:-20px">
                <news-menu-card />
                <news-menu-card />
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
                <news-menu-card />
                <news-menu-card />
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
                <news-menu-card />
                <news-menu-card />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
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
      isVisible: false,
      menuItems: null,
      focusedIndex: 0
    };
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
