import React from 'react'
import styled from 'styled-components'

import avatarDefault from '../../avatar-default.png'

const UserInfo = (props) => {
  const { owner } = props

  return (
    <User>
      <Avatar src={owner ? owner.avatar_url : avatarDefault} />
      <Name>
        <a href={owner ? owner.html_url : '#'} target="_blank" rel="noopener noreferrer">
          {owner ? owner.login : 'Anonymous'}
        </a>
      </Name>
    </User>
  )
}

const User = styled.div`
  padding: .5em 0;
  display: flex;
  align-items: center;
`
const Name = styled.p`
  margin: 0;
  padding: 0.5em;
`
const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 8px;
`

export default UserInfo
