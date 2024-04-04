import connection from '../connection'
import { group, member } from '../../../models/group'

const db = connection

export async function getAllGroups(): Promise<group[]> {
  const groups = await db('groups').select()
  return groups
}

export async function getGroupById(id: number): Promise<group[]> {
  const group = await db('groups').where({ id }).select().first()
  return group
}

export async function getGroupMembersById(id: number): Promise<member[]> {
  const members = await db('group_members').where({ group_id: id }).select()
  return members
}
