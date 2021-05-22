<template>
  <div @mouseover="showMenu" @mouseleave="hideMenu">
    <a
      href="#"
      :class="{
        'title-text-hover': isVisible,
        'title-text': !isVisible
      }"
    >
      {{ name }}
    </a>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "Sample"
    }
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

  border: none;
  border-radius: 10px;
}
</style>
