import React from 'react'
import JumboSecond from './JumboSecond'
import JumboThird from './JumboThird'
import JumboFirst from './JumboFirst'
import jumboFirstBg from '../../../assets/jumbo/jumbo-first.jpeg';
import jumboSecondBg from '../../../assets/jumbo/jumbo-second.png';


const Jumbo = () => {
  return (
    <>
        {/* Mobile */}
        <div className='lg:hidden'>

            {/* Jumbo First */}
            <div 
                className='w-full h-[500px] bg-cover bg-center'
                style={{ backgroundImage: `url(${jumboFirstBg})`}}
            >
                {/* Overlay */}
                <div className='w-full h-full bg-black bg-opacity-40'>
                    <div className="w-full h-full flex flex-col items-start justify-end px-10 pb-10 gap-10">
                        <span className='uppercase font-semibold text-black bg-white px-2 py-1 rounded-md'>Migranti</span>
                        <h3 className='text-4xl font-bold text-white'>Roccella Jonica, la Lampedusa che l'Italia ignora</h3>
                        <div className='flex gap-3'>
                            <div className='w-12 h-12'>
                                <img className='rounded-full' src="https://picsum.photos/200" alt="User image" />
                            </div>
                            <div className='flex flex-col text-white justify-between'>
                                <span>Di Alessando Puglia</span>
                                <span className='font-light text-xs'>29 Giugno 2022</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Jumbo Second */}

            <div 
                className='flex flex-col w-auto p-10 bg-cover'
            >
                <img src={jumboSecondBg} className='' alt="" />

                <div className="w-full flex flex-col items-start justify-around gap-2 mt-10">
                    <span className='uppercase font-semibold text-black bg-[#e2f1e8] px-2 py-1 rounded-md border border-black border-b-2 border-l-2'>Allarmi</span>
                    <h3 className='text-2xl font-bold text-black'>Il collasso dei ghiacciai negli scatti del fotografo ambientale Fabiano Ventura</h3>
                    <div className='flex gap-3'>
                        <div className='w-12 h-12'>
                            <img className='rounded-full' src="https://picsum.photos/200" alt="User image" />
                        </div>
                        <div className='flex flex-col text-black justify-between'>
                            <span>Di Ugo Lombi</span>
                            <span className='font-light text-xs'>14 Luglio 2022</span>
                        </div>
                        <i className="fa-solid fa-arrow-right text-black"></i>
                    </div>
                </div>                
            </div>

            {/* Jumbo Third A */}
            <div 
                className='flex flex-col w-auto p-10'
            >

                <div className="w-full flex flex-col items-start justify-around gap-2">
                    <span className='uppercase font-semibold text-black bg-[#e2f1e8] px-2 py-1 rounded-md border border-black border-b-2 border-l-2'>Esperimenti</span>
                    <h3 className='text-xl font-bold text-black'>Gli startupper? Li trovi al bistrot. <br/> Così il DumBo incuba relazioni</h3>
                    <div className='flex gap-3'>
                        <div className='w-12 h-12'>
                            <img className='rounded-full' src="https://picsum.photos/200" alt="User image" />
                        </div>
                        <div className='flex flex-col text-black justify-between'>
                            <span>Di Ugo Lombi</span>
                            <span className='font-light text-xs'>14 Luglio 2022</span>
                        </div>
                        <i className="fa-solid fa-arrow-right text-black"></i>
                    </div>
                </div>                
            </div>

            {/* Jumbo Third B */}
            <div 
                className='flex flex-col w-auto p-10'
            >

                <div className="w-full flex flex-col items-start justify-around gap-2">
                    <span className='uppercase font-semibold text-black bg-[#f1dada] px-2 py-1 rounded-md border border-black border-b-2 border-l-2'>Ucraina</span>
                    <h3 className='text-xl font-bold text-black'>Nelle città italiane tutti in piazza per e con Kiev</h3>
                    <div className='flex gap-3'>
                        <div className='w-12 h-12'>
                            <img className='rounded-full' src="https://picsum.photos/200" alt="User image" />
                        </div>
                        <div className='flex flex-col text-black justify-between'>
                            <span>Di Ugo Lombi</span>
                            <span className='font-light text-xs'>14 Luglio 2022</span>
                        </div>
                        <i className="fa-solid fa-arrow-right text-black"></i>
                    </div>
                </div>                
            </div>
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