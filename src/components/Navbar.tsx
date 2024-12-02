import React from 'react'

const Navbar = () => {
  return (
    <div className='flex bg-black text-white h-32 border-y-2 border-gray-500'>

      <div className='flex items-center justify-center w-2/5 md:w-4/12 text-lg md:text-2xl'>
        Ali Yousuf
      </div>

      <div className='flex items-center justify-end w-3/5 md:w-8/12 gap-2 md:gap-20 pr-4 md:pr-44'>
        <p>Home</p>
        <p>Contact</p>
        <p>About</p>
      </div>

    </div>
  )
}

export default Navbar
