import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProfileCard from '../components/ProfileCard'
import { mockProfiles } from '../data/mockData'

const HomePage = () => {
  const [profiles, setProfiles] = useState(mockProfiles)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [filter, setFilter] = useState('Compatible')

  const currentProfile = profiles[currentIndex]

  const handleLike = () => {
    // Handle like action
    nextProfile()
  }

  const handlePass = () => {
    // Handle pass action
    nextProfile()
  }

  const nextProfile = () => {
    if (currentIndex < profiles.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      // Reset or fetch more profiles
      setCurrentIndex(0)
    }
  }

  const filters = ['Compatible', 'Active Today', 'New Here', 'Nearby']

  return (
    <div className="min-h-screen bg-secondary-50 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-secondary-100">
        <div className="px-4 py-4">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
              <span className="text-primary-600 font-bold text-lg">✨</span>
            </div>
            <div className="flex space-x-2 overflow-x-auto">
              {filters.map((filterOption) => (
                <button
                  key={filterOption}
                  onClick={() => setFilter(filterOption)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    filter === filterOption
                      ? 'bg-secondary-900 text-white'
                      : 'bg-secondary-100 text-secondary-600 hover:bg-secondary-200'
                  }`}
                >
                  {filterOption}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Profile Cards */}
      <div className="px-4 py-6">
        <AnimatePresence mode="wait">
          {currentProfile && (
            <ProfileCard
              key={currentProfile.id}
              profile={currentProfile}
              onLike={handleLike}
              onPass={handlePass}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default HomePage