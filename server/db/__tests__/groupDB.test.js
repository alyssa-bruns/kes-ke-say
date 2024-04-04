import * as db from '../functions/groups'
import { describe, it, expect, beforeAll, beforeEach, afterAll } from 'vitest'
import connection from '../connection'

beforeAll(() => {
  return connection.migrate.latest()
})

beforeEach(() => {
  return connection.seed.run()
})

describe('getAllGroups', () => {
  it('It should get all groups in the database', async () => {
    const AllGroups = await db.getAllGroups()
    expect(AllGroups).toHaveLength(3)
    expect(AllGroups[1].id).toBe(2)
  })
})

afterAll(() => {
  connection.destroy()
})
