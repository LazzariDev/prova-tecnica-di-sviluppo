import React from 'react'
import MenuThemes from './MenuThemes'
import Jumbo from './jumbo/Jumbo'
import DividerSupport from './DividerSupport'
import StoriesCollection from './storiesCollection/StoriesCollection'
import DividerQuote from './DividerQuote'

const Main = () => {
  return (
    <main className=''>
        <MenuThemes />
        <Jumbo />
        <DividerSupport />
        <StoriesCollection />
        <DividerQuote />
    </main>
  )
}

export default Main