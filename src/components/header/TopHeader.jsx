import React from 'react'

const TopHeader = () => {
  return (
    <div id='top-header' className='w-full h-11 lg:h-12 sticky flex items-center justify-between p-0 lg:px-10 lg:py-2 '>
        {/* Contribuisci/Abbonati small */}
        <div className='lg:hidden flex w-full'>
            <a href="/" className='w-1/2 h-11 flex justify-center items-center border border-black'>
                Contribuisci
            </a>
            <a href="/" className='w-1/2 h-11 flex justify-center items-center border border-black'>
                Abbonati
            </a>
        </div>  
        
        {/* Contribuisci/Abbonati large */}
        <div className='hidden lg:flex lg:gap-3'>
            <a href="/" className=''>Contribuisci</a>
            <a href="/" className=''>Abbonati</a>
        </div>
        
        {/* Login */}
        <div className='hidden lg:flex'>
            <button className='flex gap-2'>
                <span><i className="fa-regular fa-user text-black"></i></span>
                <span className=''>Accedi</span>
            </button>
        </div>
    </div>
  )
}

export default TopHeader