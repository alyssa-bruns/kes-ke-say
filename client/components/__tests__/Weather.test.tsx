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

const mockWeather = [{ id: 1, place: 'Paris' }]

describe('<News/>', () => {
  it('should show a loading indicator', async () => {
    const scope = nock('http://localhost')
      .get(`/api/v1/weather`)
      .reply(200, mockNews)

    const { ...screen } = renderRoute('/news')

    const loading = await screen.findByText(/wait/i)
    expect(loading).toBeVisible()
  })
  it('should show news articles', async () => {
    const scope = nock('http://localhost')
      .get(`/api/v1/weather`)
      .reply(200, mockNews)

    const { ...screen } = renderRoute('/news')

    const header1 = await screen.findByText(
      "Grippe aviaire : première mondiale, une personne infectée par une vache laitière - L'Indépendant"
    )
    expect(header1).toBeVisible()
    expect(scope.isDone()).toBe(true)
  })
})
