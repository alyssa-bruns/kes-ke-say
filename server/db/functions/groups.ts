import connection from '../connection'
import { group } from '../../../models/group'

const db = connection

export async function getAllGroups(): Promise<group[]> {
  const groups = await db('groups').select()
  return groups
}
