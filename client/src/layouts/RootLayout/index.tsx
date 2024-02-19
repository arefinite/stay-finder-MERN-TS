import { Outlet } from 'react-router-dom'
import Footer from '../../components/shared/Footer'
import Header from '../../components/shared/Header'

const RootLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='wrapper flex-1 mt-8'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
export default RootLayout
