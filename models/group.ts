export interface group {
  id: number
  name: string
  image: string
}

export interface member {
  id: number
  groupId: number
  auth0Id: string
  username: string
  fullName: string
  location: string
  image: string
}
