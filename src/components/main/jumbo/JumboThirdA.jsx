import React from 'react';
import jumboThirdABg from '../../../assets/jumbo/jumbo-third-a.jpeg';


const JumboThirdA = () => {
  return (
    <div
        className='w-full h-[471px] bg-cover'
        style={{ backgroundImage: `url(${jumboThirdABg})`}}

    >
        {/* Overlay */}
        <div className='w-full h-full bg-black bg-opacity-40'>
            
            </div>
    </div>
  )
}

export default JumboThirdA