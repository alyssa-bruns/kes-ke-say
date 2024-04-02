//@vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import {
  render,
  waitFor,
  waitForElementToBeRemoved,
  within,
} from '@testing-library/react/pure'
import nock from 'nock'

import { renderRoute } from '../../test-utils.tsx'

nock.disableNetConnect()

const mockApiKey = '054d28f6b94c40ef8431da976fca149d'
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

describe('<News/>', () => {
  it('should show a loading indicator', async () => {
    const scope = nock('https://newsapi.org')
      .get(`/v2/top-headlines?country=fr&apiKey=${mockApiKey}`)
      .reply(200, mockNews)

    const { ...screen } = renderRoute('/news')

    const loading = await screen.findByText(/wait/i)
    expect(loading).toBeVisible()
    expect(scope.isDone()).toBe(false)
  })
  it('should show news articles', async () => {
    const scope = nock('https://newsapi.org')
      .get(`/v2/top-headlines?country=fr&apiKey=${mockApiKey}`)
      .reply(200, mockNews)

    const { ...screen } = renderRoute('/news')

    // await waitForElementToBeRemoved(() => screen.findByText(/wait/i))

    const list = await screen.findByRole('list')
    const listItems = within(list)
      .getAllByRole('listitem')
      .map((li) => li.textContent)
    expect(listItems).toMatchInlineSnapshot()
    expect(scope.isDone()).toBe(true)
  })
})
