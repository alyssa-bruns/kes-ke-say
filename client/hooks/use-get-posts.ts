import { getAllPosts, getSinglePost } from '../apis/apiClient.posts'
import { useQuery } from '@tanstack/react-query'

export function useGetAllPosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async () => getAllPosts(),
  })
}

export function useGetSinglePost(id: number) {
  return useQuery({
    queryKey: ['posts', id],
    queryFn: async () => getSinglePost(id),
  })
}
