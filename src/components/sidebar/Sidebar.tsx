import Image from 'next/image'
import { FaCalculator, FaRegHeart } from 'react-icons/fa'
import { IoBrowsersOutline } from 'react-icons/io5'
import { TbPokeball } from 'react-icons/tb'
import { SideMenuItem } from './SideMenuItem'

export const Sidebar = () => {
  const navItems = [
    {
      path: '/dashboard/main',
      icon: <IoBrowsersOutline className='w-[20px] h-[20px]' />,
      title: 'Dashboard',
      subtitle: 'Vizualización'
    },
    {
      path: '/dashboard/counter',
      icon: <FaCalculator className='w-[20px] h-[20px]' />,
      title: 'Counter',
      subtitle: 'Contador Client Side'
    },
    {
      path: '/dashboard/pokemons',
      icon: <TbPokeball className='w-[20px] h-[20px]' />,
      title: 'Pokémon',
      subtitle: 'Generación de estática'
    },
    {
      path: '/dashboard/favorites',
      icon: <FaRegHeart className='w-[20px] h-[20px]' />,
      title: 'Favoritos',
      subtitle: 'Estado global'
    }
  ]
  return (
    <div id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-[400px] overflow-y-scroll" >
      <div id="logo" className="my-4 px-6">
        <h1 className="text-lg md:text-2xl font-bold text-white">Dash<span className="text-blue-500">8</span>.</h1>
        <p className="text-slate-500 text-sm">Maneja tus acciones y actividades</p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Bienvenido de vuelta,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image className="rounded-full w-8 h-8" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80" width={32} height={32} alt="" />
          </span>
          <span className="text-sm md:text-base font-bold">
            David Hilera
          </span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">

        {
          navItems.map((navItem) => (
            <SideMenuItem key={navItem.path} {...navItem} />
          ))
        }

      </div>
    </div >
  )
}
