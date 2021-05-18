<template>
  <div class="nm-filter">
    <div class="position-relative flex">
      <input class="nm-filter__input font-roboto-regular" placeholder="Pesquisar por nome" type="text" />
      <button class="nm-filter__icon position-absolute secondary-color">
        <i class="fas fa-search"></i>
      </button>
    </div>
    <ul class="flex font-arial-bold">
      <div class="nm-filter__items position-relative secondary-color">
        <div class="flex" @click="openDropdownMenu('gender')">
          <li class="nm-filter__keydrop">Gênero</li>
          <i class="nm-filter__drop fas fa-chevron-down"></i>
        </div>
        <div v-if="showMenu === 'gender'" class="nm-menudrop position-absolute">
          <ul class="font-arial-bold primary-color">
            <li class="nm-menudrop__item">Ação</li>
            <li class="nm-menudrop__item">Aventura</li>
            <li class="nm-menudrop__item">Fantasia</li>
            <li class="nm-menudrop__item">Comédia</li>
            <li class="nm-menudrop__item">Suspense</li>
        </ul>
        </div>
      </div>
      <div class="nm-filter__items secondary-color position-relative">
        <div class="flex" @click="openDropdownMenu('quality')">
          <li class="nm-filter__keydrop">Qualidade</li>
          <i class="nm-filter__drop fas fa-chevron-down"></i>
        </div>
        <div v-if="showMenu === 'quality'" class="nm-menudrop position-absolute">
          <ul class="font-arial-bold primary-color">
            <li class="nm-menudrop__item">Ação</li>
            <li class="nm-menudrop__item">Aventura</li>
            <li class="nm-menudrop__item">Fantasia</li>
            <li class="nm-menudrop__item">Comédia</li>
            <li class="nm-menudrop__item">Suspense</li>
        </ul>
        </div>
      </div>
      <div class="nm-filter__items secondary-color position-relative">
        <div class="flex" @click="openDropdownMenu('rate')">
          <li class="nm-filter__keydrop">Nota mínima</li>
          <i class="nm-filter__drop fas fa-chevron-down"></i>
        </div>
        <div v-if="showMenu === 'rate'" class="nm-menudrop position-absolute">
          <ul class="font-arial-bold primary-color">
            <li class="nm-menudrop__item">Ação</li>
            <li class="nm-menudrop__item">Aventura</li>
            <li class="nm-menudrop__item">Fantasia</li>
            <li class="nm-menudrop__item">Comédia</li>
            <li class="nm-menudrop__item">Suspense</li>
        </ul>
        </div>
      </div>
      <div class="nm-filter__items secondary-color position-relative">
        <div class="flex" @click="openDropdownMenu('order')">
          <li class="nm-filter__keydrop">Ordenar por</li>
          <i class="nm-filter__drop fas fa-chevron-down"></i>
        </div>
        <div v-if="showMenu === 'order'" class="nm-menudrop position-absolute">
          <ul class="font-arial-bold primary-color">
            <li class="nm-menudrop__item">Ação</li>
            <li class="nm-menudrop__item">Aventura</li>
            <li class="nm-menudrop__item">Fantasia</li>
            <li class="nm-menudrop__item">Comédia</li>
            <li class="nm-menudrop__item">Suspense</li>
        </ul>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showMenu: false
    }
  },

  methods: {
    openDropdownMenu (menu) {
      if (this.showMenu === menu) {
        this.showMenu = false
      } else {
        this.showMenu = menu
      }
    }
  }
}
</script>

<style>
.nm-filter {
  max-width: 810px;
  margin: 0 auto;
}

.nm-filter__icon {
  right: 20px;
  top: 2px;
  border: none;
  font-size: 1.25em;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
}

.nm-filter__input{
  padding: 15px 5px;
  flex: 1;
  border: 1px solid #DCE0E7;
}

.nm-filter__items {
  margin: 18px 80px 0px 0px;
  cursor: pointer;
}

.nm-filter__keydrop {
  margin-right: 10px;
}

.nm-filter__drop {
  align-self: center;
  font-size: .90em;
}

.nm-menudrop{
 width: 212px;
 border: 1px solid #BBBBBB;
 left: -50%;
 top: 25px;
}

.nm-menudrop__item {
  padding: 21px 0px 19px 17px;
  border-bottom: 1px solid #BBBBBB;
  cursor: pointer;
}

.nm-menudrop__item:last-child {
  border-bottom: none;
}

.nm-menudrop__item:hover {
 background-color: #3088CA;
 color: #FFFFFF;
}
</style>
