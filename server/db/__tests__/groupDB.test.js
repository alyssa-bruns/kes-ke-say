import * as db from '../functions/groups'
import { describe, it, expect, beforeAll, beforeEach, afterAll } from 'vitest'
import connection from '../connection'

beforeAll(() => {
  return connection.migrate.latest()
})

beforeEach(() => {
  return connection.seed.run()
})

// describe('FunctionName', () =>{
//   it.todo('what the function does', async () => {
//     //write test here

//     // arrange
//     // assert
//     // act
//   })
// })

describe('getAllGroups', () => {
  it('It should get all groups in the database', async () => {
    //write test here
    // arrange
    const AllGroups = await db.getAllGroups()
    // console.log(AllGroups, 'console log here')
    // assert

    // act
    expect(AllGroups).toHaveLength(3)
    expect(AllGroups[1].id).toBe(2)
  })
})

afterAll(() => {
  connection.destroy()
})
