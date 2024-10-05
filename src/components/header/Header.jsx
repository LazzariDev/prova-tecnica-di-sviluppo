import React from 'react'
import TopHeader from './TopHeader';
import SearchBarHeader from './SearchBarHeader';
import MenuModal from './MenuModal';
import MenuPages from './MenuPages';

const Header = () => {
    return (
        <header>
            <div className='sticky'>
                <TopHeader />
                <SearchBarHeader />
                <MenuModal />
                <MenuPages />
            </div>
        </header>
    )
}
export default Header;
