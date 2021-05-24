<template>
  <div>
    <b-link style="text-decoration:none;display:flex;" :href="thisUrl">
      <img
        src="../../assets/img/sample-poster.png"
        style="height:100px;width:67px;margin-right:10px"
      />
      <div style="display:flex;align-items: flex-start;flex-direction: column;justify-content:center">
        <span style="margin-top:5px;color:black;font-weight:bold">{{ thisName }} <span style="color:#767B85">(2001)</span></span>
        <span style="margin-top:5px;color:black;">{{ thisActor }}</span>

        <div style="margin-top:5px;">
          <img
            src="../../icons/certified-fresh.svg"
            style="height:20px;width:20px;margin-right:5px"
          />
          <span style="color:black">{{ thisScore }}%</span>
        </div>
      </div>
    </b-link>
  </div>
</template>
<script>
export default {
  props: {
    url: {
      type: String,
      default: "#"
    },
    icon: {
      type: String,
      default: "../../icons/certified-fresh.svg"
    },
    src: {
      type: String,
      default: "../../assets/img/sample-poster.png"
    },
    name: {
      type: String,
      default: "Harry Potter and The Sorcerer's Stone"
    },
    actor: {
      type: String,
      default: "Daniel Radcliffe, Emma Charlotte Duerre Watson,..."
    },
    score: {
      type: Number,
      default: 92
    }
  },
  computed: {
    thisUrl() {
      return this.url;
    },
    thisIcon() {
      return this.icon;
    },
    thisSrc() {
      return this.src;
    },
    thisScore() {
      return this.score;
    },
    thisName() {
      return this.name;
    },
    thisActor() {
      return this.actor;
    }
  }
};
</script>
