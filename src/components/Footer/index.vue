<template>
  <div style="background-color: #2A2C32;padding-bottom:5px">
    <b-row cols="12">
      <b-col class="column-style" lg="2">
        <b-link class="b-link" href="#">Help</b-link>
        <b-link class="b-link" href="#">About Lemoncat</b-link>
        <b-link class="b-link" href="#">What's the Lemoncat®?</b-link>
      </b-col>
      <b-col class="column-style" lg="2">
        <b-link class="b-link" href="#">Critic Submission</b-link>
        <b-link class="b-link" href="#">Licensing</b-link>
        <b-link class="b-link" href="#">Advertise</b-link>
        <b-link class="b-link" href="#">Careers</b-link>
      </b-col>
      <b-col class="column-style footer-news" lg="4">
        <span class="b-link" style="font-size:18px"
          ><v-icon dense style="color:white;">
            mdi-email
          </v-icon>
          JOIN THE NEWSLETTER</span
        >
        <span class="b-link"
          >Get the freshest reviews, news, and more delivered right to your
          inbox!</span
        >
        <b-button size="lg" class="b-link" variant="primary"
          >Join The Newsletter</b-button
        >
      </b-col>
      <b-col class="column-style" lg="2">
        <b-link class="b-link" href="#">FOLLOW US</b-link><br />
        <div style="display:flex;flex-direction: row;">
          <b-link style="text-decoration:none;margin-right:10px">
            <v-icon large dense style="color:white;">
              mdi-facebook
            </v-icon>
          </b-link>
          <b-link style="text-decoration:none;margin-right:10px">
            <v-icon large dense style="color:white;">
              mdi-snapchat
            </v-icon>
          </b-link>
          <b-link style="text-decoration:none;margin-right:10px">
            <v-icon large dense style="color:white;">
              mdi-instagram
            </v-icon>
          </b-link>
          <b-link style="text-decoration:none;margin-right:10px">
            <v-icon large dense style="color:white;">
              mdi-twitter
            </v-icon>
          </b-link>
        </div>
      </b-col>
    </b-row>
    <div style="display:flex;margin: 25px 20px 25px 20px;">
      <span style="color:#6D7A84;margin-right:30px">
        Copyright © Kaido Jin. All rights reserved.
      </span>
      <span
        style="margin-right:30px;padding-right:20px;border-right:1px solid #F8FFF8;color: #F8FFF8"
      >
        Privacy Policy
      </span>
      <span
        style="margin-right:30px;padding-right:20px;border-right:1px solid #F8FFF8;color: #F8FFF8"
      >
        Terms and Policies
      </span>
      <span
        style="margin-right:30px;padding-right:20px;border-right:1px solid #F8FFF8;color: #F8FFF8"
      >
        Do Not Sell My Info
      </span>
      <span style="margin-right:30px;padding-right:20px;color: #F8FFF8">
        AdChoices
      </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.column-style {
  margin: 25px 20px 25px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.b-link {
  color: #f8fff8;
  text-decoration: none;
  margin-bottom: 10px;
  font-weight: 600;
}
.footer-news {
  color: #f8fff8;
  text-decoration: none;
  margin-bottom: 10px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
