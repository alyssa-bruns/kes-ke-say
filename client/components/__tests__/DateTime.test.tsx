// @vitest-environment jsdom
import { describe, it, expect, beforeEach, vi, afterAll } from 'vitest'
import { renderRoute } from '../../test-utils'

beforeEach(() => {
  vi.useFakeTimers().setSystemTime(new Date('2024-01-01'))
})

afterAll(() => {
  vi.useRealTimers()
})

describe('<DateTimeDisplay/>', () => {
  it('should show date and time', async () => {
    const { ...screen } = renderRoute('/')
    const date = await screen.getByText(/Time in France:/i)
    const currentTime = new Date()
    expect(date.textContent).toContain(
      currentTime.toLocaleDateString('en-FR', { timeZone: 'CET' })
    )
  })
})
