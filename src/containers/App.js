import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Pages from '../pages'
import Header from '../components/Header'

const App = () => {
  return (
    <main>
      <Header />
      <Button>
        <Link to="/">/ Inicio</Link>
      </Button>
      <Pages />
    </main>
  )
}

const Button = styled.nav`
  padding: 1em;
  max-width: 1000px;
  margin: 0 auto;
`

export default App
