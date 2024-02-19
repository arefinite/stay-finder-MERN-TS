import axios from 'axios'
import { LoginFormSchema, RegisterFormSchema } from '../validators/FormSchema'

const baseURL = import.meta.env.VITE_API_URL || '/api/v1'

const api = axios.create({
  baseURL,
})

export const registerUser = (user: RegisterFormSchema) => {
  return api
    .post('/auth/register', user, { withCredentials: true })
    .then(res => res.data)
    .catch(err => {
      throw err
    })
}

export const loginUser = (user: LoginFormSchema) => {
  return api
    .post('/auth/login', user, { withCredentials: true })
    .then(res => res.data)
    .catch(err => {
      throw err
    })
}

export const validateUser = () => {
  return api
    .get('/auth/validate-user', { withCredentials: true })
    .then(res => res.data)
    .catch(err => {
      throw err
    })
}

export const logoutUser = () => {
  return api.post('/auth/logout',null, {
    withCredentials: true,
  })
}
