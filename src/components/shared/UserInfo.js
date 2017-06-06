import React from 'react'
import styled from 'styled-components'

import avatarDefault from '../../avatar-default.png'

const UserInfo = ({ owner = {} }) => (
  <User>
    <Avatar src={owner.avatar_url || avatarDefault} />
    <p>
      <a href={owner.html_url || '#'} target="_blank" rel="noopener noreferrer">
        {owner.login || 'Anonymous'}
      </a>
    </p>
  </User>
)

const User = styled.div`
  padding: 0.5em 0;
  display: flex;
  align-items: center;
  p {
    margin: 0;
    padding: 0.5em;
  }
`
const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 8px;
`

export default UserInfo
