import React from 'react'
import TopHeader from './TopHeader';
import SearchBarHeader from './SearchBarHeader';
import MenuPages from './MenuPages';

const Header = () => {
    return (
        <header className='sticky bg-white top-0'>
            <TopHeader />
            <SearchBarHeader />
            <MenuPages />
        </header>
    )
}
export default Header;
