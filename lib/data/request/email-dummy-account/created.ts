export interface CreateEmailDummyAccountRequest extends Request {
  email: string
  firstName: string
  lastName: string
  generatedEmail: string
  generatedPassword: string
}
