import { beforeEach, expect } from 'vitest'
import { cleanup, render } from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'
import '@testing-library/jest-dom/vitest'

import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { routes } from '../routes.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

beforeEach(cleanup)
expect.extend(matchers)

export function renderRoute(location: string) {
  // setup user (can be skipped if not using userEvents)
  const user = userEvent.setup()

  // setup router
  const router = createMemoryRouter(routes, {
    initialEntries: [location],
  })

  // setup useQuery (retry set to false for testing)
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })

  // render router and queryClientProvider to container
  const container = render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
  return { user, ...container }
}
