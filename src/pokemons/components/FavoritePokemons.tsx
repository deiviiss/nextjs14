'use client'

import { CiHeart } from 'react-icons/ci'
import { PokemonGrid } from '..'
import { useAppSelector } from '@/store'

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector(state => Object.values(state.pokemons.favorites))

  return (
    <>
      {
        favoritePokemons.length > 0
          ? <PokemonGrid pokemons={favoritePokemons} />
          : <NoFavoritePokemons />
      }
    </>
  )
}

export const NoFavoritePokemons = () => {
  return (
    <div className='flex flex-col h-[50vh] items-center justify-center p-2'>
      <CiHeart size={100} className='text-red-500' />
      <span className='text-2xl text-center my-2'>No hay pokémons favoritos.</span>
    </div>
  )
}
