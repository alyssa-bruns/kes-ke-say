import { getAllPosts } from '../apis/apiClient.posts'
import { useQuery } from '@tanstack/react-query'

export function useGetAllPosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async () => getAllPosts(),
  })
}
