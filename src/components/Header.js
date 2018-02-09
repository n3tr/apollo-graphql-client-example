import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderWrapper = styled.div`
  margin-bottom: 40px;
  padding-top: 30px;
  text-align: center;
  display: block;

  a {
    color: #fff;
    text-decoration: none; 
  }
  
  p {
    font-size: 20px;
  }
`


class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper>
        <p>Hello, Net</p>
        <Link to="/login">Login</Link> / <Link to="/signup">Signup</Link>
      </HeaderWrapper>
    )
  }
}

export default Header
