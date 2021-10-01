import { api } from './api'

export type UserProps = {
  id: number
  user: string
  name: string
}

export type UserCreateProps = {
  name: string
  user: string
  password: string
}

export function createUser(user: UserCreateProps) {
  return api.post<UserProps>('/users', user)
}
