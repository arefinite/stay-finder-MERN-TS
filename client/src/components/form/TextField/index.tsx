interface ITextField {
  type: 'password' | 'text' | 'email'
  placeholder: string
  inputProps: unknown
  error?: string
}

const TextField = ({ type, placeholder, inputProps, error }: ITextField) => {
  return (
    <div className='space-y-1'>
      <input
        type={type}
        className='text-field'
        placeholder={placeholder}
        {...(inputProps ?? {})}
      />
      {error && <p className='ml-1 error-text'>{error}</p>}
    </div>
  )
}
export default TextField
