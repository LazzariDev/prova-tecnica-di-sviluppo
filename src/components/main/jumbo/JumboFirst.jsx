import React from 'react';
import jumboFirstBg from '../../../assets/jumbo/jumbo-first.jpeg';

const JumboFirst = () => {
  return (
    <div 
        className='w-full h-[500px] bg-cover'
        style={{ backgroundImage: `url(${jumboFirstBg})`}}
    >
        {/* Overlay */}
        <div className='w-full h-full bg-black bg-opacity-40'>
            
        </div>
    </div>
  )
}

export default JumboFirst