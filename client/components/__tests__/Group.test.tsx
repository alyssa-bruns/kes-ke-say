// @vitest-environment jsdom
import '../../test-utils.tsx'
import { describe, it, expect, beforeAll } from 'vitest'
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import nock from 'nock'
import { renderRoute } from '../../test-utils.tsx'

import * as api from '../../apis/apiGroup.ts'

import App from '../../components/App.tsx'
import AllGroups from '../../components/AllGroups.tsx'

const fakeGroups = [
  { id: 1, name: 'friendChips', image: 'fries-darkgray.png' },
  { id: 2, name: 'The fast and the curious', image: 'car-darkgray.png' },
  { id: 3, name: 'Taco bout it', image: 'taco-darkgray.png' },
]

beforeAll(() => {
  nock.disableNetConnect()
})

describe('allGroups', () => {
  it('should show loading state', async () => {
    //write test here
    // arrange
    const group = nock('http://localhost')
      .get('/api/v1/groups')
      .reply(200, fakeGroups)
    // act

    renderRoute('/groups')
    //  assert
    const loading = await screen.findByText('Loading...GroupPage')
    expect(loading).toBeVisible()
  })

  it('shows group image', async () => {
    // arrange

    const group = nock('http://localhost')
      .get('/api/v1/groups')
      .reply(200, fakeGroups)
    // act
    renderRoute('/groups')

    //  assert
    const groupImage = await screen.findByAltText('friendChips')
    expect(groupImage).toHaveAttribute(
      'src',
      '/images/icons/fries-darkgray.png'
    )
    // expect(group.isDone()).toBe(true)
  })

  it('shows group name', async () => {
    // arrange
    const group = nock('http://localhost')
      .get('/api/v1/groups')
      .reply(200, fakeGroups)
    // act
    renderRoute('/groups')

    //  assert
    const groupName = await screen.findByText('friendChips')
    expect(groupName).toBeVisible()
  })

  it('shows an error', async () => {
    const group = nock('http://localhost').get('/api/v1/groups').reply(500)

    renderRoute('/groups')

    await waitForElementToBeRemoved(() =>
      screen.queryByText(/Loading...GroupPage/i)
    )

    const error = await screen.findByText(/Error/i)

    expect(error).toBeVisible()
    expect(group.isDone()).toBe(true)
  })
})

// describe('componentName', () =>{
//   it.todo('what the component renders', async () => {
//     //write test here

//     // arrange
//     // act
//     // assert
//
//   })
// })
