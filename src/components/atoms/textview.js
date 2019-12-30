import styled from 'styled-components'
import PropTypes from 'prop-types'
import theme from 'theme'

export const getColor = (name) => {
  switch (name) {
    case 'lightGray':
      return '#959199'
    case 'white':
      return '#FFFFFF'
    case 'primary':
      return '#7631C1'
    case 'green':
      return '#06bf59'
    case 'yellow':
      return '#ffc241'
    default:
      return '#353239'
  }
}

const { fontSize } = theme

export const getSize = (size) => {
  switch (size) {
    case 'xl':
      return fontSize.xl // 24px
    case 'lg':
      return fontSize.lg //22px
    case 'sm':
      return fontSize.sm //18px
    case 'xs':
      return fontSize.xs //16px
    case 'md':
    default:
      return fontSize.md //20px
  }
}

const TextView = styled.span`
  color: ${({ color }) => getColor(color)};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ size }) => getSize(size)};
`

TextView.propTypes = {
  children: PropTypes.node,
}

TextView.defaultProps = {
  children: undefined,
}

export default TextView
