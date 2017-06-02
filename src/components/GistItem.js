import React from 'react'
import PropTypes from 'prop-types'
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

GistItem.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string,
  owner: PropTypes.object,
  created_at: PropTypes.string.isRequired,
}

const Item = styled.li`
  padding: 1em;
  border: 1px #ccc solid;
  margin-bottom: 1em;
  border-radius: 0.3em;
`

export default GistItem
