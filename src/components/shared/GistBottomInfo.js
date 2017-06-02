import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import UserInfo from './UserInfo'
import GistCreatedAt from './GistCreatedAt'

const GistBottomInfo = ({ owner, createdAt }) => {
  return (
    <BottomInfo>
      <UserInfo owner={owner} />
      <GistCreatedAt createdAt={createdAt} />
    </BottomInfo>
  )
}

GistBottomInfo.propTypes = {
  owner: PropTypes.object,
  createdAt: PropTypes.string.isRequired,
}

const BottomInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default GistBottomInfo
