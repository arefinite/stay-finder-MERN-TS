import { createContext } from 'react'
import { useValidateUser } from '../../services/queries'

interface IAuthContext {
  isLoggedIn: boolean
}

const defaultValues = {
  isLoggedIn: false,
}

export const AuthContext = createContext<IAuthContext>(defaultValues)

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode
  }) => {
  const {isError} = useValidateUser()
  const contextValue = {
    isLoggedIn: !isError,
  }
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}
