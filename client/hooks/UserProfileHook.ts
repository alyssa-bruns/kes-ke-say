import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { fetchOneProfile } from '../apis/userProfileApi'

// export function useFetchProfile() {
//   return useQuery({
//     queryKey: ['user'],
//     queryFn: async () => fetchOneProfile(username),
//   })
// }
