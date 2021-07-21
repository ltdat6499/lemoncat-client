import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Login from "@/views/Login";
import Movie from "@/views/Movie";
import Movies from "@/views/Movies";
// import TvShow from "@/views/TvShow";
// import TvShowSeason from "@/views/TvShowSeason";
// import TvShowEpisode from "@/views/TvShowEpisode";
import Reviews from "@/views/Reviews";
import Post from "@/views/Post";
import Posts from "@/views/Posts";
import Tops from "@/views/Tops";
import DetailTop from "@/views/DetailTop";
import Person from "@/views/Person";
import User from "@/views/User";
import CallBack from "@/views/CallBack";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      meta: {
        requiresAuth: false
      },
      component: Home
    },
    {
      path: "/login",
      name: "Login",
      meta: {
        requiresAuth: false,
        notIncludeToken: true
      },
      component: Login
    },
    {
      path: "/l/:slug",
      name: "AfterLogin",
      meta: {
        requiresAuth: false,
      },
      component: CallBack
    },
    {
      path: "/m/:slug",
      name: "Movie",
      meta: {
        requiresAuth: false
      },
      component: Movie
    },
    {
      path: "/person/:slug",
      name: "Person",
      meta: {
        requiresAuth: false
      },
      component: Person
    },
    {
      path: "/m/list/:slug",
      name: "Movies",
      meta: {
        requiresAuth: false
      },
      component: Movies
    },
    // {
    //   path: "/tv/:slug",
    //   name: "TVShow",
    //   meta: {
    //     requiresAuth: false
    //   },
    //   component: TvShow
    // },
    // {
    //   path: "/tv/:slug/:season",
    //   name: "TVShow",
    //   meta: {
    //     requiresAuth: false
    //   },
    //   component: TvShowSeason
    // },
    // {
    //   path: "/tv/:slug/:season/:episode",
    //   name: "TVShow",
    //   meta: {
    //     requiresAuth: false
    //   },
    //   component: TvShowEpisode
    // },
    {
      path: "/m/:slug/reviews/",
      name: "TVReviews",
      meta: {
        requiresAuth: false
      },
      component: Reviews
    },
    {
      path: "/post/:slug",
      name: "Post",
      meta: {
        requiresAuth: false
      },
      component: Post
    },
    {
      path: "/posts/:slug",
      name: "Posts",
      meta: {
        requiresAuth: false
      },
      component: Posts
    },
    // {
    //   path: "/tags/:tag",
    //   name: "Tags",
    //   meta: {
    //     requiresAuth: false
    //   },
    //   component: Posts
    // },
    {
      path: "/top",
      name: "Top",
      meta: {
        requiresAuth: false
      },
      component: Tops
    },
    {
      path: "/top/:year/:genre",
      name: "DetailTop",
      meta: {
        requiresAuth: false
      },
      component: DetailTop
    },
    {
      path: "/user/:slug",
      name: "User",
      meta: {
        requiresAuth: false
      },
      component: User
    }
  ]
});
