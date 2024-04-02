import connection from '../connection'
import { User } from '../../../models/user'

const db = connection

export async function getProfileByUsername(username: string): Promise<User[]> {
  const b = await db('users').where({ username }).select(
    'id',
    'auth0_id as auth0Id',
    'username',
    'full_name as fullName',
    'location',
    'image',    
  ).first()
  return b
}

// export interface UserSnakeCase {
//   id?: number
//   auth0_id: string
//   username: string
//   full_name: string
//   location: string
//   image: string
// }

// export interface User {
//   id: number
//   auth0Id: string
//   username: string
//   fullName: string
//   location: string
//   image: string
// }

