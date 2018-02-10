import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

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

  onClickLogout = (e) => {
    e.preventDefault()
    this.props.dispatch({ type: 'LOGOUT' })
  }

  renderNonLoggedInMenu = () => {
    return (
      <React.Fragment>
        <Link to="/">Home</Link> / <Link to="/login">Login</Link> / <Link to="/signup">Signup</Link>
      </React.Fragment>
    )
  }

  renderLoggedInMenu = () => {
    return (
      <React.Fragment>
        <p>You are logged in!!</p>
        <Link to="/">Home</Link> / <Link to="/create-post">Create Post</Link> / <a href="/logout" onClick={this.onClickLogout}>Logout</a>
      </React.Fragment>
    )
  }
  render() {

    return (
      <HeaderWrapper>
        
        { this.props.isLoggedIn ? this.renderLoggedInMenu() : this.renderNonLoggedInMenu() }
      </HeaderWrapper>
    )
  }
}

export default connect((state, ownProps) => {
  return {
    ...ownProps,
    isLoggedIn: !!state.token,
  }
})(Header)
