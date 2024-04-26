import { ChangeEvent, useCallback, useState } from 'react'
import useAddPost from '../hooks/use-add-post'
import { useNavigate } from 'react-router-dom'

export function AddPost() {
  const [newPost, setNewPost] = useState('')
  const [newImage, setNewImage] = useState('')
  const [currentUser, setCurrentUser] = useState('')
  // const [timestamp, setTimestamp] = useState()
  const navigate = useNavigate()
  const mutation = useAddPost()

  const handleBodyChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPost(e.target.value)
  }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewImage(e.target.value)
  }

  const handleUserChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCurrentUser(e.target.value)
  }

  // const handleTimestamp = (e: ChangeEvent<HTMLSelectElement>) => {
  //   setTimestamp(Date.now())
  // }

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      mutation.mutate({ body: newPost, image: newImage, user_id: currentUser })
      setNewPost('')
      setNewImage('')
      navigate('/')
    },
    [mutation, newPost, newImage, navigate, currentUser]
  )

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <form onSubmit={handleSubmit}>
          <label htmlFor="user_id">Select User: </label>
          <select
            className="bg-grey-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="user_id"
            onChange={handleUserChange}
          >
            <option value="1">Paige</option>
            <option value="2">Ida</option>
            <option value="3">Shaq</option>
            <option value="4">Chris</option>
          </select>
          <br />
          <label htmlFor="body">Body Text: </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Say what you feel"
            onChange={handleBodyChange}
            value={newPost}
            id="body"
          ></input>
          <br />
          <label htmlFor="image">Image Link: </label>
          <input
            placeholder="Image link here"
            onChange={handleImageChange}
            value={newImage}
            id="image"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></input>
          <br />
          <button className="bg-blue-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            Send post
          </button>
        </form>
      </div>
    </>
  )
}
