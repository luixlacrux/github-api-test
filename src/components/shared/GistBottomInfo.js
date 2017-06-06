import React from 'react'
import styled from 'styled-components'

import UserInfo from './UserInfo'
import GistCreatedAt from './GistCreatedAt'

const GistBottomInfo = ({ owner, createdAt }) => (
  <BottomInfo>
    <UserInfo owner={owner} />
    <GistCreatedAt createdAt={createdAt} />
  </BottomInfo>
)

const BottomInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default GistBottomInfo
