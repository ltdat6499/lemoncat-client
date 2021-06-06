import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Login from "@/views/Login";
import Movie from "@/views/Movie";
import TvShow from "@/views/TvShow";
import TvShowSeason from "@/views/TvShowSeason";
import TvShowEpisode from "@/views/TvShowEpisode";
import Reviews from "@/views/Reviews";

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
        requiresAuth: false
      },
      component: Login
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
      path: "/tv/:slug",
      name: "TVShow",
      meta: {
        requiresAuth: false
      },
      component: TvShow
    },
    {
      path: "/tv/:slug/:season",
      name: "TVShow",
      meta: {
        requiresAuth: false
      },
      component: TvShowSeason
    },
    {
      path: "/tv/:slug/:season/:episode",
      name: "TVShow",
      meta: {
        requiresAuth: false
      },
      component: TvShowEpisode
    },
    {
      path: "/tv/:slug/:season/:episode/reviews",
      name: "TVReviews",
      meta: {
        requiresAuth: false
      },
      component: Reviews
    }
  ]
});
