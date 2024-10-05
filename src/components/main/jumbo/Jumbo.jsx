import React from 'react'
import JumboSecond from './JumboSecond'
import JumboThird from './JumboThird'
import JumboFirst from './JumboFirst'

const Jumbo = () => {
  return (
    <>
        {/* Mobile */}
        <div className='lg:hidden'>

        </div>

        {/* Desktop */}
        <div className='hidden lg:flex w-full flex-col -z-10'>
            <JumboFirst />
            <div className='flex w-full'>
                <JumboSecond />
                <JumboThird />
            </div>
        </div>
    
    </>
  )
}

export default Jumbo