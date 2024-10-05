import React from 'react'
import TopHeader from './TopHeader';
import SearchBarHeader from './SearchBarHeader';
import MenuModal from './MenuModal';
import MenuPages from './MenuPages';
import MenuThemes from './MenuThemes';

const Header = () => {
    return (
        <header>
            <div className='sticky'>
                <TopHeader />
                <SearchBarHeader />
                <MenuModal />
                <MenuPages />
            </div>
            <MenuThemes />
        </header>
    )
}
export default Header;
