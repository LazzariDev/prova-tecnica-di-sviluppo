import React from 'react'

const DividerSupport = () => {
  return (
    <>
        {/* Mobile */}
        <div className='lg:hidden w-full h-40 flex flex-col justify-center gap-5 bg-[#f4f1de] px-10'>

            {/* Title */}
            <h2 className='text-4xl text-black font-bold'>Il tuo supporto è fondamentale</h2>

            {/* C2A */}
            <a href="/" className='flex items-center gap-2 font-semibold'>
                Dai il tuo contributo
                <span>
                    <i class="fa-solid fa-arrow-right"></i>
                </span>
            </a>
        </div>

        {/* Desktop */}
        <div className='hidden lg:flex w-full h-52 bg-[#f4f1de] items-center justify-between px-10'>
            {/* Title */}
            <h2 className='text-4xl text-black font-bold'>Il tuo supporto è fondamentale</h2>

            {/* C2A */}
            <a href="/" className='flex items-center gap-2 font-semibold'>
                Dai il tuo contributo
                <span>
                    <i class="fa-solid fa-arrow-right"></i>
                </span>
            </a>
        </div>
    </>
  )
}

export default DividerSupport