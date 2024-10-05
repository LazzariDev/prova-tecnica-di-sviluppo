import React, { useState } from 'react'

const SearchBarHeader = () => {
    const [menuClicked, setMenuClicked] = useState(false);
    const [isInputDisabled, setIsInputDisable] = useState(true);
    const [searchClicked, setSearchClicked] = useState(false);

    const handleToggleMenu = () => {
        setMenuClicked(prevState => !prevState);

    }

    const handleToggleSearch = () => {
        setSearchClicked(prevState => !prevState)
        setIsInputDisable(prevState => !prevState)
    }

  return (
    <div id='search-bar-header' className='w-full h-[52px] lg:h-24 sticky flex items-center justify-between'>
        <button className='h-[52px] w-[52px] lg:w-24 lg:h-24 text-red-600 border border-black' onClick={handleToggleMenu}>
            {menuClicked ? <i className="fa-solid fa-bars"></i> : <i className="fa-solid fa-xmark"></i>}
        </button>
        <input className='w-full h-[52px] lg:h-24 flex border border-black focus:outline-none disabled:opacity-100 disabled:bg-white' disabled={!isInputDisabled} type="text" name="" id="" />
        <button className='h-[52px] w-[52px] lg:w-24 lg:h-24 text-red-600 border border-black' onClick={handleToggleSearch}>
            {searchClicked ? <i className="fa-solid fa-magnifying-glass"></i> : <i className="fa-solid fa-xmark"></i>}
        </button>
    </div>
  )
}

export default SearchBarHeader