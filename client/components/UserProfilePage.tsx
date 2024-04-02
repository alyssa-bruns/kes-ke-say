import { Link, useParams } from 'react-router-dom'
import { User } from '../../models/user'
import { useFetchProfile } from '../hooks/UserProfileHook'
// import * as api from '../apis/userProfileApi'
// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
// import { useState } from 'react'

function UserProfilePage() {
  const hardCode = [
    {
      id: 1,
      auth0Id: 'authID',
      username: 'usernameShaq',
      full_name: 'Ida Dapizza',
      location: 'location',
      image: 'image',
    },
  ]

  const dataArr = []

  // const params = useParams()
  // if (params.id == undefined) {
  //   throw new Error('Params.id is undefined')
  // }

  // const theProfile = hardCode.find((c) => c.username === params.id)
  // if (!theProfile) {
  //   throw new Error(`No user called: ${params.id}`)
  // }

  const { data: profile, isLoading, isError, error } = useFetchProfile('shaq')

  dataArr.push(profile)
  console.log(dataArr)

  // const {
  //   isLoading,
  //   isError,
  //   data: profile,
  //   error,
  // } = useQuery({
  //   queryKey: ['user', 'shaq'],
  //   queryFn: () => api.fetchOneProfile('shaq'),
  // })

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError || !profile) {
    return (
      <>
        {console.error(error)}
        <p>Error</p>
      </>
    )
  }
  return (
    <>
      <div key={profile.id}>
        <p>Full Name: {profile.fullName}</p>
        <p>Location: {profile.location}</p>
        <p> This is the page of user {profile.username}</p>
      </div>
    </>
  )
}

export default UserProfilePage
