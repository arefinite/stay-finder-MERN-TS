import { RiHotelFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthContext'
import { useLogoutUser } from '../../../services/mutations'
import { useContext } from 'react'

const Header = () => {
  const { isLoggedIn } = useContext(AuthContext)
  const { mutate: logoutMutate } = useLogoutUser()
  const handleLogout = () => {
    logoutMutate()
  }
  return (
    <header className='h-20 shadow'>
      <section className='wrapper flex justify-between items-center h-full'>
        <Link to='/'>
          <div className='flex gap-2 items-center'>
            <span>
              <RiHotelFill className='text-3xl text-dark' />
            </span>
            <h1 className='text-dark'>StayFinder</h1>
          </div>
        </Link>

        <div className='flex items-center gap-6'>
          {isLoggedIn && (
            <ul className='flex space-x-6 text-dark'>
              <li>My Hotel</li>
              <li>My Hotel</li>
            </ul>
          )}
          {isLoggedIn ? (
            <button className='button-medium-dark' onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link to='/register'>
              <button className='button-medium-dark '>Register/Login</button>
            </Link>
          )}
        </div>
      </section>
    </header>
  )
}
export default Header
