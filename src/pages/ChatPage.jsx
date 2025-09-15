import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, MoreHorizontal } from 'lucide-react'
import ChatItem from '../components/ChatItem'
import { mockChats } from '../data/mockData'

const ChatPage = () => {
  const [chats] = useState(mockChats)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-secondary-100">
        <div className="px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-secondary-900">Chats</h1>
            <button className="p-2 hover:bg-secondary-100 rounded-full transition-colors">
              <MoreHorizontal className="w-6 h-6 text-secondary-600" />
            </button>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 w-5 h-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search conversations"
              className="input-field pl-12"
            />
          </div>
        </div>
      </div>

      {/* Chat List */}
      <div className="px-4 py-2">
        {filteredChats.length > 0 ? (
          <div className="space-y-2">
            {filteredChats.map((chat, index) => (
              <ChatItem key={chat.id} chat={chat} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">💬</span>
            </div>
            <h3 className="text-xl font-bold text-secondary-900 mb-2">No conversations yet</h3>
            <p className="text-secondary-600">Start matching to begin conversations!</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ChatPage