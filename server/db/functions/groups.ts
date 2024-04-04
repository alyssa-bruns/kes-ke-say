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
  const members = await db('group_members')
    .join('users', 'group_members.user_id', 'users.id')
    .where({ group_id: id })
    .select(
      'users.id as id',
      'auth0_id as auth0Id',
      'username',
      'full_name as fullName',
      'location',
      'image',
      'group_id as groupId'
    )
  return members
}
