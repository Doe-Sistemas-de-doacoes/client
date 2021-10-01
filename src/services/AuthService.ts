import { api } from './api'
import { UserProps } from './UserService'

export type LoginProps = {
  user: string
  password: string
}

export function login(props: LoginProps) {
  return api.post<UserProps>('/auth', props)
}
