import React from 'react'
import QuitButton from './QuitButton'
import PortfolioButtons from './PortfolioButtons'

const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 p-2 w-screen lg:p-4 flex gap-2 lg:gap-4 bg-black z-50">
        <QuitButton />
        <PortfolioButtons />
      </div>
  )
}

export default NavBar