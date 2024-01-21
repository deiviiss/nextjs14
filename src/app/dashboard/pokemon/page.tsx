import { type Metadata } from 'next'
import { type PokemonsResponse, type SimplePokemon, PokemonGrid } from '@/pokemons'

export const metadata: Metadata = {
  title: 'Pokédex',
  description: 'Listado de 151 pokémons.'
}

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
  const data: PokemonsResponse = await response.json()

  const pokemons = data.results.map((pokemon) => {
    return {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      id: pokemon.url.split('/').at(-2)!,
      name: pokemon.name
      // image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`
    }
  })

  return pokemons
}

const PokemonsPage = async () => {
  const pokemons = await getPokemons(10)

  return (
    <div className='flex flex-col p-2'>

      <span className='text-3xl my-2 gap-10 items-center justify-center'>Listado de Pokémons <small>(estático)</small></span>

      <PokemonGrid pokemons={pokemons} />
    </div>
  )
}

export default PokemonsPage
