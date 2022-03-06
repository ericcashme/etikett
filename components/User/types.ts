type User = {
  id: string
  name: string
  roles: string[]
}

export type UserProps = {
  size: 'medium' | 'large'
  image: string
  user: User
  hasRole: boolean
  isAvailable: boolean
  unavailableImage?: string
  removeUser?: (user: User) => void
}
