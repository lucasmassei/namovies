<template>
  <div class="container flex flex-wrap justify-between">
    <nm-card v-for="(download, index) in moviesDownload" :key="'moviesDownload' + index" :movie="download" :use-favorite="false" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      moviesDownload: []
    }
  },
  created () {
    this.checkLocalStorage()
  },
  methods: {
    checkLocalStorage () {
      if (localStorage.getItem('downloads')) {
        this.moviesDownload = JSON.parse(localStorage.getItem('downloads'))
      }
    }
  }
}
</script>

<style>

</style>
