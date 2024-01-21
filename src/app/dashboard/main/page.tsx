import { GridWidget } from '@/components/'

export const metadata = {
  title: 'Admin dashboard',
  description: 'Admin dashboard'
}

export default function MainPage() {
  return (
    <div className="w-full text-center flex flex-col gap-2 my-2">
      <h1 className="font-semibold text-lg my-2">Página principal</h1>

      <GridWidget />
    </div>
  )
}
