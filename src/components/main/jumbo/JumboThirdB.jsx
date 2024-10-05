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
            <div className="w-full h-full flex flex-col items-start justify-end px-10 pb-3  gap-10">
                <span className='uppercase font-semibold text-black bg-[#f1dada] px-2 py-1 rounded-md'>Ucraina</span>
                <h3 className='text-2xl font-bold text-white'>Nelle città italiane tutti in piazza per e con Kiev</h3>
                <div className='flex flex-col gap-3'>
                    <div className='w-12 h-12'>
                        <img className='rounded-full' src="https://picsum.photos/200" alt="User image" />
                    </div>
                    <div className='flex flex-col text-white justify-between'>
                        <span>Di Alessando Puglia</span>
                        <span className='font-light text-xs'>29 Giugno 2022</span>
                    </div>
                    <i className="fa-solid fa-arrow-right text-white"></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default JumboThirdB