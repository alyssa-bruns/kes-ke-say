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

const mockWeather = [{ id: 1, place: 'Paris', temp: 12.6 }]

describe('<Weather/>', () => {
  it.todo('should show a loading indicator', async () => {
    const scope = nock('http://localhost')
      .get(`/api/v1/weather`)
      .reply(200, mockWeather)

    const { ...screen } = renderRoute('/weather')

    const loading = await screen.findByLabelText(/Loading/i)
    expect(loading).toBeVisible()
  })
  it.todo('should show temperature', async () => {
    const scope = nock('http://localhost')
      .get(`/api/v1/weather`)
      .reply(200, mockWeather)

    const { ...screen } = renderRoute('/weather')

    const weatherTemp = await screen.findByRole('paragraph')
    // const weatherTemp = await screen.findByText(/paris/i)
    expect(weatherTemp).toBeVisible()
    expect(scope.isDone()).toBe(true)
  })
  it.todo('should show an error', async () => {
    const scope = nock('http://localhost').get(`/api/v1/weather`).reply(500)

    const { ...screen } = renderRoute('/weather')

    await waitForElementToBeRemoved(() => screen.queryByLabelText(/loading/i))
    const error = screen.getByText(/Oops no weather/i)
    expect(error).toBeVisible()
    expect(scope.isDone()).toBe(true)
  })
})
