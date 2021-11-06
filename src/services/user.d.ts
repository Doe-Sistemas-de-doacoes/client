export type UserProps = {
  id: number
  name: string
  profile: string
  user: string
  address?: AddressProps[]
}

export type AddressProps = {
  city: string
  id: number
  neighborhood: string
  number: number
  region: string
  state: string
  street: string
  userId: number
}

export type UserCreateProps = {
  user: string
  confirm_password: string
  password: string
  name: string
}
