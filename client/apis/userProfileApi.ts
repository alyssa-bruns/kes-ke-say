import request from 'superagent'
import { User } from '../../models/user'

const rootUrl = '/api/v1/users'

export async function fetchOneProfile(username: string): Promise<User> {
  return await request.get(`${rootUrl}/profiles/${username}`).then((res) => {
    return res.body
  })
}
