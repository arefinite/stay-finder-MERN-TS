import { SubmitHandler, useForm } from 'react-hook-form'
import { FaLock } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {
  RegisterFormSchema,
  registerFormSchema,
} from '../../validators/FormSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import TextField from '../../components/form/TextField'
import { useRegisterUser } from '../../services/mutations'

const Register = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormSchema>({ resolver: zodResolver(registerFormSchema) })

  const { mutate: registerMutate } = useRegisterUser()

  const onSubmit: SubmitHandler<RegisterFormSchema> = data => {
    registerMutate(data)
    reset()
  }
  return (
    <section className='absolute left-[50%] transform -translate-x-1/2 w-full md:w-[500px]'>
      <div className='mx-6 md:mx-0 shadow p-4'>
        <div className='flex gap-3 items-center justify-center '>
          <span>
            <FaLock className='text-2xl text-dark' />
          </span>
          <h1 className='text-dark'>Register to StayFinder</h1>
        </div>
        <form
          className='mt-8 flex flex-col gap-5'
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            type='text'
            placeholder='Enter your name'
            inputProps={register('name')}
            error={errors.name?.message}
          />
          <TextField
            type='email'
            placeholder='Enter your email address'
            inputProps={register('email')}
            error={errors.email?.message}
          />
          <TextField
            type='password'
            placeholder='Enter your password'
            inputProps={register('password')}
            error={errors.password?.message}
          />
          <TextField
            type='password'
            placeholder='Retype your password'
            inputProps={register('confirmPassword')}
            error={errors.confirmPassword?.message}
          />
          <button className='button-medium-dark w-fit self-end'>
            Register
          </button>
        </form>
        <p className='text-right mt-4'>
          Already have an account?{' '}
          <Link to='/login' className='text-light'>
            Login here
          </Link>{' '}
          instead.
        </p>
      </div>
    </section>
  )
}
export default Register
