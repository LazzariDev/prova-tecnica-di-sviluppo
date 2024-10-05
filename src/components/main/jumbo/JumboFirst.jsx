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
            <div className="w-full h-full flex flex-col items-start justify-end px-10 pb-10 gap-10">
                <span className='uppercase font-semibold text-black bg-white px-2 py-1 rounded-md'>Migranti</span>
                <h3 className='text-4xl font-bold text-white'>Roccella Jonica, la Lampedusa che l'Italia ignora</h3>
                <div className='flex gap-3'>
                    <div className='w-12 h-12'>
                        <img className='rounded-full' src="https://picsum.photos/200" alt="User image" srcset="" />
                    </div>
                    <div className='flex flex-col text-white justify-between'>
                        <span>Di Alessando Puglia</span>
                        <span className='font-light text-xs'>29 Giugno 2022</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default JumboFirst