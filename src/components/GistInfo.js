import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import uid from 'uid'

import GistBottomInfo from './shared/GistBottomInfo'

const GistInfo = (props) => {
  const files = Object.keys(props.files).map(i => props.files[i])

  return (
    <section>
      <Title>
        <a href={props.html_url} target="_blank" rel="noopener noreferrer">
          {props.description || 'Untitled'}
        </a>
      </Title>

      <GistBottomInfo owner={props.owner} createdAt={props.created_at} />

      <h4>Files:</h4>
      <ul>
        {files.map(file => (
          <li key={uid()}>
            <a href={file.raw_url} target="_blank" rel="noopener noreferrer">
              {file.filename}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

GistInfo.propTypes = {
  description: PropTypes.string,
  html_url: PropTypes.string,
  created_at: PropTypes.string.isRequired,
  files: PropTypes.object,
  owner: PropTypes.object,
}

const Title = styled.h1`
  font-size: 20px;
`

export default GistInfo
