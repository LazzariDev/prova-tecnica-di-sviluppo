import React, { useState } from 'react'

const MenuPages = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isImageBtnActive, setIsImageBtnActive] = useState(true);
    
    const menuItems = ['Tutti i temi', 'Ambiente', 'Economia', 'Mondo', 'Non Profit', 'Politica', 'Società', 'Welfare']

    const handleClickTextImage = () => {
        
    }

    return (
        <div className=' justify-between items-center hidden lg:flex px-10'>
            
            {/* Menu */}
            <nav id='menu-pages' className='w-full h-24'>
                <ul className='h-24 flex items-end gap-4 font-bold text-xl'>
                    {menuItems.map((item, index) => (
                        <li key={index} >
                            <button onClick={() => setActiveIndex(index)}>
                                {item}
                            </button>
                            {activeIndex === index ? (
                                <div style={{ paddingBottom: '35px', borderBottom: '6px solid #ff2c33', width: '100%' }} />
                            ) : (
                                <div style={{ paddingBottom: '41px'}} />
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
            
            {/* Toggle text/image */}
            <div className='flex text-xl items-center gap-3'>
                <i onClick={() => setIsImageBtnActive(false)} className={`fa-solid fa-font ${!isImageBtnActive ? 'border border-b-2 border-l-2 border-black p-2 rounded-sm' : ''}`}></i>
                <i onClick={() => setIsImageBtnActive(true)} className={`fa-regular fa-image ${isImageBtnActive ? 'border border-b-2 border-l-2 border-black p-2 rounded-sm' : ''}`}></i>
            </div>
        </div>
    )
}

export default MenuPages