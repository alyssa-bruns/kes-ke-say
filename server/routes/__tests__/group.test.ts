import { it, expect, describe, vi } from 'vitest'
import nock from 'nock'
import request from 'supertest'
import * as db from '../../db/functions/groups'
import server from '../../server'

import { beforeAll, beforeEach, afterAll } from 'vitest'

import connection from '../../db/connection'

beforeAll(() => {
  return connection.migrate.latest()
})

beforeEach(async () => {
  await connection.seed.run()
})
vi.mock('../../db/functions/groups')

const mockGroups = [
  {
    id: 1,
    image: 'fries-darkgray.png',
    name: 'friendChips',
  },
  {
    id: 2,
    image: 'car-darkgray.png',
    name: 'The fast and the curious',
  },
  {
    id: 3,
    image: 'taco-darkgray.png',
    name: 'Taco bout it',
  },
]

describe('/groups', () => {
  it('should have a group', async () => {
    //Act
    const res = await request(server).get('/api/v1/groups')
    //Assert
    expect(res.statusCode).toBe(200)
    expect(mockGroups[1].name).toBe('The fast and the curious')
  })
  it('should be 404 when wrong route', async () => {
    const res = await request(server).get('/wrongurl')
    expect(res.statusCode).toBe(404)
  })

  it('should get 500 status code', async () => {
    vi.mocked(db.getAllGroups).mockRejectedValue(mockGroups)

    const res = await request(server).get('/api/v1/groups')

    expect(res.statusCode).toBe(500)
  })
})

afterAll(() => {
  connection.destroy()
})
