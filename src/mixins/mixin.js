var mixin = {
  methods: {
    checkFavorite (id) {
      if (this.favorites.length) {
        return !!this.favorites.find(favorite => favorite.id === id)
      }
      return false
    }
  }

}

export {
  mixin
}
