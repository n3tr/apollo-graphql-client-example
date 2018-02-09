import React from 'react'
import styled from 'styled-components'

import HomePage from './pages/HomePage'
import PostPage from './pages/PostPage'
import LoginPage from './pages/LoginPage'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import SignupPage from './pages/SignupPage'

const Container = styled.div`
  width: 800px;
  margin: 0 auto;
`

const Header = styled.div`
  height: 40px;
  margin-bottom: 40px;
`

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Container className="container">
            <Route exact path="/" component={HomePage} />
            <Route path="/post/:id" component={PostPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} />
          </Container>
        </div>
      </Router>
    )
  }
}

export default App
