<template>
  <div>
    <nm-filter @filterMovies="filterMovieByValue" @search="filterMovieByName" />
    <div class="nm-movielist container flex flex-wrap justify-between">
      <nm-card v-for="(movie, index) in moviesList" :key="'movieCard' + index" :is-favorite="checkFavorite(movie.id)" :movie="movie" @select-download="handleDownload" @select-favorite="handleLike" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mixin } from '../mixins/mixin'

export default {
  mixins: [mixin],
  data () {
    return {
      moviesList: [],
      favorites: [],
      downloads: []
    }
  },
  created () {
    this.fetchMovies()
    this.favorites = JSON.parse(localStorage.getItem('favorites'))
  },

  methods: {
    fetchMovies () {
      axios.get('https://yts.mx/api/v2/list_movies.json')
        .then(({ data: { data } }) => {
          this.moviesList = data.movies
        })
    },
    handleLike (value) {
      if (Object.keys(value).length) { /* chaves de dentro do array, ver se o objeto ta populado */
        this.favorites.push(value)
        localStorage.setItem('favorites', JSON.stringify(this.favorites))
      } else {
        for (const key in this.favorites) { /* busca chaves e o for of busca valores */
          if (value === this.favorites[key].id) {
            this.favorites.splice(key, 1)
            localStorage.setItem('favorites', JSON.stringify(this.favorites))
          }
        }
      }
    },
    handleDownload (value) {
      if (localStorage.getItem('downloads')) {
        this.downloads = JSON.parse(localStorage.getItem('downloads'))
      }
      if (Object.keys(value).length) {
        this.downloads.push(value)
        localStorage.setItem('downloads', JSON.stringify(this.downloads))
      }
    },
    filterMovieByName (search) {
      axios.get(`https://yts.mx/api/v2/list_movies.json?query_term=${search}`)
        .then(({ data: { data } }) => {
          this.moviesList = data.movies
        })
    },
    filterMovieByValue (filter) {
      axios.get(`https://yts.mx/api/v2/list_movies.json?${filter.type}=${filter.value}`)
        .then(({ data: { data } }) => {
          this.moviesList = data.movies
        })
    }
  }
}
</script>

<style>

</style>
