import connection from '../connection'
import { Post } from '../../../models/post'

const db = connection

export function getAllPosts(): Promise<Post[]> {
  return db('posts').select()
}
