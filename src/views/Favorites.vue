<template>
  <div class="container flex flex-wrap justify-between">
    <nm-card v-for="(favorite, index) in favorites" :key="'movieFavorites' + index" :is-favorite="checkFavorite(favorite.id)" :movie="favorite" />
  </div>
</template>

<script>
import { mixin } from '../mixins/mixin'
export default {
  mixins: [mixin],
  data () {
    return {
      favorites: []
    }
  },

  created () {
    this.checkLocalStorage()
  },
  methods: {
    checkLocalStorage () {
      if (localStorage.getItem('favorites')) {
        this.favorites = JSON.parse(localStorage.getItem('favorites'))
      }
    }
  }

}
</script>

<style>

</style>
