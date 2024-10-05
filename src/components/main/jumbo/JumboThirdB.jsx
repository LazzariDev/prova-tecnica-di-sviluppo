import React from 'react';
import jumboThirdBBg from '../../../assets/jumbo/jumbo-third-b.png';


const JumboThirdB = () => {
  return (
    <div
        className='w-full h-[374px] bg-cover'
        style={{ backgroundImage: `url(${jumboThirdBBg})`}}
    >
        {/* Overlay */}
        <div className='w-full h-full bg-black bg-opacity-40'>
            
            </div>
    </div>
  )
}

export default JumboThirdB