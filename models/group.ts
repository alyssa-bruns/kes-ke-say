export interface group {
  id: number
  name: string
  image: string
}

export interface member {
  id: number
  user_id: number
  group_id: number
}
