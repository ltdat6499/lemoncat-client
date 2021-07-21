<script>
import axios from "axios";
export default {
  async created() {
    this.$cookies.set("token", this.$route.params.slug);
    let res = await axios({
      method: "post",
      url: "http://127.0.0.1:3841/profile",
      data: {
        token: this.$cookies.get("token")
      }
    });

    const user = {
      id: res.data.data.id,
      image: res.data.data.image,
      name: res.data.data.name,
      email: res.data.data.email,
      slug: res.data.data.slug,
      role: res.data.data.role,
      data: res.data.data.data
    };
    this.$store.dispatch("handleUpdateUser", user);
    // alert(JSON.stringify(this.$cookies.get("token")));
    this.$router.push("/");
  }
};
</script>
