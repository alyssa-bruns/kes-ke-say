import request from 'superagent'
import { group, member } from '../../models/group'

const rootUrl = '/api/v1/groups'

export async function getAllGroups(): Promise<group[]> {
  const res = await request.get(rootUrl)
  return res.body
}

export async function getGroupById(id: number): Promise<group> {
  const res = await request.get(`${rootUrl}/${id}`)
  return res.body
}

export async function getGroupMembersById(id: number): Promise<member[]> {
  const res = await request.get(`${rootUrl}/members/${id}`)
  return res.body
}
