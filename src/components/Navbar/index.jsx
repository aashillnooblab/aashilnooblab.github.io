import React from 'react'
import { Link } from 'react-router-dom'
import ghlogo from '../../assets/ghlogo.svg'
import telelogo from '../../assets/telelogo.svg'

const Navbar = () => {
  return (
    <div className='font-[FixelVariable] py-6 mt-7 w-[90%] mx-auto rounded-full px-16 text-white bg-black shadow-md shadow-white border border-1 border-gray-400 backdrop-filter backdrop-blur-md bg-opacity-30 fixed right-0 left-0'>

        <div className='flex font-semibold justify-between text-lg'>
            <div className='space-x-20'>
                <Link to={'/'}>home</Link>
                <Link to={'/'}>downloads</Link>
                <Link to={'/'}>about</Link>
            </div>
            <div className='flex gap-8'>
            <img src={ghlogo} alt="github" />
            <img src={telelogo} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Navbar