import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Wrapper>
      <Title>Github<Light>Gist</Light></Title>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  background: #24292E;
  color: white;
  padding: 1em;
`
const Title = styled.h1`
  margin: 0 auto;
  max-width: 1000px;
`
const Light = styled.span`
  font-weight: lighter;
`

export default Header
