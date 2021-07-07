<template>
  <div class="flex justify-center">
    <div class="container">
      <div class="nm-filter">
        <div class="position-relative flex">
          <input v-model="search" class="nm-filter__input font-roboto regular" placeholder="Pesquisar por nome" type="text" @keyup.enter="sendSearch">
          <button class="nm-filter__icon background-transparent cursor-pointer border-none position-absolute secondary-color font-size-lg" type="submit" @click="sendSearch">
            <i class="fas fa-search" />
          </button>
        </div>
        <ul class="flex align-items-center flex-wrap font-arial bold">
          <div v-for="(filter, index) in filterOptions" :key="index" class="nm-filter__items cursor-pointer position-relative secondary-color">
            <div class="flex" @click="toggleDropdownMenu(filter.type)">
              <li class="nm-filter__keydrop">{{ filter.label }}</li>
              <i class="nm-filter__drop fas fa-chevron-down font-size-md" />
            </div>
            <div v-if="checkSelectedDropdownMenu(filter.type)" class="nm-menudrop position-absolute">
              <ul class="font-arial bold primary-color">
                <li v-for="(option, index) in filter.options" :key="index" class="nm-menudrop__item cursor-pointer" @click="filterList(option.value, filter.type)">{{ option.label }}</li>
              </ul>
            </div>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      showMenu: false,
      movie: null,
      acao: {},
      search: ''
    }
  },

  computed: {
    filterOptions () {
      return [
        {
          type: 'genre',
          label: 'Genêro',
          options: [
            { label: 'Ação', value: 'action' },
            { label: 'Fantasia', value: 'fantasy' },
            { label: 'Terror', value: 'horror' },
            { label: 'Comédia', value: 'comedy' },
            { label: 'Suspense', value: 'suspense' }
          ]
        },
        {
          type: 'minimum_rating',
          label: 'Nota mínima',
          options: [
            { label: '0', value: '0' },
            { label: '1', value: '1' },
            { label: '2', value: '2' },
            { label: '3', value: '3' },
            { label: '4', value: '4' },
            { label: '5', value: '5' },
            { label: '6', value: '6' },
            { label: '7', value: '7' },
            { label: '8', value: '8' },
            { label: '9', value: '9' }
          ]
        },
        {
          type: 'quality',
          label: 'Qualidade',
          options: [
            { label: '720p', value: '720p' },
            { label: '1080p', value: '1080p' },
            { label: '2160p', value: '2160p' },
            { label: '3D', value: '3D' }
          ]
        },
        {
          type: 'sort_by',
          label: 'Ordenar por',
          options: [
            { label: 'Título', value: 'title' },
            { label: 'Ano', value: 'year' },
            { label: 'Notas', value: 'rating' },
            { label: 'Recentes', value: 'date_added' }
          ]
        }
      ]
    }
  },

  methods: {
    toggleDropdownMenu (menu) {
      this.showMenu = this.showMenu === menu ? false : menu
    },
    checkSelectedDropdownMenu (menu) {
      return this.showMenu === menu
    },
    checkForm () {
      if (this.movie) {
        return true
      }
    },
    sendSearch () {
      this.$emit('search', this.search)
    },
    filterList (value, type) {
      this.$emit('filterMovies', { value, type })
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
  padding: 10px;
  border-radius: 50%;
}

.nm-filter__input{
  padding: 15px 5px;
  flex: 1;
  border: 1px solid #DCE0E7;
}

.nm-filter__items {
  margin: 20px 80px 0px 0px;
}

.nm-filter__keydrop {
  margin-right: 10px;
}

.nm-filter__drop {
  align-self: center;
}

.nm-menudrop{
  background-color: #fff;
  width: 212px;
  border: 1px solid #BBBBBB;
  left: -50%;
  top: 25px;
  animation: fadeIn .2s backwards;
  z-index: 2;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translate3d(0px, 10px, 0px);
  }
  to {
    opacity: 1;
    transform: translate3d(0px, 0px, 0px);
  }
}

.nm-menudrop__item {
  padding: 21px 0px 19px 17px;
  border-bottom: 1px solid #BBBBBB;
}

.nm-menudrop__item:last-child {
  border-bottom: none;
}

.nm-menudrop__item:hover {
 background-color: #3088CA;
 color: #FFFFFF;
}
</style>
