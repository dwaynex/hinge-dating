import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, X, MapPin, Briefcase, GraduationCap, Home, Coffee } from 'lucide-react'

const ProfileCard = ({ profile, onLike, onPass }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    if (currentImageIndex < profile.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1)
    }
  }

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="card max-w-sm mx-auto"
    >
      {/* Header */}
      <div className="p-4 border-b border-secondary-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <h2 className="text-xl font-bold text-secondary-900">{profile.name}</h2>
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
              new here
            </span>
          </div>
          <button className="p-1 hover:bg-secondary-100 rounded-full transition-colors">
            <span className="text-secondary-400">⋯</span>
          </button>
        </div>
      </div>

      {/* Main Image */}
      <div className="relative">
        <div className="flex">
          <button
            onClick={prevImage}
            className="absolute left-0 top-0 w-1/2 h-full z-10"
            disabled={currentImageIndex === 0}
          />
          <button
            onClick={nextImage}
            className="absolute right-0 top-0 w-1/2 h-full z-10"
            disabled={currentImageIndex === profile.images.length - 1}
          />
        </div>
        
        <img
          src={profile.images[currentImageIndex]}
          alt={profile.name}
          className="w-full h-96 object-cover"
        />
        
        {/* Image indicators */}
        <div className="absolute top-4 left-4 flex space-x-1">
          {profile.images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Like button */}
        <button
          onClick={onLike}
          className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        >
          <Heart className="w-6 h-6 text-primary-600" />
        </button>
      </div>

      {/* Prompt */}
      {profile.prompts && profile.prompts.length > 0 && (
        <div className="p-6 bg-secondary-50">
          <div className="relative">
            <p className="text-sm font-medium text-secondary-600 mb-2">
              {profile.prompts[0].question}
            </p>
            <p className="text-lg font-semibold text-secondary-900">
              {profile.prompts[0].answer}
            </p>
            <button
              onClick={onLike}
              className="absolute bottom-2 right-2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Heart className="w-5 h-5 text-primary-600" />
            </button>
          </div>
        </div>
      )}

      {/* Profile Details */}
      <div className="p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🎂</span>
            <span className="text-secondary-700">{profile.age}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-2xl">👤</span>
            <span className="text-secondary-700">{profile.gender}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🧭</span>
            <span className="text-secondary-700">{profile.type}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🏠</span>
            <span className="text-secondary-700">{profile.location}</span>
          </div>
        </div>

        <div className="space-y-3 pt-4 border-t border-secondary-100">
          <div className="flex items-center space-x-3">
            <Briefcase className="w-5 h-5 text-secondary-500" />
            <span className="text-secondary-700">{profile.occupation}</span>
          </div>
          <div className="flex items-center space-x-3">
            <GraduationCap className="w-5 h-5 text-secondary-500" />
            <span className="text-secondary-700">University of {profile.location}</span>
          </div>
          <div className="flex items-center space-x-3">
            <Home className="w-5 h-5 text-secondary-500" />
            <span className="text-secondary-700">{profile.hometown}</span>
          </div>
          <div className="flex items-center space-x-3">
            <Coffee className="w-5 h-5 text-secondary-500" />
            <span className="text-secondary-700">{profile.lookingFor}</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-6 p-6 bg-secondary-50">
        <button
          onClick={onPass}
          className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        >
          <X className="w-7 h-7 text-secondary-500" />
        </button>
        <button
          onClick={onLike}
          className="w-14 h-14 bg-primary-600 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        >
          <Heart className="w-7 h-7 text-white" />
        </button>
      </div>
    </motion.div>
  )
}

export default ProfileCard