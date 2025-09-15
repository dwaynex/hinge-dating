import React from 'react'
import { motion } from 'framer-motion'
import { Settings, Info, Zap, Gift, LogOut } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

const ProfilePage = () => {
  const { logout, user } = useAuth()

  const handleLogout = () => {
    logout()
  }

  const profileActions = [
    {
      icon: Zap,
      title: 'Boost',
      description: 'Get seen by 11x more people',
      color: 'bg-green-500',
      action: () => console.log('Boost clicked')
    },
    {
      icon: Gift,
      title: 'Roses',
      description: '2x as likely to lead to a date',
      color: 'bg-pink-500',
      action: () => console.log('Roses clicked')
    }
  ]

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-secondary-100">
        <div className="px-4 py-6">
          <div className="flex items-center justify-between">
            <img
              src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200"
              alt="Hot Cofe Logo"
              className="h-12 w-auto"
            />
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-secondary-100 rounded-full transition-colors">
                <Info className="w-6 h-6 text-secondary-600" />
              </button>
              <button className="p-2 hover:bg-secondary-100 rounded-full transition-colors">
                <Settings className="w-6 h-6 text-secondary-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="relative inline-block mb-4">
            <img
              src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-primary-500"
            />
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-secondary-900 mb-1">Sarah</h2>
          <p className="text-secondary-600">Coffee enthusiast & book lover</p>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <img
            src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Coffee date"
            className="w-full h-64 object-cover rounded-2xl"
          />
        </motion.div>

        {/* Action Cards */}
        <div className="space-y-4 mb-8">
          {profileActions.map((action, index) => (
            <motion.button
              key={action.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              onClick={action.action}
              className="w-full flex items-center space-x-4 p-4 bg-white border border-secondary-200 rounded-2xl hover:shadow-md transition-all duration-200"
            >
              <div className={`w-12 h-12 ${action.color} rounded-full flex items-center justify-center`}>
                <action.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-secondary-900">{action.title}</h3>
                <p className="text-sm text-secondary-600">{action.description}</p>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Logout Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          onClick={handleLogout}
          className="w-full flex items-center justify-center space-x-2 py-3 px-6 border border-secondary-300 rounded-2xl text-secondary-700 hover:bg-secondary-50 transition-all duration-200"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </motion.button>
      </div>
    </div>
  )
}

export default ProfilePage