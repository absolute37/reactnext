import React, { useEffect } from 'react'
import { Button, Layout, Text } from 'components/atoms'
import { Card } from 'components/molecules'
import { Row, Col } from 'antd'

const { Header } = Layout

const HomeContainer = () => {
  useEffect(() => {
    console.log('test')
  }, [])

  return (
    <>
      <Header>
        <Text color="white" size="xl" fontWeight="bold">
          TEST
        </Text>
      </Header>
    </>
  )
}

export default HomeContainer
