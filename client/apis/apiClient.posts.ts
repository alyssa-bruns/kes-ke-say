import request from 'superagent'
import { NewPost, Post } from '../../models/post'

const root = '/api/v1/posts'

export async function getAllPosts(): Promise<Post[]> {
  const res = await request.get(root)
  return res.body
}

export async function getSinglePost(id: number) {
  const res = await request.get(`${root}/post/${id}`)
  return res.body
}

export async function addNewTodo(newPost: NewPost): Promise<void> {
  await request.post(root).send(newPost)
}
