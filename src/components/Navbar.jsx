import React from 'react'

const Navbar = () => {
  return (
    <div className="flex text-white items-center h-24 justify-between">
      
        <h1 className="text-3xl font-bold w-full">REACT. LAB</h1>
        <ul className='flex'>
            <li className='p-3'>Home</li>
            <li className='p-3'>Company</li>
            <li className='p-3'>Docs</li>
            <li className='p-3'>Contact</li>
            <li className='p-3'>Self</li>
        </ul>
    
        
    </div>
  )
}

export default Navbar