import { z } from 'zod'

// * registration form schema
export const registerFormSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: 'Name has to be at least 3 characters long' }),
    email: z.string().email({ message: 'Enter a valid email address' }),
    password: z
      .string()
      .min(6, { message: 'Password has to be at least 6 characters long' }),
    confirmPassword: z
      .string()
      .min(6, { message: 'Confirm password has to be same as password' }),
  })
  .refine(
    form => {
      return form.password === form.confirmPassword
    },
    {
      message: 'Password and confirm password are not matched',
      path: ['confirmPassword'],
    }
  )

export type RegisterFormSchema = z.infer<typeof registerFormSchema>


// * login from schema
export const loginFormSchema = z.object({
  email: z.string().email({ message: 'Enter a valid email address' }),
  password: z
    .string()
    .min(6, { message: 'Password has to be at least 6 characters long' }),
})

export type LoginFormSchema = z.infer<typeof loginFormSchema>
