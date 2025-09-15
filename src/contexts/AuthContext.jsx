import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for stored auth token on app load
    const token = localStorage.getItem('hotcofe_token')
    if (token) {
      // In a real app, you'd validate the token with your backend
      setUser({ token })
    }
    setIsLoading(false)
  }, [])

  const login = (userData) => {
    setUser(userData)
    localStorage.setItem('hotcofe_token', userData.token)
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('hotcofe_token')
  }

  const register = (userData) => {
    setUser(userData)
    localStorage.setItem('hotcofe_token', userData.token)
  }

  const value = {
    user,
    login,
    logout,
    register,
    isLoading
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}