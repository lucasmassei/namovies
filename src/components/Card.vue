<template>
  <div class="nm-card">
    <div class="nm-card__items">
      <div class="nm-card__image position-relative" :style="'background-image: url(' + movie.medium_cover_image + ')'">
        <button class="nm-card__favorite background-transparent border-none cursor-pointer position-absolute font-size-md" :class="cardClasses" @click="selectFavorite">
          <i v-if="useFavorite" class="fas fa-heart" />
        </button>
        <p class="nm-card__language position-absolute font-roboto regular font-size-sm">{{ movie.language }}</p>
      </div>
      <div class="flex justify-between align-items-center">
        <h2 class="nm-card__title font-arial regular font-size-lg">{{ movie.title }}</h2>
        <div class="flex">
          <i class="nm-card__star fas fa-star" />
          <p class="font-arial normal secondary-color">{{ movie.rating }}</p>
        </div>
      </div>
      <div class="flex font-roboto regular">
        <li v-for="(genre, index) in threeGenres" :key="'Genre' + index" class="nm-card__genre primary-color font-size-sm">{{ genre }}</li>
      </div>
      <div v-if="moreThreeGenres" class="flex font-roboto regular">
        <li v-for="(threeFirstGenre, index) in threeFirstGenres" :key="'threeFirstGenre' + index" class="nm-card__genre primary-color font-size-sm">{{ threeFirstGenre }}</li>
        <button class="nm-card__genre primary-color font-size-sm cursor-pointer" @click="viewMoreGenres"> {{ countOtherGenres }} </button>
      </div>
      <div v-if="viewOtherGenres" class="nm-card__other-genre flex font-roboto regular">
        <li v-for="(otherGenre, index) in otherGenres" :key="'otherGenre' + index" class="nm-card__genre primary-color font-size-sm">{{ otherGenre }}</li>
      </div>
      <div v-for="(torrent, index) in movie.torrents" :key="index" class="nm-card__info flex-align-center justify-between font-size-md">
        <div class="flex-align-center">
          <div class="flex-align-center">
            <button class="nm-card__downloadIcon background-transparent cursor-pointer border-none" @click="selectDownload">
              <i class="fas fa-arrow-circle-down terciary-color" />
            </button>
            <p class="nm-card__quality border-none font-arial">{{ torrent.quality }}</p>
          </div>
          <div class="flex-align-center nm-card__seed">
            <i class="fas fa-arrow-up terciary-color" />
            <p class="nm-card__seed-peer font-arial regular secondary-color">{{ torrent.seeds }}</p>
          </div>
          <div class="flex-align-center">
            <i class="fas fa-arrow-down quarternary-color" />
            <p class="nm-card__seed-peer font-arial regular secondary-color">{{ torrent.peers }}</p>
          </div>
        </div>
        <p class="font-arial regular secondary-color">{{ torrent.size }}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    movie: {
      type: Object,
      required: true
    },
    isFavorite: {
      type: Boolean
    },
    useFavorite: {
      type: Boolean,
      default: true
    },
    download: {
      type: Boolean
    }
  },

  data () {
    return {
      moreThreeGenres: false,
      viewOtherGenres: false
    }
  },

  computed: {
    cardClasses () {
      return {
        favoriteRed: this.isFavorite ? 'favoriteRed' : ''
      }
    },
    threeGenres () {
      var threeFirstGenres = []
      const genresLabel = this.movie.genres.length
      if (genresLabel <= 3) {
        for (var i = 0; i < this.movie.genres.length; i++) { threeFirstGenres.push(this.movie.genres[i]) }
      }
      return threeFirstGenres
    },
    threeFirstGenres () {
      var threeFirstOtherGenres = []
      const genresLabel = this.movie.genres.length
      if (genresLabel >= 3) {
        for (var i = 0; i < 3; i++) { threeFirstOtherGenres.push(this.movie.genres[i]) }
      }
      return threeFirstOtherGenres
    },
    otherGenres () {
      var otherGenres = []
      const genresLabel = this.movie.genres.length
      if (genresLabel >= 3) {
        for (var i = 3; i < this.movie.genres.length; i++) {
          otherGenres.push(this.movie.genres[i])
        }
      }
      return otherGenres
    },
    countOtherGenres () {
      var genresLabel = this.movie.genres.length
      if (genresLabel >= 3) {
        genresLabel = genresLabel - 3
      }
      return `+ ${genresLabel}`
    }
  },

  created () {
    this.checkGenres()
  },

  methods: {
    selectFavorite () {
      if (!this.isFavorite) {
        this.$emit('select-favorite', { ...this.movie })
      } else {
        this.$emit('select-favorite', this.movie.id)
      }
    },
    selectDownload () {
      if (!this.download) {
        this.$emit('select-download', { ...this.movie })
      }
    },
    checkGenres () {
      if (this.movie.genres.length > 3) {
        this.moreThreeGenres = true
      } else {
        this.moreThreeGenres = false
      }
    },
    viewMoreGenres () {
      if (this.viewOtherGenres) { this.viewOtherGenres = false } else { this.viewOtherGenres = true }
    }
  }
}
</script>

<style>
.nm-card {
  margin-top: 60px;
  min-width: 300px;
}

.nm-card__favorite {
  padding: 0px;
  right: 10px;
  top: 5px;
  color: #DFDFDF;
}

.favoriteRed {
  color: #FB0000 !important;
}

.nm-card__image {
  width: 100%;
  height: 440px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: block;
}

.nm-card__language {
  background-color: #fff;
  padding: 5px 10px;
  border: 1px solid #F26161;
  border-radius: 5px;
  color: #F26161;
  text-transform: uppercase;
  bottom: 5px;
  right: 5px;
}

.nm-card__items {
  max-width: 300px;
}

.nm-card__title {
  margin: 10px 0px;
  width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.nm-card__star {
  color: #D9CD0C;
  margin-right: 5px;
}

.nm-card__genre {
  margin-right: 15px;
  padding: 10px;
  border: 1px solid #3894FF;
  border-radius: 5px;
}

.nm-card__other-genre {
  margin-top: 5px;
}

.nm-card__info {
  margin: 30px 0px 20px 0px;
}

.nm-card__downloadIcon {
  font-size: 1.5em;
}

.nm-card__quality {
  margin: 0px 15px;
}

.nm-card__seed {
  margin-right: 10px;
}

.nm-card__seed-peer {
  margin-left: 5px;
}

</style>
