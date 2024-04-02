//@vitest-environment jsdom

import {
  describe,
  it,
  expect,
  vi,
  beforeEach,
  afterEach,
  beforeAll,
} from 'vitest'
import {
  screen,
  waitFor,
  waitForElementToBeRemoved,
  within,
} from '@testing-library/react'
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

describe('<PostFeed/>', () => {
  it('should render some posts', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/posts')
      .reply(200, mockPosts)

    renderRoute('/')

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
})
