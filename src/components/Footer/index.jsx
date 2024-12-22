import React from 'react'
import pslogo from '../../assets/pslogo.svg'

const Footer = () => {
  return (
    <div className='w-full' style={{'backgroundColor':'#626774'}}>
        <div className='w-4/5 flex justify-between mx-auto text-white pt-20 pb-10'>
            <div className='flex my-1 size-24 space-x-6'>
                <img src={pslogo} alt="" />
                <h6 className='text-2xl font-[FixelBold] mx-auto my-auto'>Pixel<span className='font-[FixelVariable]'>Star</span></h6>
            </div>
            <div>
                <h6 className='text-lg sm:text-xl font-[FixelBold] my-10'>
            © 2024
                </h6>
            </div>
        </div>
        <div className='w-4/5 flex gap-16 justify-between mx-auto pb-2 text-sm font-[FixelVariable] text-white'>
            <div>
                Designed By naoto
            </div>
            <div>
                Developed By Prathamk07, Semispeol & <a href="https:github.com/shandilyaaryan">Aryan</a> 
            </div>
        </div>
    </div>
  )
}

export default Footer