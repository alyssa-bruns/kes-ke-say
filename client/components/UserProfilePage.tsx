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
      <br></br>
      <div className="flex justify-end">
        <button className="btn-blue">View All Posts by User</button>{' '}
        <button className="btn-blue">View All Profiles</button>
      </div>
      <div className="profile-border" key={profile.id}>
        <img
          className="profile-image"
          src={`/public/images/avatars/${profile.image}`}
          alt="profilePicture"
        />
        <h4 className="profile-username">Username: {profile.username}</h4>
        <h3 className="profile-fullName">Full Name: {profile.fullName}</h3>
        <p className="profile-location">Location: {profile.location}</p>
        <button className="btn-blue">Edit Profile</button>
        <form>
          <div>
            <label>Bio </label>
            <input
              className="w-max h-max"
              placeholder="Enter your bio..."
            ></input>
          </div>
        </form>
        <p>
          <br />
          <br />
        </p>
      </div>
    </>
  )
}

export default UserProfilePage
