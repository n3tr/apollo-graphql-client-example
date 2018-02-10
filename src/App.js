import React from 'react'
import styled from 'styled-components'

import Header from './components/Header'
import HomePage from './pages/HomePage'
import PostDetailPage from './pages/PostDetailPage'
import LoginPage from './pages/LoginPage'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import CreatePostPage from './pages/CreatePostPage';

const Container = styled.div`
  width: 800px;
  margin: 0 auto;
`

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Container className="container">
            <Route exact path="/" component={HomePage} />
            <Route path="/post/:id" component={PostDetailPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} /> 
            <Route path="/create-post" component={CreatePostPage} />
          </Container>
        </div>
      </Router>
    )
  }
}

export default App
