import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type SimplePokemon } from '@/pokemons'

interface PokemonsFavoriteState {
  favorites: Record<string, SimplePokemon>
}

// const getInitialState = (): PokemonsFavoriteState => {
//   const favorites = JSON.parse(localStorage.getItem('pokemons-favorites') ?? '{}')
//   console.log('favorites', favorites)
//   return favorites
// }

const initialState: PokemonsFavoriteState = {
  // ...getInitialState()
  favorites: {}
}

const pokemonsSlice = createSlice({
  name: 'pokemonsFavorites',
  initialState,
  reducers: {

    setFavoritePokemons(state, action: PayloadAction<Record<string, SimplePokemon>>) {
      state.favorites = action.payload
    },

    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload
      const { id } = pokemon

      if (state.favorites[id]) {
        const { [id]: removed, ...newFavorites } = state.favorites
        state.favorites = newFavorites
      } else {
        state.favorites[id] = pokemon
      }

      localStorage.setItem('pokemons-favorites', JSON.stringify(state.favorites))
    }

  }
})

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions

export default pokemonsSlice.reducer
