import { type Metadata } from 'next'
import { FavoritePokemons } from '@/pokemons/components/FavoritePokemons'

export const metadata: Metadata = {
  title: 'Favoritos',
  description: 'Listado de pokémons favoritos.'
}

const FavoritePage = async () => {
  return (
    <div className='flex flex-col p-2'>

      <span className=' text-2xl my-2 gap-10 items-center justify-center'>Pokémons favoritos <small className='text-blue-500'>(estado global)</small></span>

      <FavoritePokemons />
    </div>
  )
}

export default FavoritePage
