import React, { useEffect } from 'react'
import Head from 'next/head'
import HomeContainer from 'container/home'

const Home = () => {
  useEffect(() => {
    console.log('asdas')
  }, [])

  return (
    <>
      <Head>
        <title>HOME</title>
      </Head>
      <HomeContainer />
    </>
  )
}

export default Home
