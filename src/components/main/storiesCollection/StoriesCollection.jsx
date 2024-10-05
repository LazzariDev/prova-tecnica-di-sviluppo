import React from 'react'

const StoriesCollection = () => {
  return (
    <>
        {/* Mobile */}
        <div className='lg:hidden flex flex-col w-full'>
            <div className='h-[164px] w-full bg-green-400'></div>
            <div className='h-[164px] w-full bg-blue-400'></div>
            <div className='h-[164px] w-full bg-pink-400'></div>
            <div className='h-[164px] w-full bg-orange-400'></div>
            <div className='h-[164px] w-full bg-red-400'></div>
        </div>

        {/* Desktop */}
        <div className='hidden lg:grid  lg:grid-cols-3'>
            <div className='h-[436px] bg-green-400'></div>
            <div className='h-[436px] bg-blue-400'></div>
            <div className='h-[436px] bg-pink-400'></div>
            <div className='h-[436px] bg-orange-400'></div>
            <div className='col-span-2 h-[436px] bg-red-400'></div>
        </div>
    
    </>
  )
}

export default StoriesCollection