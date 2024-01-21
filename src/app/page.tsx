import { redirect } from 'next/navigation'

export default function HomePage() {
  redirect('/dashboard/main')
  return (
    <>
      <h1>Home Page</h1>
    </>
  )
}
