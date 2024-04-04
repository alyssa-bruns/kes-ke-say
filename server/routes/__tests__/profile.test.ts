import { it, expect, describe, vi } from 'vitest'
import request from 'supertest'
import * as db from '../../db/functions/users'
import server from '../../server'

vi.mock('../../db/functions/users')

const dummyData = [
  {
    id: 3,
    auth0Id: 'auth0|345',
    username: 'shaq',
    fullName: 'Shaquille Oatmeal',
    location: 'Christchurch',
    image: 'ava-16.png',
  },
]

describe('GET api/v1/users/profiles/:name', async () => {
  it('Should get data from username', async () => {
    vi.mocked(db.getProfileByUsername).mockResolvedValue(dummyData)

    const res = await request(server).get('/api/v1/users/profiles/shaq')

    expect(res.statusCode).toBe(200)
  })
  it('Should return an error message when its wrong', async () => {
    vi.mocked(db.getProfileByUsername).mockRejectedValue(dummyData)

    const res = await request(server).get('/api/v1/users/profiles/shaq')

    expect(res.statusCode).toBe(500)
  })
})
