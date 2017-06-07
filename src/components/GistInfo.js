import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import GistBottomInfo from './shared/GistBottomInfo'

const GistInfo = ({ gist }) => {
  const files = Object.keys(gist.files).map(i => gist.files[i])

  return (
    <section>
      <Title>
        <Link to="/" className="light">Gists</Link>
        <span className="divider"> / </span>
        <a href={gist.html_url} target="_blank" rel="noopener noreferrer">
          {gist.description || 'Untitled'}
        </a>
      </Title>
      <GistBottomInfo owner={gist.owner} createdAt={gist.created_at}/>
      <h4>Files:</h4>
      <ul>
        {files.map((file, i) =>
          <li key={i}>
            <a href={file.raw_url} target="_blank" rel="noopener noreferrer">
              {file.filename}
            </a>
          </li>
        )}
      </ul>
    </section>
  )
}

const Title = styled.h1`
  font-size: 20px;
  .light {
    font-weight: normal;
  }
  .divider {
    color: #777;
    font-size: 16px;
  }
`

export default GistInfo
