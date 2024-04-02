// const { data, isPending, isError, error } = useAnimals()

import { useQuery } from '@tanstack/react-query'
// import useNews from '../hooks/useNews.ts'
import { getNews } from '../apis/apiClient.ts'

export default function News() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['news'],
    queryFn: () => getNews(),
  })

  console.log({ data })

  return <h1>News</h1>
}
