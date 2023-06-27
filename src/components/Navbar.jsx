import React from 'react'

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
const Navbar = () => {
  return (
    <div className="flex text-white items-center h-24 justify-between px-4 mx-auto max-w-[1240px]">
      
        <h1 className="text-3xl font-bold w-full text-[#c977f2]">REACT. LAB</h1>
        <ul className='flex hidden'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul>
        <div>
          <AiOutlineMenu size={20}/>

        </div>
        <div className='fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-gray-600'>
          <h1 className="text-3xl font-bold w-full text-[#c977f2]">REACT. LAB</h1>
          <ul className='pt-24 uppercase '>
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
          </ul>
        </div>
    
        
    </div>
  )
}

export default Navbar