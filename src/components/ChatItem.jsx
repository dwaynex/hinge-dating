import React from 'react'
import { motion } from 'framer-motion'

const ChatItem = ({ chat, index }) => {
  const formatTime = (timestamp) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffInHours = (now - date) / (1000 * 60 * 60)
    
    if (diffInHours < 24) {
      return date.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      })
    } else {
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric' 
      })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      className="flex items-center space-x-4 p-4 hover:bg-secondary-50 rounded-2xl transition-colors cursor-pointer"
    >
      <div className="relative">
        <img
          src={chat.avatar}
          alt={chat.name}
          className="w-14 h-14 rounded-full object-cover"
        />
        {chat.online && (
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
        )}
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-semibold text-secondary-900 truncate">{chat.name}</h3>
          <span className="text-xs text-secondary-500">{formatTime(chat.lastMessage.timestamp)}</span>
        </div>
        <p className="text-sm text-secondary-600 truncate">{chat.lastMessage.text}</p>
      </div>
      
      {chat.unreadCount > 0 && (
        <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">{chat.unreadCount}</span>
        </div>
      )}
    </motion.div>
  )
}

export default ChatItem