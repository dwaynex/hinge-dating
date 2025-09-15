import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Flame, Filter } from 'lucide-react'
import LikeCard from '../components/LikeCard'
import { mockLikes } from '../data/mockData'

const LikesPage = () => {
  const [likes] = useState(mockLikes)
  const [filter, setFilter] = useState('Recent')

  const filters = ['Recent', 'Your Type', 'Last Active', 'Nearby']

  return (
    <div className="min-h-screen bg-secondary-50 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-secondary-100">
        <div className="px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-secondary-900">Likes You</h1>
            <button className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full font-medium">
              <Flame className="w-4 h-4" />
              <span>Boost</span>
            </button>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-secondary-100 rounded-full flex items-center justify-center">
              <Filter className="w-5 h-5 text-secondary-600" />
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

      {/* Likes Grid */}
      <div className="px-4 py-6">
        {likes.length > 0 ? (
          <div className="space-y-6">
            {/* Featured Like */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card p-6"
            >
              <div className="flex items-start space-x-3 mb-4">
                <div className="bg-primary-100 px-3 py-1 rounded-full">
                  <span className="text-primary-700 text-sm font-medium">Liked your photo</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4">{likes[0].name}</h3>
              <img
                src={likes[0].image}
                alt={likes[0].name}
                className="w-full h-80 object-cover rounded-xl"
              />
            </motion.div>

            {/* Other Likes */}
            <div>
              <h2 className="text-lg font-bold text-secondary-900 mb-4">Up Next</h2>
              <div className="grid grid-cols-2 gap-4">
                {likes.slice(1).map((like, index) => (
                  <LikeCard key={like.id} like={like} index={index} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">💕</span>
            </div>
            <h3 className="text-xl font-bold text-secondary-900 mb-2">No likes yet</h3>
            <p className="text-secondary-600">Keep swiping to find your perfect match!</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default LikesPage