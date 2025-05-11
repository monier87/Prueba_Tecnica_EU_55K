// services/users.ts
import { QueryFunctionContext } from '@tanstack/react-query'
import { User } from '../types.d'

export async function fetchUsers({
  pageParam = 1,
}: QueryFunctionContext<['users'], number>): Promise<{ users: User[]; nextCursor?: number }> {
  const response = await fetch(`https://randomuser.me/api?results=10&seed=midudev&page=${pageParam}`)
  const data = await response.json()
  return {
    users: data.results,
    nextCursor: pageParam < 10 ? pageParam + 1 : undefined // ejemplo de paginación
  }
}
