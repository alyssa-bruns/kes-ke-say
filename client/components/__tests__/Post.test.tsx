//@vitest-environment jsdom

import { describe, it, expect, vi, afterEach, beforeAll } from 'vitest'
import { screen, waitForElementToBeRemoved } from '@testing-library/react'
import { renderRoute } from '../../test-utils.tsx'
import nock from 'nock'

const mockPosts = [
  {
    postId: 1,
    username: 'ida',
    body: 'blog body text post 1',
    image: 'url',
    userId: 34,
    createdAt: 2342343453,
  },
]

beforeAll(() => {
  nock.disableNetConnect()

  vi.spyOn(console, 'error').mockImplementation(() => {})
})

afterEach(() => {
  vi.clearAllMocks()
})

describe('<Post/>', () => {
  it('should a posts', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/posts/post/1')
      .reply(200, mockPosts)

    renderRoute('/post/1')

    const post = await screen.findByText('blog body text post 1')
    expect(post).toBeVisible()
    const time = await screen.findByRole('time')
    expect(time).toMatchInlineSnapshot(`
      <time
        class="text-sm text-gray-500"
        datetime="1970-01-28T02:39:03.453Z"
        role="time"
      >
        28/01/1970
      </time>
    `)

    expect(scope.isDone()).toBe(true)
  })
  it('should show an error message when there is an error', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/posts/post/1')
      .reply(500)

    renderRoute('/post/1')

    await waitForElementToBeRemoved(() =>
      screen.queryByText(/This page is loading.../i)
    )
    const error = screen.getByText(/Something went wrong sorry/i)
    expect(error).toBeVisible()
    expect(scope.isDone()).toBe(true)
  })
})
