import React, { useState, useContext, useEffect, useCallback } from 'react'
import { Spin } from 'antd'
const UserContext = React.createContext()

const UserContextProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState(undefined)

  const updateProfile = useCallback((data) => {
    setUserProfile(data)
  }, [])

  return (
    <UserContext.Provider value={{ userProfile, updateProfile }}>
      {children}
    </UserContext.Provider>
  )
}

export const UserStateProvider = UserContextProvider

export const useUserState = () => useContext(UserContext)
