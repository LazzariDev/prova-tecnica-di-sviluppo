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
            <div className="w-full h-full flex flex-col items-start justify-end px-10 pb-10 gap-10">
                <span className='uppercase font-semibold text-black bg-[#e2f1e8] px-2 py-1 rounded-md'>Migranti</span>
                <h3 className='text-2xl font-bold text-white'>Il collasso dei ghiacciai negli scatti del fotografo ambientale Fabiano Ventura</h3>
                <div className='flex flex-col gap-3'>
                    <div className='w-12 h-12'>
                        <img className='rounded-full' src="https://picsum.photos/200" alt="User image" srcset="" />
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

export default JumboThirdA