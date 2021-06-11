<template>
  <div>
    <b-tabs
      active-nav-item-class="font-weight-bold text-uppercase text-body"
      content-class="mt-3"
    >
      <b-tab
        style="margin-left:10px"
        title="IN THEATERS"
        :title-link-class="titleColor"
        active
      >
        <span style="display: flex;margin-bottom:10px"
          ><strong>OPENING</strong></span
        >
        <div v-for="i of [1, 2, 3, 4, 5]" :key="i">
          <p style="display: flex;margin-bottom:5px">
            <img
              src="../../../icons/certified-fresh.svg"
              style="height:20px;width:20px;margin-right:5px"
            />
            <span style="margin-right:30px"><strong>92%</strong></span>
            <span style="margin-right:30px">Sample name ...</span>
            <span>JUN 04</span>
          </p>
        </div>
        <b-link
          style="display: flex;margin-top:10px;color:#007BFF;text-decoration:none;"
          href="#"
          ><strong>View all</strong>
        </b-link>

        <span style="display: flex;margin-top:15px;margin-bottom:10px"
          ><strong>TOP BOX OFFICE</strong></span
        >
        <div>
          <p style="display: flex;margin-bottom:5px">
            <img
              src="../../../icons/certified-fresh.svg"
              style="height:20px;width:20px;margin-right:5px"
            />
            <span style="margin-right:30px"><strong>92%</strong></span>
            <span style="margin-right:30px">Sample name ...</span>
            <span>JUN 04</span>
          </p>
          <p style="display: flex;margin-bottom:5px">
            <img
              src="../../../icons/certified-fresh.svg"
              style="height:20px;width:20px;margin-right:5px"
            />
            <span style="margin-right:30px"><strong>92%</strong></span>
            <span style="margin-right:30px">Sample name ...</span>
            <span>JUN 04</span>
          </p>
          <p style="display: flex;margin-bottom:5px">
            <img
              src="../../../icons/certified-fresh.svg"
              style="height:20px;width:20px;margin-right:5px"
            />
            <span style="margin-right:30px"><strong>92%</strong></span>
            <span style="margin-right:30px">Sample name ...</span>
            <span>JUN 04</span>
          </p>
          <p style="display: flex;margin-bottom:5px">
            <img
              src="../../../icons/certified-fresh.svg"
              style="height:20px;width:20px;margin-right:5px"
            />
            <span style="margin-right:30px"><strong>92%</strong></span>
            <span style="margin-right:30px">Sample name ...</span>
            <span>JUN 04</span>
          </p>
          <p style="display: flex;margin-bottom:5px">
            <img
              src="../../../icons/certified-fresh.svg"
              style="height:20px;width:20px;margin-right:5px"
            />
            <span style="margin-right:30px"><strong>92%</strong></span>
            <span style="margin-right:30px">Sample name ...</span>
            <span>JUN 04</span>
          </p>
          <p style="display: flex;margin-bottom:5px">
            <img
              src="../../../icons/certified-fresh.svg"
              style="height:20px;width:20px;margin-right:5px"
            />
            <span style="margin-right:30px"><strong>92%</strong></span>
            <span style="margin-right:30px">Sample name ...</span>
            <span>JUN 04</span>
          </p>
          <p style="display: flex;margin-bottom:5px">
            <img
              src="../../../icons/certified-fresh.svg"
              style="height:20px;width:20px;margin-right:5px"
            />
            <span style="margin-right:30px"><strong>92%</strong></span>
            <span style="margin-right:30px">Sample name ...</span>
            <span>JUN 04</span>
          </p>
          <p style="display: flex;margin-bottom:5px">
            <img
              src="../../../icons/certified-fresh.svg"
              style="height:20px;width:20px;margin-right:5px"
            />
            <span style="margin-right:30px"><strong>92%</strong></span>
            <span style="margin-right:30px">Sample name ...</span>
            <span>JUN 04</span>
          </p>
          <p style="display: flex;margin-bottom:5px">
            <img
              src="../../../icons/certified-fresh.svg"
              style="height:20px;width:20px;margin-right:5px"
            />
            <span style="margin-right:30px"><strong>92%</strong></span>
            <span style="margin-right:30px">Sample name ...</span>
            <span>JUN 04</span>
          </p>
          <p style="display: flex;margin-bottom:5px">
            <img
              src="../../../icons/certified-fresh.svg"
              style="height:20px;width:20px;margin-right:5px"
            />
            <span style="margin-right:30px"><strong>92%</strong></span>
            <span style="margin-right:30px">Sample name ...</span>
            <span>JUN 04</span>
          </p>
        </div>
        <b-link
          style="display: flex;margin-top:10px;color:#007BFF;text-decoration:none;"
          href="#"
          ><strong>View all</strong>
        </b-link>
        <span style="display: flex;margin-top:15px;margin-bottom:10px"
          ><strong>COMING SOON</strong></span
        >
        <div v-for="i of [1, 2, 3, 4, 5]" :key="i">
          <p style="display: flex;margin-bottom:5px">
            <img
              src="../../../icons/certified-fresh.svg"
              style="height:20px;width:20px;margin-right:5px"
            />
            <span style="margin-right:30px"><strong>92%</strong></span>
            <span style="margin-right:30px">Sample name ...</span>
            <span>JUN 04</span>
          </p>
        </div>
        <b-link
          style="display: flex;margin-bottom:10px;margin-top:10px;color:#007BFF;text-decoration:none;"
          href="#"
          ><strong>View all</strong>
        </b-link>
      </b-tab>
      <b-tab
        style="margin-left:10px"
        title="STREAMING MOVIES"
        :title-link-class="titleColor"
        ><span style="display: flex;margin-top:15px;margin-bottom:10px"
          ><strong>MOST POPULAR</strong></span
        >
        <div v-for="i of [1, 2, 3, 4, 5]" :key="i">
          <p style="display: flex;margin-bottom:5px">
            <img
              src="../../../icons/certified-fresh.svg"
              style="height:20px;width:20px;margin-right:5px"
            />
            <span style="margin-right:30px"><strong>92%</strong></span>
            <span style="margin-right:30px">Sample name ...</span>
            <span>JUN 04</span>
          </p>
        </div>
        <b-link
          style="display: flex;margin-bottom:10px;margin-top:10px;color:#007BFF;text-decoration:none;"
          href="#"
          ><strong>View all</strong>
        </b-link></b-tab
      >
      <b-tab
        style="margin-left:10px"
        title="TV SHOWS"
        :title-link-class="titleColor"
      >
        <span style="display: flex;margin-bottom:10px"
          ><strong>NEW TV TONIGHT</strong></span
        >
        <div v-for="i of [1, 2, 3, 4, 5]" :key="i">
          <p style="display: flex;margin-bottom:5px">
            <img
              src="../../../icons/certified-fresh.svg"
              style="height:20px;width:20px;margin-right:5px"
            />
            <span style="margin-right:30px"><strong>92%</strong></span>
            <span style="margin-right:30px">Sample name ...</span>
            <span>JUN 04</span>
          </p>
        </div>
        <b-link
          style="display: flex;margin-top:10px;color:#007BFF;text-decoration:none;"
          href="#"
          ><strong>View all</strong>
        </b-link>

        <span style="display: flex;margin-top:15px;margin-bottom:10px"
          ><strong>MOST POPULAR TV ON LC</strong></span
        >
        <div v-for="i of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" :key="i">
          <p style="display: flex;margin-bottom:5px">
            <img
              src="../../../icons/certified-fresh.svg"
              style="height:20px;width:20px;margin-right:5px"
            />
            <span style="margin-right:30px"><strong>92%</strong></span>
            <span style="margin-right:30px">Sample name ...</span>
            <span>JUN 04</span>
          </p>
        </div>
        <b-link
          style="display: flex;margin-top:10px;color:#007BFF;text-decoration:none;"
          href="#"
          ><strong>View all</strong>
        </b-link>
        <span style="display: flex;margin-top:15px;margin-bottom:10px"
          ><strong>CERTIFIED FRESH TV</strong></span
        >
        <div v-for="i of [1, 2, 3, 4, 5]" :key="i">
          <p style="display: flex;margin-bottom:5px">
            <img
              src="../../../icons/certified-fresh.svg"
              style="height:20px;width:20px;margin-right:5px"
            />
            <span style="margin-right:30px"><strong>92%</strong></span>
            <span style="margin-right:30px">Sample name ...</span>
            <span>JUN 04</span>
          </p>
        </div>
        <b-link
          style="display: flex;margin-bottom:10px;margin-top:10px;color:#007BFF;text-decoration:none;"
          href="#"
          ><strong>View all</strong>
        </b-link>
      </b-tab>
    </b-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      titleColor: ["font-weight-bold", "text-secondary"]
    };
  }
};
</script>
<style scoped></style>
