import connection from '../connection'
import { Post } from '../../../models/post'

const db = connection

export async function getAllPosts(): Promise<Post[]> {
  const data = await db('posts')
    .join('users', 'users.id', 'posts.user_id')
    .select(
      'posts.id as postId',
      'posts.body as body',
      'posts.image as image',
      'posts.created_at as createdAt',
      'users.id as useId',
      'users.username as username'
    )
  return data
}
