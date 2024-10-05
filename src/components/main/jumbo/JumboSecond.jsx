import React from 'react';
import jumboSecondBg from '../../../assets/jumbo/jumbo-second.png'

const JumboSecond = () => {
  return (
    <div 
        className='flex w-2/3 h-[845px] bg-cover'
        style={{ backgroundImage: `url(${jumboSecondBg})`}}
    >
        {/* Overlay */}
        <div className='w-full h-full bg-black bg-opacity-40'>
            
            </div>
    </div>
  )
}

export default JumboSecond