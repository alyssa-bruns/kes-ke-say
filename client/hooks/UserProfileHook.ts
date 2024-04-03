import { useQuery } from '@tanstack/react-query'
import { fetchOneProfile } from '../apis/userProfileApi'

export function useFetchProfile(username: string) {
  return useQuery({
    queryKey: ['user'],
    queryFn: () => fetchOneProfile(username),
  })
}
