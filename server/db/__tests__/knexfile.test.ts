import config from '../knexfile'
import {
  describe,
  it,
  expect,
  vi,
  beforeAll,
  beforeEach,
  afterAll,
} from 'vitest'
import connection from '../connection'
import * as db from '../functions/users'
import { User, UserSnakeCase } from '../../../models/user'

describe('afterCreate PRAGMA', () => {
  it('enforces foreign keys (development)', () => {
    const cb = {}
    const db = { run: vi.fn() }
    config.development.pool.afterCreate(db, cb)
    expect(db.run).toHaveBeenCalledWith('PRAGMA foreign_keys = ON', cb)
  })
})

beforeAll(() => {
  return connection.migrate.latest()
})

beforeEach(() => {
  return connection.seed.run()
})

// TEMPLATE
// describe('functionName', () => {
//   it.todo('Explains what it should do', async () => {
//     // Arrange
//     // Act
//     // Assert
//   })
// })

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

// describe('deleteProfileById', () => {
//   it.todo('Deletes the selected profile by ID', async () => {
//     // Arrange
//     await db.deleteProfileById(2)

//     // Act
//     const allProfiles = await db.getAllProfiles()

//     // Assert
//     expect(allProfiles).toHaveLength(3)
//   })
// })

afterAll(() => {
  connection.destroy()
})
