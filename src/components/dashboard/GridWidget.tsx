'use client'

import { FiCoffee } from 'react-icons/fi'
import { SimpleWidget } from '@/components/'
import { useAppSelector } from '@/store'

// consultar store

// se requiere consultar el store para obtener el counter y este no se puede integrar a un arreglo
// const widgets = [
//   {
//     title: 'Contador',
//     subtitle: 'Vizualización',
//     icon: <FiCoffee size={50} />,
//     label: 'contador',
//     href: '/dashboard/counter'
//   }
// ]

export const GridWidget = () => {
  const count = useAppSelector(state => state.counter.count)
  return (
    <div className='flex flex-wrap gap-3'>

      {/* {
        widgets.map((widget) => (
          <SimpleWidget key={widget.title} {...widget} />
        ))
      } */}

      <SimpleWidget title={count} subtitle='Productos en el carrito' label='Contador' href='/dashboard/counter' icon={<FiCoffee size={50} />} />

    </div>
  )
}
