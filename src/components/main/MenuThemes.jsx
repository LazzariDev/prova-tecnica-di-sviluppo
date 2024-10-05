import React from 'react'

const MenuThemes = () => {
  return (
    <>
        {/* Mobile */}
        <div id='menu-themes' className='lg:hidden flex flex-col items-start justify-around gap-y-4 w-full bg-[#f4f4f4] px-10 py-10'>
            <div className='flex justify-start items-center text-2xl font-bold gap-2'>
                <h2>Tutti i temi</h2>
                <i className="fa-solid fa-chevron-down"></i>
            </div>
            <div className='flex flex-wrap'>
                <ul className='flex flex-wrap gap-3'>
                    <li className='uppercase font-semibold text-sm px-2 py-2 border border-black  border-b-4 border-l-4 rounded-md bg-white'>
                        Ambiente
                    </li>
                    <li className='uppercase font-semibold text-sm px-2 py-2 border border-black  border-b-4 border-l-4 rounded-md bg-white'>
                        Economia
                    </li>
                    <li className='uppercase font-semibold text-sm px-2 py-2 border border-black  border-b-4 border-l-4 rounded-md bg-white'>
                        Mondo
                    </li>
                    <li className='uppercase font-semibold text-sm px-2 py-2 border border-black  border-b-4 border-l-4 rounded-md bg-white'>
                        Non Profit
                    </li>
                    <li className='uppercase font-semibold text-sm px-2 py-2 border border-black  border-b-4 border-l-4 rounded-md bg-white'>
                        Politica
                    </li>
                    <li className='uppercase font-semibold text-sm px-2 py-2 border border-black  border-b-4 border-l-4 rounded-md bg-white'>
                        Società
                    </li>
                    <li className='uppercase font-semibold text-sm px-2 py-2 border border-black  border-b-4 border-l-4 rounded-md bg-white'>
                        Welfare
                    </li>
                </ul>
            </div>
        </div>

        {/* Desktop */}
        <div id='menu-themes' className='hidden w-full h-[174px] lg:flex justify-between bg-[#f4f4f4] items-center px-10'>
            <div>
                <h2 className='text-5xl font-bold'>Tutti i temi</h2>
            </div>
            <div>
                <ul className='flex gap-3'>
                    <li className='uppercase font-semibold text-sm px-2 py-2 border border-black  border-b-4 border-l-4 rounded-md bg-[#e2f1e8]'>
                        Ambiente
                    </li>
                    <li className='uppercase font-semibold text-sm px-2 py-2 border border-black  border-b-4 border-l-4 rounded-md bg-white'>
                        Economia
                    </li>
                    <li className='uppercase font-semibold text-sm px-2 py-2 border border-black  border-b-4 border-l-4 rounded-md bg-[#f1dada]'>
                        Mondo
                    </li>
                    <li className='uppercase font-semibold text-sm px-2 py-2 border border-black  border-b-4 border-l-4 rounded-md bg-white'>
                        Non Profit
                    </li>
                    <li className='uppercase font-semibold text-sm px-2 py-2 border border-black  border-b-4 border-l-4 rounded-md bg-[#f1f1e2]'>
                        Politica
                    </li>
                    <li className='uppercase font-semibold text-sm px-2 py-2 border border-black  border-b-4 border-l-4 rounded-md bg-white'>
                        Società
                    </li>
                    <li className='uppercase font-semibold text-sm px-2 py-2 border border-black  border-b-4 border-l-4 rounded-md bg-white'>
                        Welfare
                    </li>
                </ul>
            </div>
        </div>
    
    </>
  )
}

export default MenuThemes