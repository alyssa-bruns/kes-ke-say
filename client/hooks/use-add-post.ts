import { useMutation, useQueryClient } from '@tanstack/react-query'
import { NewPost } from '../../models/post.ts'
import { addPost } from '../apis/apiClient.posts.ts'

export default function useAddPost() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (newPost: NewPost) => addPost(newPost),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] })
    },
  })
}