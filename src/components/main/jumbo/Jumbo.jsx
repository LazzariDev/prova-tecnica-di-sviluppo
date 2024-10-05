import React from 'react'

const Jumbo = () => {
  return (
    <>
        {/* Mobile */}
        <div className='lg:hidden'>

        </div>

        {/* Desktop */}
        <div className='hidden lg:flex w-full flex-col'>
            <div className='w-full h-[500px] bg-red-500'>
                1
            </div>

            <div className='flex w-full'>
                <div className='w-2/3 h-[845px] bg-purple-700'>
                2
                </div>
                <div className='flex flex-col w-1/3 h-[845px]'>
                    <div className='w-full h-[471px] bg-green-500'>
                        3
                    </div>
                    <div className='w-full h-[374px] bg-blue-700'>
                        4
                    </div>
                </div> 
            </div>
        </div>
    
    </>
  )
}

export default Jumbo