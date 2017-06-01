import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import GistBottomInfo from './shared/GistBottomInfo'

const GistItem = ({ id, description, owner, created_at }) => {
  return (
    <Item>
      <Link to={`/gist/${id}`}>{description || 'Not provided'}</Link>
      <GistBottomInfo owner={owner} createdAt={created_at}/>
    </Item>
  )
}
const Item = styled.li`
  padding: 1em;
  border: 1px #ccc solid;
  margin-bottom: 1em;
  border-radius: 0.3em;
`
export default GistItem
