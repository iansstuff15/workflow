export interface CreateUserRequest extends Request {
  data: [
    {
      email: string
      firstName: string
      lastName: string
      phone: string
      position: string
    },
  ]
}
