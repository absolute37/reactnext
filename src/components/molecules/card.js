import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text } from 'components/atoms'
import styled from 'styled-components'

const Card = ({ title, content, footer }) => {
  return (
    <Container>
      <p>{title}</p>
      <Text>content</Text>
      <hr />
      {footer}
    </Container>
  )
}

const Container = styled.div`
  border-radius: 4px;
  width: 250px;
  height: 200px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
`

export default Card
