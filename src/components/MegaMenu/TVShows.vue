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
      TV Shows
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
                >NEW TV TONIGHT</span
              >
              <div>
                <div
                  v-for="i of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]"
                  :key="i"
                >
                  <p style="display: flex;margin-bottom:5px">
                    <img
                      src="../../icons/certified-fresh.svg"
                      style="height:20px;width:20px;margin-right:5px"
                    />
                    <span style="margin-right:20px">92%</span>
                    <span>Sample name ...</span>
                  </p>
                </div>
                <b-link
                  style="display: flex;margin-top:20px;color:#007BFF"
                  href="#"
                  >View all</b-link
                >
              </div>
            </li>
          </ul>
          <ul style="margin-left:-25px" class="w-full lg:w-1/4 ">
            <li class="mb-8">
              <span
                style="font-weight: bold;font-size:17px;margin-bottom:7px;margin-top:-10px"
                class="block text-black-800 flex items-center"
                >MOST POPULAR TV ON LC</span
              >
              <div>
                <div v-for="i of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" :key="i">
                  <p style="display: flex;margin-bottom:5px">
                    <img
                      src="../../icons/certified-fresh.svg"
                      style="height:20px;width:20px;margin-right:5px"
                    />
                    <span style="margin-right:20px">92%</span>
                    <span>Sample name ...</span>
                  </p>
                </div>
                <b-link
                  style="display: flex;margin-top:20px;color:#007BFF"
                  href="#"
                  >View all</b-link
                >
              </div>
            </li>
          </ul>
          <ul style="margin-left:-10px" class="w-full lg:w-1/4 ">
            <li class="mb-8">
              <span
                style="font-weight: bold;font-size:17px;margin-bottom:7px;margin-top:-10px"
                class="block text-black-800 flex items-center"
                >MORE</span
              ><span
                class="block font-weight-normal text-black-800  flex items-center"
              >
                Top TV Shows
              </span>
              <span
                class="block font-weight-normal text-black-800  flex items-center"
              >
                Certified Fresh TVs
              </span>
              <span
                class="block font-weight-normal text-black-800  flex items-center"
              >
                &nbsp;
              </span>
              <span
                style="font-weight: bold;font-size:17px;margin-bottom:7px;margin-top:-10px"
                class="block text-black-800 flex items-center"
                >EPISODIC REVIEWS</span
              >
              <div>
                <div v-for="i of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" :key="i">
                  <p style="display: flex;margin-bottom:5px">
                    <span>WandaVision: Season 5</span>
                  </p>
                </div>
              </div>
            </li>
          </ul>
          <ul style="margin-left:-25px" class="w-full lg:w-1/4 ">
            <li class="mb-8">
              <span
                style="font-weight: bold;font-size:17px;margin-bottom:7px;margin-top:-10px"
                class="block text-black-800 flex items-center"
                >CERTIFIED FRESH PICK</span
              >
              <div style="display:flex;">
                <fresh-pick-card style="margin-right:40px"></fresh-pick-card>
                <fresh-pick-card style="margin-right:40px"></fresh-pick-card
                >
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
</style>
