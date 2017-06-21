import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Pagination = ({ activePage, nextPage, backPage }) => {
  return (
    <Wrapper>
      <Button onClick={backPage}>
        <span>Back</span>
      </Button>
      <Button onClick={nextPage}>
        <span>Next</span>
      </Button>
    </Wrapper>
  )
}

Pagination.propTypes = {
  activePage: PropTypes.number,
  nextPage: PropTypes.func.isRequired,
  backPage: PropTypes.func.isRequired,
}

const Wrapper = styled.ul`
  display: flex;
  height: 40px;
  list-style: none;
  padding: 0;
`

const Button = styled.li`
  cursor: pointer;
  width: 100%;
  text-transform: uppercase;
  background-color: #E7ECF2;
  border-left: 1px #ccc solid;
  display: flex;
  justify-content: center;
  align-items: center
`

export default Pagination
