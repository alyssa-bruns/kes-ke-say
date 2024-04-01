import connection from '../connection'
import { group } from '../../../models/group'

const db = connection

export async function getAllGroups(): Promise<group[]> {
  return db('groups').select()
}
