import { Link, useParams } from 'react-router-dom'
import { User } from '../../models/user'
import { useFetchProfile } from '../hooks/UserProfileHook'
// import * as api from '../apis/userProfileApi'
// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
// import { useState } from 'react'

function UserProfilePage() {
  const params = useParams()
  const {
    data: profile,
    isLoading,
    isError,
    error,
  } = useFetchProfile(params?.username as string)

  if (params.username == undefined) {
    throw new Error('Params.username is undefined')
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError || !profile) {
    return (
      <>
        {console.error(error)}
        <p>The username `{params.username}` does not exist.</p>
      </>
    )
  }

  return (
    <>
      <div key={profile.id}>
        <img
          src={`/public/images/avatars/${profile.image}`}
          alt="profilePicture"
        />
        <h4>Username: {profile.username}</h4>
        <h3>Full Name: {profile.fullName}</h3>
        <p>Location: {profile.location}</p>
      </div>
    </>
  )
}

export default UserProfilePage
