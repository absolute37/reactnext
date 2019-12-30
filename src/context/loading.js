import React, { createContext, useContext, useState } from 'react'

const LoadingContext = createContext({
  isLoading: false,
  showLoading: () => {},
  hideLoading: () => {},
})

const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState()
  showLoading = () => {
    setLoading((prev) => {
      return {
        ...prev,
        isLoading: true,
      }
    })
  }
  hideLoading = () => {
    setLoading((prev) => {
      return {
        ...prev,
        isLoading: false,
      }
    })
  }

  const loadingState = {
    isLoading: false,
    showLoading,
    hideLoading,
  }

  return (
    <LoadingContext.Provider value={loadingState}>{children}</LoadingContext.Provider>
  )
}

export const UseLoadingProvider = LoadingProvider

export const useLoadingState = useContext(LoadingContext)
