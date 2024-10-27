import React from 'react'
import phone1 from '../../assets/phone1.svg'
import phone2 from '../../assets/phone2.svg'
import ghlogo from '../../assets/ghlogo.svg'
import telelogo2 from '../../assets/telelogo2.svg'
import discussions from '../../assets/discussions.svg'
import phone from '../../assets/phone.png'

const HomePage = () => {
  return (
    <div className='text-white font-[FixelVariable]'>
        <div className='h-screen bg-custom-radial'>
            <div className='grid grid-cols-2 h-screen'>
                <div className='mx-auto my-auto'>
                    <div>

                    <h1 className='text-8xl text-center opacity-70'> <span className='font-[FixelBold]'>Pixel</span><span className='font-[FixelRegular]'>Star</span></h1>
                    </div>
                    
                    <div className='w-3/5 mx-auto text-xl opacity-70 font-[FixelLight]'>
                        <h3>An android-based open source operating system for various devices.</h3>
                    </div>
                    <div className='flex w-3/5 mx-auto my-5 font-[FixelRegular] gap-5'>
                        <button className='bg-white opacity-70 px-16 text-black rounded-full  py-3 text-lg'>Download</button>
                        <button className='text-black opacity-70 rounded-full'><img className='w-12' src={ghlogo} alt="" /></button>
                    </div>
                </div>
                <div className='flex'>
                    {/* <img src="" alt="" /> */}
                    <img className='h-[75%] absolute bottom-0 z-40' src={phone} alt="" />
                </div>
            </div>
        </div>
        <div className=''>
           <div style={{'backgroundColor':'#2B2826'}} className='w-4/5 mx-auto my-10 py-16 px-20 rounded-xl'>
                <h5 className='text-5xl font-[FixelVariable]'>What is <span className='font-[FixelBold]'>Pixel</span>Star</h5>
                <h3 className='text-lg font-[FixelLight] mt-5'>PixelStar aims to provide users with a Pixel-like feel, as it should be, with enough tweaks of the experiences to differentiate with Pixel.</h3>
           </div>
           <div className='my-10 flex space-x-10 justify-between w-4/5 mx-auto'>
                {/* <div > */}
                    <div className='w-4/5 mx-auto p-8 rounded-xl' style={{'backgroundColor':'#FFD3B7','color':'#392E27'}} >
                        <h4 className='text-4xl font-[FixelBold] px-8 py-5'>Pixel<span className='font-[FixelVariable]'>Star</span> <br /> <span className='text-6xl'>Uday</span></h4>
                        <h3 className='text-lg px-8 font-[FixelLight]'>
                        PixelStar Uday is the latest, most stable version of PixelStar that provides bunch customization with balanced amount of stability!
                        </h3>
                        <button className='px-8 mx-8 mt-4 rounded-full' style={{'backgroundColor':'#392E27', 'color':'#FFD3B7'}}>Learn More</button>
                    </div>
                {/* </div> */}
                {/* <div > */}
                <div className='w-4/5 mx-auto p-8 rounded-xl' style={{'backgroundColor':'#D2DDFF','color':'#272B39'}} >
                        <h4 className='text-4xl font-[FixelBold] px-8 py-5'>Pixel<span className='font-[FixelVariable]'>Star</span> <br /> <span className='text-6xl'>Pratah</span></h4>
                        <h3 className='text-lg px-8 font-[FixelLight]'>
                        PixelStar Pratah is the cutting edge version of PixelStar that provides enough customization based on latest Android release
                        </h3>
                        <button className='px-8 mx-8 mt-4 rounded-full' style={{'backgroundColor':'#272B39', 'color':'#D2DDFF'}}>Coming Soon</button>
                    </div>
                {/* </div> */}
           </div>
           <div className='my-10 flex space-x-10  justify-between w-4/5 mx-auto'>
            <div className=' p-8 flex space-x-6 rounded-xl w-4/5' style={{'backgroundColor':'#9EBDE1','color':'#2A2E32'}}>
            <img className='ml-8' src={telelogo2} alt="" />
                <h7 className='text-2xl my-auto font-[FixelBold]'>Telegram Channel</h7>
            </div>
            <div className=' p-8 flex space-x-6 rounded-xl w-4/5' style={{'backgroundColor':'#FFD89A','color':'#322C22'}}>
            <img className='ml-8' src={discussions} alt="" />
                <h7 className='text-2xl my-auto font-[FixelBold]'>Discussion & Support</h7>
            </div>
           </div>
        </div>
    </div>
  )
}

export default HomePage