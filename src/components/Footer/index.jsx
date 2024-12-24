import React from 'react'
import pslogo from '../../assets/pslogo.svg'

const Footer = () => {
  return (
    <div className='w-full bg-[#626774]'>
      <div className='w-11/12 md:w-4/5 mx-auto text-white pt-10 md:pt-20 pb-6 md:pb-10'>
        <div className='flex flex-col md:flex-row justify-between items-center md:items-start'>
          <div className='flex items-center space-x-4 md:space-x-6 mb-6 md:mb-0'>
            <img src={pslogo} alt="PixelStar Logo" className='w-16 md:w-24 h-16 md:h-24' />
            <h6 className='text-xl md:text-2xl font-[FixelBold]'>
              Pixel<span className='font-[FixelVariable]'>Star</span>
            </h6>
          </div>
          <div className='text-center md:text-right'>
            <h6 className='text-base sm:text-lg md:text-xl font-[FixelBold] my-4 md:my-10'>
              © 2024
            </h6>
          </div>
        </div>
      </div>
      <div className='w-11/12 md:w-4/5 mx-auto pb-6 md:pb-2 text-xs sm:text-sm font-[FixelVariable] text-white'>
        <div className='flex flex-col md:flex-row justify-between items-center md:items-start space-y-2 md:space-y-0'>
          <div className='text-center md:text-left'>
            Designed By naoto
          </div>
          <div className='text-center md:text-right'>
            Developed By Prathamk07, Semispeol & <a href="https://github.com/shandilyaaryan" className='hover:underline'>Aryan</a> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

