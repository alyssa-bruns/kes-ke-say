export interface Post {
  postId: number
  userId: number
  body: string
  image: string
  createdAt: number
  username: string
}

export interface NewPost {
  body: string
  image: string
}

export interface PostOnly {
  id: number
  body: string
  image: string
  created_at: number
  user_id: number
}
