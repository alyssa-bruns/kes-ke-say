export interface group {
  id: number
  name: string
  image: string
}

export interface member {
  id: number
  user_id: {
    username: string
    fullName: string
    location: string
    image: string
  }
  group_id: number
}
