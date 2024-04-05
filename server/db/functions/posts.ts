import connection from '../connection'
import { Post, PostOnly } from '../../../models/post'

const db = connection

export async function getAllPosts(): Promise<Post[]> {
  const data = await db('posts')
    .join('users', 'users.id', 'posts.user_id')
    .select(
      'posts.id as postId',
      'posts.body as body',
      'posts.image as image',
      'posts.created_at as createdAt',
      'users.id as userId',
      'users.username as username'
    )
  return data
}

export async function getSinglePost(id: number) {
  const data = await db('posts')
    .join('users', 'users.id', 'posts.user_id')
    .select(
      'posts.id as postId',
      'posts.body as body',
      'posts.image as image',
      'posts.created_at as createdAt',
      'users.id as userId',
      'users.username as username'
    )
    .where('postId', id)
  return data
}

export async function addPost(newPost: PostOnly) {
  const post = await db('posts').insert(newPost).returning('*')
  return post
}
