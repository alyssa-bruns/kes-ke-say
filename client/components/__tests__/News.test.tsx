//@vitest-environment jsdom
import { describe, it, expect, beforeAll } from 'vitest'
import {
  render,
  waitFor,
  waitForElementToBeRemoved,
  within,
} from '@testing-library/react/pure'
import nock from 'nock'

import { renderRoute } from '../../test-utils.tsx'

nock.disableNetConnect()

const mockNews = [
  {
    id: 1,
    title: `Grippe aviaire : première mondiale, une personne infectée par une
        vache laitière - L'Indépendant`,
    author: 'Jean Pierre',
    publishedAt: '2024-12-02',
    url: 'https://youtube.com',
  },
  {
    id: 2,
    title: `second title`,
    author: 'David',
    publishedAt: '2024-12-02',
    url: 'https://youtube.com',
  },
]

// beforeAll(() => {
//   nock.disableNetConnect()
// })

describe('<News/>', () => {
  it('should show a loading indicator', async () => {
    const scope = nock('http://localhost')
      .get(`/api/v1/external`)
      .reply(200, mockNews)

    const { ...screen } = renderRoute('/news')

    const loading = await screen.findByText(/wait/i)
    expect(loading).toBeVisible()
  })
  it('should show news articles', async () => {
    const scope = nock('http://localhost')
      .get(`/api/v1/external`)
      .reply(200, mockNews)

    const { ...screen } = renderRoute('/news')

    const header1 = await screen.findByText(
      "Grippe aviaire : première mondiale, une personne infectée par une vache laitière - L'Indépendant"
    )
    expect(header1).toBeVisible()
    expect(scope.isDone()).toBe(true)
  })
})
