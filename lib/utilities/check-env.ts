import { showError } from '../config/message/message.config'

export const checkIfEnvirontmentVariablesAreSet = (): boolean => {
  if (!process.env.NEXT_PUBLIC_CONNECTION_STRING) {
    showError({ message: 'Connection String is not defined' })
    return false
  }
  if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    showError({ message: 'Supabase anon key is not defined' })
    return false
  }
  if (!process.env.NEXT_PUBLIC_GENERATE_AVATAR) {
    showError({ message: 'Generate Avatar URL with dicebear is not defined' })
    return false
  }
  if (!process.env.NEXT_PUBLIC_DATABASE_URL) {
    showError({ message: 'Database URL is not defined' })
    return false
  }
  if (!process.env.NEXT_PUBLIC_RESEND_KEY) {
    showError({ message: 'Resend key for email is not defined' })
    return false
  }
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    showError({ message: 'Supabase URL is not defined' })
    return false
  }
  if (!process.env.NEXT_PUBLIC_UNSPLASH_API_KEY) {
    showError({ message: 'Unsplash API key is not defined' })
    return false
  }
  return true
}
