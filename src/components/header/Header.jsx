import React from 'react'
import TopHeader from './TopHeader';
import SearchBarHeader from './SearchBarHeader';
import MenuModal from './MenuModal';
import MenuPages from './MenuPages';
import MenuThemes from './MenuThemes';

const Header = () => {
    return (
        <header>
            <TopHeader />
            <SearchBarHeader />
            <MenuModal />
            <MenuPages />
            <MenuThemes />
        </header>
    )
}
export default Header;
