import React from 'react'
import { NavLink } from 'react-router-dom'
import { Home, Heart, MessageCircle, User } from 'lucide-react'

const Navigation = () => {
  const navItems = [
    { to: '/app', icon: Home, label: 'Discover' },
    { to: '/app/likes', icon: Heart, label: 'Likes' },
    { to: '/app/chat', icon: MessageCircle, label: 'Chat' },
    { to: '/app/profile', icon: User, label: 'Profile' },
  ]

  return (
    <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t border-secondary-200 px-4 py-2">
      <div className="flex justify-around">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/app'}
            className={({ isActive }) =>
              `flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-secondary-500 hover:text-secondary-700 hover:bg-secondary-50'
              }`
            }
          >
            <Icon size={24} />
            <span className="text-xs mt-1 font-medium">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

export default Navigation