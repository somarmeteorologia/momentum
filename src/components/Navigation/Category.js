import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { theme } from 'styled-tools'

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 15px;
  padding: 15px 20px;
  background-color: ${theme('navigation.bg.secondary')};
`

const Title = ({ children }) => {
  const { navigation } = useContext(ThemeContext)
  const color = navigation.text.primary

  return (
    <Container>{children({ details: color, description: color })}</Container>
  )
}

export default {
  id: 'category',
  Title
}
