import connection from '../connection'
import { User } from '../../../models/user'

const db = connection

export async function getProfileByUsername(username: string): Promise<User[]> {
  const b = await db('users')
    .where({ username })
    .select(
      'id',
      'auth0_id as auth0Id',
      'username',
      'full_name as fullName',
      'location',
      'image'
    )
    .first()
  return b
}
