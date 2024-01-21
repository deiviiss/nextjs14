import { type SimplePokemon, PokemonCard } from '@/pokemons'

interface PokemonGridProps {
  pokemons: SimplePokemon[]
}

export const PokemonGrid = ({ pokemons }: PokemonGridProps) => {
  return (
    <div className='flex flex-wrap gap-10 items-center justify-center'>
      {
        pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} {...pokemon} />
        )
        )
      }
    </div>
  )
}
