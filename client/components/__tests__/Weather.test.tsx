//@vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { waitForElementToBeRemoved } from '@testing-library/react/pure'
import nock from 'nock'

import { renderRoute } from '../../test-utils.tsx'

nock.disableNetConnect()

const mockWeather = { days: [{ temp: 12.6 }] }

describe('<Weather/>', () => {
  it('should show a loading indicator', async () => {
    const scope = nock('http://localhost')
      .get(`/api/v1/weather`)
      .reply(200, mockWeather)

    const { ...screen } = renderRoute('/')
    const loading = await screen.getByLabelText(/Loading/i)
    expect(loading).toBeVisible()
  })
  //
  it.todo('should show temperature', async () => {
    const scope = nock('http://localhost')
      .get(`/api/v1/weather`)
      .reply(200, mockWeather)

    const { ...screen } = renderRoute('/')

    const weatherTemp = await screen.findByText(/paris/i)
    expect(weatherTemp).toBeVisible()
    expect(scope.isDone()).toBe(true)
  })
  //
  it('should show an error', async () => {
    const scope = nock('http://localhost').get(`/api/v1/weather`).reply(500)

    const { ...screen } = renderRoute('/')

    await waitForElementToBeRemoved(() => screen.queryByLabelText(/loading/i))
    const error = screen.getByText(/No weather available/i)
    expect(error).toBeVisible()
    expect(scope.isDone()).toBe(true)
  })
})
