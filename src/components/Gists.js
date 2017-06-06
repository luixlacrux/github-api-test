import React from 'react'
import styled from 'styled-components'

import GistItem from './GistItem'

const Gists = ({ gists }) => (
  <List>
    {gists.length > 0 && gists.map(gist =>
      <GistItem key={gist.id} {...gist} />
    )}
  </List>
)

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 15px 10px;
`

export default Gists
