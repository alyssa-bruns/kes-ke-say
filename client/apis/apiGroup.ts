import request from 'superagent'
import { group } from '../../models/group'

const rootUrl = '/api/v1/groups'

export async function getAllGroups(): Promise<group[]> {
  const res = await request.get(rootUrl)
  return res.body
}

export async function getGroupById(id): Promise<group> {
  const res = await request.get(`${rootUrl}/${id}`)
  return res.body
}
