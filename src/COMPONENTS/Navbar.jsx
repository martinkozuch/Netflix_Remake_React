import React from 'react'

const Navbar = () => {

  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
    <div>
        <button className='text-white rounded px-6 py-2 mr-3 hover:bg-stone-50 hover:bg-opacity-5'>Sign In </button>
        <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded cursor-pointer text-white" >Sign Up</button>
    </div>
    </div>
  )
}

export default Navbar