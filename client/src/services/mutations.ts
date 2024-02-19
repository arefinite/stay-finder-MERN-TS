import {
  InvalidateQueryFilters,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { loginUser, logoutUser, registerUser } from './api'
import { LoginFormSchema, RegisterFormSchema } from '../validators/FormSchema'
import toast from 'react-hot-toast'
import { isAxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'

export const useRegisterUser = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  return useMutation({
    mutationFn: (user: RegisterFormSchema) => registerUser(user),
    onSuccess: async data => {
      await queryClient.invalidateQueries(
        'invalidate-token' as InvalidateQueryFilters
      )
      toast.success(data.message)
      navigate('/')
    },
    onError: error => {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message)
      }
    },
  })
}

export const useLoginUser = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  return useMutation({
    mutationFn: (user: LoginFormSchema) => loginUser(user),
    onSuccess: async data => {
      await queryClient.invalidateQueries(
        'invalidate-token' as InvalidateQueryFilters
      )
      toast.success(data.message)
      navigate('/')
    },
    onError: error => {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message)
      }
    },
  })
}

export const useLogoutUser = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  return useMutation({
    mutationFn: logoutUser,
    onSuccess: async () => {
      await queryClient.invalidateQueries(
        'invalidate-token' as InvalidateQueryFilters
      )
      toast.success('Logout Successful')
      navigate('/')
    },
  })
}
