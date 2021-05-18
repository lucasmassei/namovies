<template>
  <div class="container nm-header flex justify-between">
    <div class="flex">
    <i class="nm-header__icon primary-color fas fa-film"></i>
    <h1 class="nm-header__title align-self-center font-arial-bold primary-color">NaMovies</h1>
    </div>
    <ul class="flex align-self-center font-arial-bold">
      <li class="nm-header__link"><router-link class="primary-color" :to="{name: 'MoviesList'}">Ver todos</router-link></li>
      <li class="nm-header__link"><router-link class="primary-color" :to="{name: 'Downloads'}">Baixados</router-link></li>
      <li class="nm-header__link"><router-link class="primary-color" :to="{name: 'Favorites'}">Meus favoritos</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.nm-header {
  margin-bottom: 68px;
  padding: 35px 0px;
}

.nm-header__icon {
  font-size: 3.5em;
  margin-right: 13px;
}

.nm-header__title {
  font-size: 1.75em;
}

.nm-header__link {
  font-size: 1em;
  padding: 10px;
  margin: 0px 20px;
}
</style>
