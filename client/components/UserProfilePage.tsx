import { Link } from 'react-router-dom'
import { User } from '../../models/user'
// import { useFetchProfile } from '../hooks/UserProfileHook'
import * as api from '../apis/userProfileApi'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

function UserProfilePage() {
  // const hardCode =
  //   {
  //     id: 1,
  //     auth0Id: 'authID',
  //     username: 'usernameShaq',
  //     full_name: 'Ida Dapizza',
  //     location: 'location',
  //     image: 'image',
  //   }
  // const { data: profiles, isPending, isError, error } = useFetchProfile()
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['user', 'shaq'],
    queryFn: () => api.fetchOneProfile('shaq'),
  })

  if (isPending) {
    return <p>Loading...</p>
  }

  if (isError) {
    return (
      <>
        {console.error(error)}
        <p>Error</p>
      </>
    )
  }

  const profile = data
  return (
    <>
      <p>profiles {profile}</p>
      <div key={profile.id}>
        <p>Username: {profile.username}</p>
        <p>Full Name: {profile.fullName}</p>
        <p>Location: {profile.location}</p>
        <p> This is the page of user {profile.id}</p>
      </div>
    </>
  )
}

export default UserProfilePage
