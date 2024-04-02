import { it, expect, describe } from 'vitest'

import request from 'supertest'

import server from '../../server'

import { beforeAll, beforeEach, afterAll } from 'vitest'

import connection from '../../db/connection'

beforeAll(() => {
  return connection.migrate.latest()
})

beforeEach(async () => {
  await connection.seed.run()
})

describe('/groups', () => {
  it('should have a group', async () => {
    //Act
    const res = await request(server).get('/api/v1/groups')
    console.log(res.body[0].name)
    //Assert
    expect(res.statusCode).toBe(200)
    expect(res.body).toMatchInlineSnapshot(`
      [
        {
          "id": 1,
          "image": "fries-darkgray.png",
          "name": "friendChips",
        },
        {
          "id": 2,
          "image": "car-darkgray.png",
          "name": "The fast and the curious",
        },
        {
          "id": 3,
          "image": "taco-darkgray.png",
          "name": "Taco bout it",
        },
      ]
    `)
    // toBe('The fast and the curious')
  })
  it('should be 404 when wrong route', async () => {
    const res = await request(server).get('/wrongurl')
    expect(res.statusCode).toBe(404)
  })
})

afterAll(() => {
  connection.destroy()
})
