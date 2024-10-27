import React from 'react'
import phone1 from '../../assets/phone1.svg'
import phone2 from '../../assets/phone2.svg'
import ghlogo from '../../assets/ghlogo.svg'

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
                    <img className='h-[75%] absolute bottom-0 z-40' src={phone1} alt="" />
                    <img className='h-[48%] absolute bottom-0 right-28' src={phone2} alt="" />
                </div>
            </div>
        </div>
        <div className=''>
           <div style={{'backgroundColor':'#2B2826'}} className='w-4/5 mx-auto my-10 py-16 px-20 rounded-xl'>
                <h4 className='text-5xl font-[FixelVariable]'>What is <span className='font-[FixelBold]'>Pixel</span>Star</h4>
                <p className='text-lg font-[FixelLight] mt-5'>PixelStar aims to provide users with a Pixel-like feel, as it should be, with enough tweaks of the experiences to differentiate with Pixel.</p>
           </div>
           <div className='my-10 flex space-x-10 justify-between w-4/5 mx-auto'>
                {/* <div > */}
                    <div className='w-4/5 mx-auto p-8 rounded-xl' style={{'backgroundColor':'#FFD3B7'}} >
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum voluptatem commodi non qui tempora debitis ducimus fugit earum fugiat quas consectetur rerum dolore animi odit, ullam architecto nisi, beatae nobis.
                    </div>
                {/* </div> */}
                {/* <div > */}
                    <div className='w-4/5 mx-auto p-8 rounded-xl' style={{'backgroundColor':'#D2DDFF'}}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione magnam debitis ex tempora explicabo illum ullam suscipit, officia, unde quo mollitia asperiores adipisci necessitatibus voluptatem! Non nam ratione neque saepe?
                    </div>
                {/* </div> */}
           </div>
        </div>
    </div>
  )
}

export default HomePage