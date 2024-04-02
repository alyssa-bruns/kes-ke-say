// @vitest-environment jsdom
import '../../test-utils.tsx'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
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
    // expect(group.isDone()).toBe(true)
  })

  it.todo('show name and image', async () => {})
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
