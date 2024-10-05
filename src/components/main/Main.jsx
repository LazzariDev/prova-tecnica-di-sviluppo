import React from 'react'
import MenuThemes from './MenuThemes'
import Jumbo from './jumbo/Jumbo'
import DividerSupport from './DividerSupport'
import StoriesCollection from './storiesCollection/StoriesCollection'

const Main = () => {
  return (
    <main className=''>
        <MenuThemes />
        <Jumbo />
        <DividerSupport />
        <StoriesCollection />
    </main>
  )
}

export default Main