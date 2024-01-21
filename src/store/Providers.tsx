'use client'
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { setFavoritePokemons } from './pokemons/pokemonSlice'
import { type SimplePokemon } from '@/pokemons'
import { store } from '@/store'

type favoritePokemons = Record<string, SimplePokemon>

interface ProvidersProps {
  children: React.ReactNode
}

export const Providers = ({ children }: ProvidersProps) => {
  useEffect(() => {
    const favorites: favoritePokemons = JSON.parse(localStorage.getItem('pokemons-favorites') || '{}')

    store.dispatch(setFavoritePokemons(favorites))
  }, [])

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
