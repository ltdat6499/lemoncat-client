import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Login from "@/views/Login";
import Movie from "@/views/Movie";
import Movies from "@/views/Movies";
import TvShow from "@/views/TvShow";
import TvShowSeason from "@/views/TvShowSeason";
import TvShowEpisode from "@/views/TvShowEpisode";
import Reviews from "@/views/Reviews";
import Post from "@/views/Post";
import Posts from "@/views/Posts";
import Tops from "@/views/Tops";
import DetailTop from "@/views/DetailTop";


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
      path: "/m",
      name: "Movies",
      meta: {
        requiresAuth: false
      },
      component: Movies
    },
    {
      path: "/m/:slug",
      name: "MoviesTrending",
      meta: {
        requiresAuth: false
      },
      component: Movies
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
    },
    {
      path: "/post/:slug/",
      name: "Post",
      meta: {
        requiresAuth: false
      },
      component: Post
    },
    {
      path: "/posts",
      name: "Posts",
      meta: {
        requiresAuth: false
      },
      component: Posts
    },
    {
      path: "/tags/:tag",
      name: "Tags",
      meta: {
        requiresAuth: false
      },
      component: Posts
    },
    {
      path: "/top",
      name: "Top",
      meta: {
        requiresAuth: false
      },
      component: Tops
    },
    {
      path: "/top/detail",
      name: "DetailTop",
      meta: {
        requiresAuth: false
      },
      component: DetailTop
    }
  ]
});
