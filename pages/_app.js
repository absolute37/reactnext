import React from 'react'
import App from 'next/app'
import { UserStateProvider } from '../src/context/user'
import '../styles/less/ant-theme-vars.less'

class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <>
        <UserStateProvider>
          <Component {...pageProps} />
        </UserStateProvider>
      </>
    )
  }
}

export default MyApp
