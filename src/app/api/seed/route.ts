import { NextResponse } from 'next/server'
import prisma from '@/libs/prisma'

export async function GET(request: Request) {
  await prisma.todo.deleteMany() // DELETE ALL todos

  await prisma.todo.createMany({
    data: [
      {
        decription: 'Piedra del alma', completed: true
      },
      {
        decription: 'Piedra del tiempo'
      },
      {
        decription: 'Piedra del poder'
      },
      {
        decription: 'Piedra del espacio'
      },
      {
        decription: 'Piedra de la realidad'
      }
    ]
  }
  )

  return NextResponse.json({ message: 'Executed seeded' })
}
