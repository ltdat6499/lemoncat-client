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
      MOVIES
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
                style="font-weight: bold;font-size:17px;margin-bottom:7px;margin-top:-10px"
                class="block text-black-800 flex items-center"
                >MOVIES IN THEATERS</span
              ><b-link
                href="/m/list/opening_this_week"
                class="block font-weight-normal text-black-800  flex items-center my-b-link"
              >
                Opening This Week
              </b-link>
              <b-link
                href="/m/list/top_box_office"
                class="block font-weight-normal text-black-800  flex items-center my-b-link"
              >
                Top Box Office
              </b-link>
              <b-link
                href="/m/list/coming_soon"
                class="block font-weight-normal text-black-800  flex items-center my-b-link"
              >
                Coming Soon to Theaters
              </b-link>
              <b-link
                href="/m/list/weekend_earnings"
                class="block font-weight-normal text-black-800  flex items-center my-b-link"
              >
                Weekend Earnings
              </b-link>
              <b-link
                href="/m/list/certified_fresh"
                class="block font-weight-normal text-black-800  flex items-center my-b-link"
              >
                Certified Fresh Movies
              </b-link>
            </li>
          </ul>
          <ul style="margin-left:-50px" class="w-full lg:w-1/4 ">
            <li class="mb-8">
              <span
                style="font-weight: bold;font-size:17px;margin-bottom:7px;margin-top:-10px"
                class="block text-black-800 flex items-center"
                >ON DVD & STREAMING</span
              ><b-link
                href="/m/list/netflix"
                class="block font-weight-normal text-black-800  flex items-center my-b-link"
              >
                Netflix
              </b-link>
              <b-link
                href="/m/list/amazon_prime_video_us"
                class="block font-weight-normal text-black-800  flex items-center my-b-link"
              >
                Amazon Prime
              </b-link>
              <b-link
                href="/m/list/disney"
                class="block font-weight-normal text-black-800  flex items-center my-b-link"
              >
                Disney+
              </b-link>
              <b-link
                href="/m/list/hbo_max"
                class="block font-weight-normal text-black-800  flex items-center my-b-link"
              >
                HBO Max
              </b-link>
              <b-link
                href="/m/list/all_streaming"
                class="block font-weight-normal text-black-800  flex items-center my-b-link"
              >
                Certified Fresh Movies
              </b-link>
            </li>
          </ul>
          <ul style="margin-left:-50px" class="w-full lg:w-1/4 ">
            <li class="mb-8">
              <span
                style="font-weight: bold;font-size:17px;margin-bottom:7px;margin-top:-10px"
                class="block text-black-800 flex items-center"
                >MORE</span
              ><b-link
                href="/m/list/top"
                class="block font-weight-normal text-black-800  flex items-center my-b-link"
              >
                Top Movies
              </b-link>
              <b-link
                href="/m/list/opening_soon"
                class="block font-weight-normal text-black-800  flex items-center my-b-link"
              >
                New Trailers
              </b-link>
            </li>
          </ul>
          <ul style="margin-left:-90px" class="w-full lg:w-1/4 ">
            <li class="mb-8">
              <span
                style="font-weight: bold;font-size:17px;margin-bottom:7px;margin-top:-10px"
                class="block text-black-800 flex items-center"
                >CERTIFIED FRESH PICK</span
              >
              <div style="display:flex;">
                <fresh-pick-card style="margin-right:20px"></fresh-pick-card>
                <fresh-pick-card style="margin-right:20px"></fresh-pick-card
                ><fresh-pick-card style="margin-right:20px"></fresh-pick-card>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import FreshPickCard from "@/components/FreshPickCard";
export default {
  components: {
    FreshPickCard
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
.my-b-link:hover {
  color: #3a8beb;
}
</style>
