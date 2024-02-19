const Footer = () => {
  return (
    <footer className='bg-darker text-white h-20'>
      <section className='wrapper flex flex-col justify-center gap-1 md:flex-row items-center  md:justify-between h-full'>
        <div>
          &copy; {new Date().getFullYear()} by Arefinite | All Rights Reserved.
        </div>
        <div>Design and Developed by Adnan Arefin</div>
      </section>
    </footer>
  )
}
export default Footer
