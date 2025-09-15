import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'

const Layout = () => {
  return (
    <div className="min-h-screen bg-secondary-50">
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-xl">
        <Outlet />
        <Navigation />
      </div>
    </div>
  )
}

export default Layout