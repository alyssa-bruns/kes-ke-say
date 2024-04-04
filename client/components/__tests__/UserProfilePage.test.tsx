//@vitest-environment jsdom
import { describe, it, expect, beforeAll, afterEach, vi } from 'vitest'
import { renderRoute } from '../../test-utils'
import nock from 'nock'
import { waitForElementToBeRemoved } from '@testing-library/react'

beforeAll(() => {
  nock.disableNetConnect()
})

afterEach(() => {
  vi.clearAllMocks()
})

const mockData = {
  id: 3,
  auth0Id: 'auth0|345',
  username: 'shaq',
  fullName: 'Shaquille Oatmeal',
  location: 'Christchurch',
  image: 'ava-16.png',
}

describe('<UserProfilePage />', () => {
  it('Should show a users profile page', async () => {
    // Arrange / Act
    const scope = nock('http://localhost')
      .get('/api/v1/users/profiles/shaq')
      .reply(200, mockData)
    const screen = renderRoute('/profiles/shaq')

    const text = await screen.findByText(/Username: shaq/)
    // Assert
    expect(text).toBeVisible()
    expect(scope.isDone()).toBe(true)
  })
  it('Should return an error message', async () => {
    // Arrange / Act
    const scope = nock('http://localhost')
      .get('/api/v1/users/profiles/shaq')
      .reply(500)
    const screen = renderRoute('/profiles/shaq')

    await waitForElementToBeRemoved(() => screen.queryByText(/Loading.../i))
    // Assert
    const error = screen.getByText(/The username `shaq` does not exist./)
    expect(error).toBeVisible()
    expect(scope.isDone()).toBe(true)
  })
})
