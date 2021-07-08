<template>
  <li class="mb-8">
    <span
      style="font-weight: bold;font-size:17px;margin-bottom:7px;margin-top:-10px"
      class="block text-black-800 flex items-center"
    >
      <slot name="header"></slot
    ></span>
    <div>
      <div v-if="flims">
        <p v-for="item of flims" :key="item.url">
          <b-link
            :href="item.url"
            style="width:100%;display: flex;margin-bottom:7px"
          >
            <img
              :src="item.icon"
              style="height:20px;width:20px;margin-right:5px"
            />
            <span style="margin-right:20px">{{ item.score }}</span>
            <span>{{ item.name }}</span>
          </b-link>
        </p>
      </div>
      <b-link style="display: flex;margin-top:20px;color:#007BFF" href="#"
        >View all</b-link
      >
    </div>
  </li>
</template>
<script>
import getFlims from "@/apollo/queries/getFlims.gql";
export default {
  props: {
    sortKey: {
      type: String,
      default: "DATE"
    }
  },
  data() {
    return {
      flims: []
    };
  },
  computed: {
    thisSortKey() {
      return this.sortKey;
    }
  },
  apollo: {
    flims: {
      query: getFlims,
      variables() {
        return {
          page: 1,
          size: 14,
          type: "movie",
          sortKey: this.thisSortKey
        };
      },
      result(result) {
        this.flims = result.data.flims;
        this.flims = this.flims.map(item => {
          return {
            url: "/m/" + item.slug,
            name:
              item.info.name.length > 24
                ? item.info.name.substring(0, 24) + "..."
                : item.info.name,
            score: item.lemonScore === -1 ? "_ _ _" : item.lemonScore + "%",
            icon: (() => {
              if (item.lemonScore >= 80)
                return "https://live.staticflickr.com/65535/51280469111_d17f4e62ea_o.png";
              else if (item.lemonScore >= 60 && item.lemonScore < 80)
                return "https://live.staticflickr.com/65535/51280643468_b13c69ff22_o.png";
              else if (item.lemonScore < 60 && item.lemonScore >= 0)
                return "https://live.staticflickr.com/65535/51278099823_29be28c9b3_o.png";
              else
                return "https://live.staticflickr.com/65535/51278655199_4ec122dafd_o.png";
            })()
          };
        });
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
