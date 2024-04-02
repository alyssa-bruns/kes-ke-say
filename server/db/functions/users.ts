import connection from '../connection'
import { User } from '../../../models/user'

const db = connection

export async function getProfileByUsername(username: string): Promise<User[]> {
  const b = await db('users').where({ username }).select().first()
  return b
}
