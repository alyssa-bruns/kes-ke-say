import { useQuery } from '@tanstack/react-query'
import { getNews } from '../apis/apiClient'

export default function useNews() {
  const query = useQuery({
    queryKey: ['news'],
    queryFn: () => getNews(),
  })

  // console.log(query)

  return { ...query }
}
