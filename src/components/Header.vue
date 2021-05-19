<template>
<div class="nm-header">
  <div class="container flex justify-between">
    <div class="flex align-items-center">
      <i class="nm-header__icon primary-color fas fa-film"></i>
      <h1 class="nm-header__title align-self-center font-arial bold primary-color">NaMovies</h1>
    </div>
    <ul class="flex align-self-center font-arial bold">
      <li v-for="(link, index) in navigationLinks" :key="index" class="nm-header__link" @click="placeLineOnLink(link.routeName)">
        <router-link class="primary-color" :to="{name: link.routeName}">{{ link.label }}</router-link>
        <hr v-if="checkSelectedNav(link.routeName)" class="nm-header__link-select">
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      showLine: false
    }
  },

  methods: {
    placeLineOnLink (nav) {
      this.showLine = nav
    },
    checkSelectedNav (nav) {
      return this.showLine === nav
    }
  },

  computed: {
    navigationLinks () {
      return [
        {
          routeName: 'MoviesList',
          label: 'Ver Todos'
        },
        {
          routeName: 'Downloads',
          label: 'Baixados'
        },
        {
          routeName: 'Favorites',
          label: 'Favoritos'
        }
      ]
    }
  },

  created () {
    this.placeLineOnLink('MoviesList')
  }
}
</script>

<style>
.nm-header {
  margin-bottom: 70px;
  padding: 20px 0px;
  box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.2);
}

.nm-header__icon {
  font-size: 2em;
  margin-right: 15px;
}

.nm-header__title {
  font-size: 1.25em;
}

.nm-header__link {
  font-size: 1em;
  padding: 10px;
  margin: 0px 20px;
}

.nm-header__link-select {
  height: 5px;
  width: 35px;
  margin: 0px auto;
  border-radius: 5px;
  border: none;
  background-color: #3088CA;
  animation: line .1s linear;
}

@keyframes line {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}

</style>
