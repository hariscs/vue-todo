export type User = {
  name?: string
  email: string
  id?: string
  token?: string
  password?: string
  confirmationPassword?: string
}

export type Todo = {
  id?: string
  title: string
  description: string
  completed?: boolean
}
