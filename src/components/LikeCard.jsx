import React from 'react'
import { motion } from 'framer-motion'

const LikeCard = ({ like, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="card overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
    >
      <div className="p-3">
        <div className="bg-secondary-100 px-3 py-1 rounded-full mb-3 inline-block">
          <span className="text-secondary-700 text-xs font-medium">
            {like.comment || 'Liked your photo'}
          </span>
        </div>
        <h3 className="font-semibold text-secondary-900 mb-2">{like.name}</h3>
      </div>
      <img
        src={like.image}
        alt={like.name}
        className="w-full h-48 object-cover"
      />
    </motion.div>
  )
}

export default LikeCard