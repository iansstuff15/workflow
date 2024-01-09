import { z } from 'zod'
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/

export const LoginFormSchema = z.object({
  email: z
    .string()
    .email()
    .describe('Email')
    .email({ message: 'Please enter a valid email' }),
  password: z
    .string()
    .describe('Password')
    .min(1, { message: 'Password is a required field' }),
  // .min(8, { message: 'Password must be at least 8 characters' })
  // .regex(
  //   passwordRegex,
  //   'Password is too weak, include upper and lower case letters, numbers and symbols',
  // ),
})

export const SignUpFormSchema = z.object({
  email: z
    .string()
    .email()
    .describe('Email')
    .email({ message: 'Invalid Email' }),
  password: z
    .string()
    .describe('Password')
    .min(8, { message: 'Password must be at least 8 characters' }),
  confirmPassword: z
    .string()
    .describe('Confirm Password')
    .min(8, { message: 'Password must be at least 8 characters' }),
})

export const ContactMeFormSchema = z.object({
  from: z
    .string()
    .describe('From')
    .describe('Message')
    .min(1, { message: 'From is a required field' })
    .min(5, { message: 'From must atleast 5 characters' }),

  subject: z
    .string()
    .describe('Subject')
    .describe('Message')
    .min(1, { message: 'Subject is a required field' })
    .min(5, { message: 'Subject must atleast 5 characters' }),
  message: z
    .string()
    .describe('Message')
    .min(1, { message: 'Message is a required field' })
    .min(5, { message: 'Message must atleast 5 characters' }),
})

export const RequestDemoFormSchema = z.object({
  receipient: z
    .string()
    .email()
    .describe('Email')
    .email({ message: 'Please enter a valid email' }),
  platform: z
    .string()
    .email()
    .describe('Email')
    .email({ message: 'Please enter a valid email' }),
})
