export type UserProps = {
  id: number
  name: string
  user: string
  address?: AddressProps[]
}

export type AddressProps = {
  id: number
  city: string
  neighborhood: string
  number: string
  region: string
  state: string
  street: string
}

export type UserCreateProps = {
  user: string
  confirm_password: string
  password: string
  name: string
}
