import React from 'react'
import dividerQuoteImage from '../../assets/divider-quote.png';

const DividerQuote = () => {
  return (
    <>
        {/* Mobile */}
        <div className='lg:hidden w-full h-40 flex flex-col justify-center gap-5 bg-[#f4f4f4] px-10'>

            {/* Quote */}
            <h2 className='text-4xl text-black font-bold'>Essere troppo seri non è cosa molto seria</h2>

            {/* By */}
            <span>[ Detto Africano ]</span>
        </div>

        {/* Desktop */}
        <div
            className='hidden lg:flex relative flex-col justify-center w-full h-52 items-start px-10 bg-right-bottom bg-cover'
            style={{ backgroundImage: `url(${dividerQuoteImage})`}}
        >
            <svg className='absolute top-5 left-10' width="55" height="44" viewBox="0 0 55 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.89 0L16.15 20.74H22.95V43.69H0V20.4L6.12 0H19.89ZM51.85 0L48.11 20.74H54.91V43.69H31.96V20.4L38.08 0H51.85Z" fill="white" fill-opacity="0.1"/>
            </svg>

            {/* Quote */}
            <h2 className='text-4xl text-black font-bold'>Essere troppo seri non è cosa molto seria</h2>

            {/* By */}
            <span>[ Detto Africano ]</span>
        </div>
    </>
  )
}

export default DividerQuote