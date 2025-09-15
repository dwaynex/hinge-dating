import React from 'react'
import { Link } from 'react-router-dom'
import { Coffee, Heart, MessageCircle, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700">
      <div className="min-h-screen flex flex-col justify-center items-center px-6 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center mb-8">
            <Coffee className="w-16 h-16 mr-4" />
            <h1 className="text-6xl font-bold">Hot Cofe</h1>
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl mb-4 font-light"
          >
            Designed to be deleted
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg mb-12 opacity-90 max-w-md mx-auto"
          >
            The dating app that's all about meaningful connections over a perfect cup of coffee
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="w-full max-w-sm space-y-4"
        >
          <Link
            to="/register"
            className="block w-full bg-white text-primary-600 font-semibold py-4 px-8 rounded-2xl text-center hover:bg-secondary-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Create Account
          </Link>
          
          <Link
            to="/login"
            className="block w-full bg-transparent border-2 border-white text-white font-semibold py-4 px-8 rounded-2xl text-center hover:bg-white hover:text-primary-600 transition-all duration-200"
          >
            Sign In
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 grid grid-cols-3 gap-8 text-center"
        >
          <div className="flex flex-col items-center">
            <Heart className="w-8 h-8 mb-2" />
            <p className="text-sm opacity-90">Meaningful Matches</p>
          </div>
          <div className="flex flex-col items-center">
            <MessageCircle className="w-8 h-8 mb-2" />
            <p className="text-sm opacity-90">Real Conversations</p>
          </div>
          <div className="flex flex-col items-center">
            <Sparkles className="w-8 h-8 mb-2" />
            <p className="text-sm opacity-90">Authentic Connections</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default LandingPage