import { describe, it, expect, beforeAll, beforeEach, afterAll } from 'vitest'
import connection from '../connection'
import * as db from '../functions/users'

beforeAll(async () => {
  return connection.migrate.latest()
})

beforeEach(async () => {
  await connection.seed.run()
})

describe('getProfileByUsername', () => {
  it('It should display a profile from its username', async () => {
    // Arrange / Act
    const singleProfile = await db.getProfileByUsername('shaq')
    const dummyData = {
      id: 3,
      auth0Id: 'auth0|345',
      username: 'shaq',
      fullName: 'Shaquille Oatmeal',
      location: 'Christchurch',
      image: 'ava-16.png',
    }
    // Assert
    expect(singleProfile).toStrictEqual(dummyData)
  })
})

afterAll(async () => {
  connection.destroy()
})
