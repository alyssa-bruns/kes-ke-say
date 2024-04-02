// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

import * as api from '../../apis/apiGroup.ts'

import App from '../../components/App.tsx'
import AllGroups from '../../components/AllGroups.tsx'

import '../../test-utils.tsx'
import { group } from '../../../models/group.ts'

vi.mock('../../apis/apiGroup.ts')

const fakeGroup = {
  id: 1,
  name: 'friendChips',
  image: 'fries-darkgray.png',
}

describe('allGroups', () => {
  it('should render the group name and image', async () => {
    //write test here
    // arrange
    vi.mocked(api.getAllGroups()).mockImplementation(async () => {
      return fakeGroup as group
    })

    // act
    render(<AllGroups />)
    // assert
    const loading = await screen.getByText('Loading...GroupPage')
    expect(loading).toBeVisible()
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
