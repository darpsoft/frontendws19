import { favoritesConstans } from '../constants'
import { UPDATE_FAVORITES, ADD_FAVORITES } from '../actions'

export default (state = favoritesConstans, action) => {
  switch (action.type) {
    case ADD_FAVORITES:
      const arrFavorites = state.Countries
      const arrVerificado = arrFavorites.filter(e => e.CountryCode !== action.payload.CountryCode)
      const newFavorite = arrFavorites.length === arrVerificado.length ? [...arrFavorites, action.payload] : arrVerificado
      localStorage.setItem('FAVORITES', JSON.stringify(newFavorite))
      return { ...state, Countries: newFavorite }
    case UPDATE_FAVORITES:
      return { ...state, ...action.payload }
    default:
      return state
  }
}