// const { data, isPending, isError, error } = useAnimals()

import { useQuery } from '@tanstack/react-query'
import useNews from '../hooks/useNews.ts'
import { getNews } from '../apis/apiClient.ts'
import { News, Source } from '../../models/news.ts'

export default function News() {
  const { data, isLoading, isError, error } = useNews()

  if (isLoading) {
    return <p>wait</p>
  }

  if (isError) {
    return <p>Oops</p>
  }

  console.log({ data })

  return (
    <div>
      <h1>News</h1>
      <ul>
        {' '}
        {data?.map((news: News) => (
          <li key={news.source.id}>{news.title}</li>
        ))}
      </ul>
    </div>
  )
}
