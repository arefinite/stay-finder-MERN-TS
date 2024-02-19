import { SubmitHandler, useForm } from 'react-hook-form'
import { FaKey } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { LoginFormSchema, loginFormSchema } from '../../validators/FormSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import TextField from '../../components/form/TextField'
import { useLoginUser } from '../../services/mutations'

const Login = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormSchema>({ resolver: zodResolver(loginFormSchema) })

  const { mutate: loginMutate } = useLoginUser()

  const onSubmit: SubmitHandler<LoginFormSchema> = data => {
    loginMutate(data)
    reset()
  }
  return (
    <section className='absolute left-[50%] transform -translate-x-1/2 w-full md:w-[500px]'>
      <div className='mx-6 md:mx-0 shadow p-4'>
        <div className='flex gap-3 items-center justify-center'>
          <span>
            <FaKey className='text-2xl text-dark' />
          </span>
          <h1 className='text-dark'>Login to StayFinder</h1>
        </div>
        <form
          className='mt-8 flex flex-col gap-5'
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            type='email'
            placeholder='Enter your email'
            inputProps={register('email')}
            error={errors.email?.message}
          />
          <TextField
            type='password'
            placeholder='Enter your password'
            inputProps={register('password')}
            error={errors.password?.message}
          />

          <button className='button-medium-dark w-fit self-end'>Login</button>
        </form>
        <p className='text-right mt-4'>
          Do not have an account?{' '}
          <Link to='/register' className='text-light'>
            Register here
          </Link>{' '}
          for free!
        </p>
      </div>
    </section>
  )
}
export default Login
