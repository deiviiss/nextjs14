'use client'

import Image from 'next/image'
import Link from 'next/link'
import { CiHeart } from 'react-icons/ci'
import { FaHeart } from 'react-icons/fa'
import { type SimplePokemon } from '@/pokemons'
import { useAppDispatch, useAppSelector } from '@/store'
import { toggleFavorite } from '@/store/pokemons/pokemonSlice'

export const PokemonCard = (pokemon: SimplePokemon) => {
  const { id, name } = pokemon
  const isFavorite = useAppSelector(state => !!state.pokemons.favorites[id])
  const dispatch = useAppDispatch()

  const onToggleFavorite = () => {
    dispatch(toggleFavorite(pokemon))
  }

  return (
    <>
      <div className="mx-auto right-0 mt-2 w-60">
        <div className="bg-white rounded overflow-hidden shadow-lg">
          <div className="flex flex-col items-center text-center p-6 bg-gray-800 border-b">
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              width={100}
              height={100}
              alt={pokemon.name}
            />
            <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{pokemon.name}</p>
            <p className="text-sm text-gray-100"># {id}</p>
            <div className="mt-5">
              <Link href={`/dashboard/pokemon/${name}`}
                className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
              >
                Más información
              </Link>
            </div>
          </div>
          <div className="border-b">
            <div
              onClick={onToggleFavorite}
              className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer" >

              <div className="text-red-600">
                {
                  isFavorite
                    ? <FaHeart />
                    : <CiHeart />
                }
              </div>
              <div className="pl-3">
                <p className="text-sm font-medium text-gray-800 leading-none">
                  {isFavorite
                    ? 'Esta en tus favoritos'
                    : 'Agregar a favoritos'
                  }
                </p>
                <p className="text-xs text-gray-500">Click para cambiar.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
