import React from 'react'
import styled from 'styled-components'

import GistItem from '../components/GistItem'

const Gists = ({ gists }) => {
  return (
    <List>
      {gists.map(gist =>
        <GistItem key={gist.id} {...gist} />
      )}
    </List>
  )
}

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 15px 10px;
`

export default Gists
